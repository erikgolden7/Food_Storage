angular.module('foodApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('/', {
		url: "home",
		templateUrl: "public/views/home.html",
		controller: "public/views/homeCtrl"
	})
	
	
	
});
