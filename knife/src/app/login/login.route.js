'use strict';
 
module.exports = function($stateProvider) {
	$stateProvider.state('login',{
		url : '/login',
		templateUrl : 'login/login.tmp.html',
		controller : 'LgnLandingCtrl',
		controllerAs : 'lgnLandingCtrl'
	});
};