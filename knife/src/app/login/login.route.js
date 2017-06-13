'use strict';
 
module.exports = function($stateProvider) {
	$stateProvider.state('login',{
		url : '/login',
		templateUrl : '<h1>Hello World!!!!<h1>',
		controller : 'LgnLandingCtrl',
		controllerAs : 'lgnLandingCtrl'
	});
};