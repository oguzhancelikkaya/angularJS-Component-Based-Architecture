
var routerApp = angular.module('movieApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/movie-list');

    $stateProvider
        .state('movielist', {
            url: '/movie-list',
            component: 'movieList'
        })
		.state('movieadd', {
            url: '/movie-add',
            component: 'movieAdd'
        });


});