'use strict';
var loginModule = require('knife').module('knife.login',[]);

loginModule.config(require('./login.route'));
loginModule.controller('LgnLandingCtrl', require('./lgnLanding.ctrl'));
loginModule.service('LgnLandingSrv', require('./lgnLanding.srv'));

module.exports =loginModule;