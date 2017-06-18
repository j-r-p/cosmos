
'use strict';
require('angular');
require('@uirouter/angularjs');
//require('angular-material');
require('./login');
var templateCache = require('gulp-angular-templatecache');
var requires = [
                'ui.router',
                //'angular-material',
                'knife.login'
                ];
var knife = angular.module('knife', requires);
knife.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/login');
	
}]);
module.exports = knife;
