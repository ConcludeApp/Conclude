'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

router.post('/index', controller.index);
router.get('/notifications', controller.sendNotifications);
router.post('/:id/share', controller.share);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.post('/', controller.create);

module.exports = router;
