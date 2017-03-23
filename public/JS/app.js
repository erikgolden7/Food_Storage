angular.module('foodApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "../public/views/home/home.html",
		controller: "../public/views/home/homeCtrl"
	})

	
	
	
});
