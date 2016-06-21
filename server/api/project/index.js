'use strict';

var express = require('express');
var controller = require('./project.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/recommended', auth.isAuthenticated(), controller.recommend);
router.post('/index', auth.isAuthenticated(), controller.index);
router.post('/search', auth.isAuthenticated(), controller.search);
router.get('/notifications', auth.isAuthenticated(), controller.sendNotifications);
router.post('/:id/share', auth.isAuthenticated(), controller.share);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
router.post('/', auth.isAuthenticated(), controller.create);

module.exports = router;
