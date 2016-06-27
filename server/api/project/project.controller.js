/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 * GET     /api/things/:id          ->  show
 * PUT     /api/things/:id          ->  update
 * DELETE  /api/things/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import async from 'async';
import mailer from 'nodemailer';
import Project from './project.model';
import User from '../user/user.model';
import path from 'path'


Project.createMapping(function(err, map) {
  if (err) {
    console.log(err)
  } else {
    console.log(map)
  }
});

var stream = Project.synchronize(),
    count = 0;
stream.on('data', function(err, doc){
  count++;
});
stream.on('close', function(){
  console.log('indexed ' + count + ' documents!');
});
stream.on('error', function(err){
  console.log(err);
});

var emailTemplate = require('email-templates').EmailTemplate,
    transporter   = mailer.createTransport({service: 'Gmail', auth: {user: 'dan@danielprice.co', pass: 'lUnaD71lcBXnzWuR'}}),
    templateDir   = path.join(__dirname, '../../../client', 'email', 'share'),
    email         = new emailTemplate(templateDir);

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function respondWithProject(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function sendNotificationsForProjects(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      var recipients = []
      _.forEach(entity, function(p) {
        async.each(p.users, function(u, cb) {
          recipients.push({'name': (u.name && u.name.split(' ')[0].length ? ` ${u.name.split(' ')[0]}` : ' '), 'email': u.email});
          return cb()
        }, function() {
          if (recipients.length) {
            return _.forEach(recipients, function(e) {
              transporter.sendMail({
                from: '"Conclude App" <support@concludeapp.co>',
                to: e.email,
                subject: 'A Research Project was Recently Updated',
                text: 'Hey ${e.name},\n${entity.title} was updated within the last 24 hours.\nhttp://localhost:9000/projects/${entity._id}',
                html: `<p>Hey ${e.name},</p><p><i>${p.title}</i> was updated within the last 24 hours.</p><p><a href="http://localhost:9000/project/${p._id}">Log In to View</a></p>`
              }, function(err, res) {
                console.log('Gone')
                if (err) { return console.log('Error: ', err); }
              });
            });
          }
        });
      });
      return res.status(statusCode).json(entity);
    } else {
      return res.status(statusCode);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.assign(entity, updates);
    updated.markModified('comments')
    updated.markModified('users')
    updated.markModified('personas')
    updated.markModified('files')
    updated.markModified('implications')
    updated.markModified('quotes')
    updated.markModified('decisions')
    updated.markModified('taxonomy.tags')
    updated.markModified('taxonomy.products')
    updated.markModified('timestamp.updatedAt')
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Projects
function respondWithFilteredResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function sendEmail(user, project) {
  var data = {
    user: user,
    project: project
  }
  email.render(data, function(err, res) {
    console.log(process.env.EMAIL_USERNAME, process.env.EMAIL_PASSWORD)
    if (err) return console.log(err)
    transporter.sendMail({
      from: '"Conclude App" <support@concludeapp.co>',
      to: user.email,
      subject: project.title + ' was just shared with you',
      text: res.text,
      html: res.html
    }, function(err, res) {
      if (err) { return console.log('Error: ', err); }
    })
  });
}

function createUser(email, project, cb) {
  var newUser = new User({email: email});
  newUser.provider = 'google';
  newUser.role = 'user';
  newUser.save()
    .then(function(user) {
      // user.first = user.name.split(' ')[0];
      console.log(user);
      sendEmail(user, project)
      cb(user);
    });
}

// Add Project Access to User
export function share(req, res, next) {
  var users = req.body,
      projectId = req.params.id,
      projectUsers = [],
      message = users[0].message;
  Project.findById(projectId).exec()
    .then(function(res) {
      if (!res) { return }
      var project = res;
          _.set(project, 'message', message);
      return async.each(users, function(u, cb) {
        User.findOne({email: u.email}).exec()
          .then(function(res) {
            if (res) {
              projectUsers.push({user: res._id, notifications: 1});
              res.first = res.name.split(' ')[0];
              sendEmail(res, project);
              cb()
            } else {
              createUser(u.email, project, function(u) {
                projectUsers.push({user: u._id, notifications: 1});
                cb()
              });
            }
          });
      }, function sent() {
        res.users = _.union(res.users, projectUsers);
        res.save()
      })
    })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/* Recommend Research */
export function recommend(req, res) {
  var query = req.body.params;
  if (query.length) {
    return Project.find(query).exec()
      .then(respondWithFilteredResult(res))
      .catch(handleError(res));
  } else {
    return Project.find().exec()
      .then(respondWithResult(res))
      .catch(handleError(res));
  }
}

export function search(req, res) {
  var response = res;
  Project.search({query_string: {query: req.body.query}}, {hydrate: true}, function(err, res) {
    if (err) {
      response.status(500).json(err);
    } else {
      response.status(200).json(res.hits.hits);
    }
  });
}
/* Commented for Maintanability */
export function index(req, res) {
  var query = [];
  /*
   * Loop through request object, generating an 
   * Object of key/value pairs to query by Mongoose
   * @var query;
   */
  _.forEach(req.body, function(key) {
    /*
     * If the key is an object (tags, products),
     * get the _id for the value, otherwise use the string.
     */
    if (typeof key.query === 'object') {
      key.query = key.query._id;
    } else {
      key.query = new RegExp(key.query, 'i');
    }
    /*
     * Add the object from the filters
     * namespace, and the query value.
     */
    return query.push({[key.namespace]: key.query});
  });
  query.push({status: true});
  /* End Loop, Poll Server */
  if (query.length) {
    return Project.find({$and: query}).exec()
      .then(respondWithFilteredResult(res))
      .catch(handleError(res));
  } else {
    return Project.find().exec()
      .then(respondWithResult(res))
      .catch(handleError(res));
  }
}

// Notifications
export function sendNotifications(req, res) {
  // yesterday is new Date(Date.now() - (24 * 60 * 60 * 1000))
  var y = new Date(Date.now() - (60 * 1000));
  Project.find({updatedAt: {$gt: y}}, '_id title users').populate('users.user').exec()
  // Project.find({}, '_id title users').populate('users').exec()
    .then(handleEntityNotFound(res))
    .then(sendNotificationsForProjects(res))
    .catch(handleError(res));
}

// Gets a single Project from the DB
export function show(req, res) {
  return Project.findById(req.params.id).populate("taxonomy.category taxonomy.subcategory taxonomy.products taxonomy.tags personas files researchMethod researcher users.user").exec()
    .then(handleEntityNotFound(res))
    .then(respondWithProject(res))
    .catch(handleError(res));
}

// Creates a new Project in the DB
export function create(req, res) {
  return Project.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Project in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Project.findById(req.params.id).populate("taxonomy.category taxonomy.subcategory taxonomy.products taxonomy.tags personas files researchMethod researcher users.user").exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Project from the DB
export function destroy(req, res) {
  return Project.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
