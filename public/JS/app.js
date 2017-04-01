angular.module('foodApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "views/home/home.html",
		controller: "homeCtrl"
	})
	.state('catalog', {
		url: "/catalog",
		templateUrl: "views/catalog/catalog.html",
		controller: "catalogCtrl"
	})
	.state('expiration', {
		url: "/expiration",
		templateUrl: "views/expiration/expiration.html",
		controller: "expirationCtrl"
	})
	.state('meals', {
		url: "/meals",
		templateUrl: "views/meals/meals.html",
		controller: "mealsCtrl"
	})
	.state('day', {
		url: "/day",
		templateUrl: "views/meals/day_view/day_view.html"
	})
	.state('week', {
		url: "/week",
		templateUrl: "views/meals/week_view/week_view.html"
	})
	.state('month', {
		url: "/month",
		templateUrl: "views/meals/month_view/month_view.html"
	})
	
});
