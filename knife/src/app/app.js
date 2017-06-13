
'use strict';
var requires = [
                require('@uirouter/angularjs'),
                require('angular-material'),
                require('./app.route'),
                require('./login')
                ];
var angular = require('angular');
var knife =angular.module('knife', requires);
module.exports =knife;
