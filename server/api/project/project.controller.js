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
import mailer from 'nodemailer';
import Project from './project.model';
import User from '../user/user.model';

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
      var recipients = [],
          transporter = mailer.createTransport({service: 'Gmail', auth: {user: 'dan@danielprice.co', pass: 'lUnaD71lcBXnzWuR'}});
      _.forEach(entity, function(p) {
        _.forEach(p.users, function(u) {
          recipients.push({'name': u.name.split(' ')[0], 'email': u.email});
        });
        if (recipients.length) {
          return _.forEach(recipients, function(e) {
            transporter.sendMail({
              from: '"Conclude App" <support@concludeapp.co>',
              to: e.email,
              subject: 'A Research Project was Recently Updated',
              text: 'Hey ${e.name},\n${entity.title} was updated within the last 24 hours.\nhttp://localhost:9000/projects/${entity._id}',
              html: `<p>Hey ${e.name},</p><p><i>${p.title}</i> was updated within the last 24 hours.</p><p><a href="http://localhost:9000/project/${p._id}">Log In to View</a></p>`
            }, function(err, res) {
              if (err) { return console.log('Error: ', err); }
            });
          });
        }
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

// Add Project Access to User
export function share(req, res) {
  var users = req.body,
      projectId = req.params.id,
      projectUsers = [];
  _.forEach(users, function(user) {
    User.findOne({'email': user.email}).exec()
      .then(function(res) {
        if (!res) {
          return
        } else {
          res.projectAccess.push({project: user.project, accessLevel: user.accessLevel, notifications: 1});
          projectUsers.push(res._id);
          return res.save()
        }
      });
  });
  return Project.findById(projectId).exec()
    .then(function(res) {
      if (!res) {
        return
      } else {
        res.users = _.union(res.users, projectUsers);
        return res.save()
      }
    })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
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
  Project.find({updatedAt: {$gt: y}}, '_id title users').populate('users').exec()
  // Project.find({}, '_id title users').populate('users').exec()
    .then(handleEntityNotFound(res))
    .then(sendNotificationsForProjects(res))
    .catch(handleError(res));
}

// Gets a single Project from the DB
export function show(req, res) {
  return Project.findById(req.params.id).populate("taxonomy.category taxonomy.subcategory taxonomy.products taxonomy.tags personas files researchMethod researcher users").exec()
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
  return Project.findById(req.params.id).populate("taxonomy.category taxonomy.subcategory taxonomy.products taxonomy.tags personas files researchMethod researcher users").exec()
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
