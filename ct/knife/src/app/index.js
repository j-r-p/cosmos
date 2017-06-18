
'use strict';
require('angular');
require('@uirouter/angularjs');
var templateCache = require('gulp-angular-templatecache'); 
//require('angular-material');
require('./login');
require('gulp-angular-templatecache');
angular.module('templates', []);
var requires = [
                'ui.router',
                //'angular-material',
                'templates',
                'knife.login'
                ];
var knife = angular.module('knife', requires);
knife.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/login');
	
}]);
module.exports = knife;
