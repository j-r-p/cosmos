'use strict';

angular.module('knife').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/login');
	
}]);