movieApp.config(function($stateProvider, $urlRouterProvider) {

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
movieApp.run(function($rootScope) {
	$rootScope.list = [
		{
			id: '1',
			name: 'Back to the Future',
			year: '1985',
			imdb: '8,5'
		},
		{
			id: '2',		
			name: 'The Dark Night',
			year: '2008',
			imdb: '9,0'
		},
		{
			id: '3',	
			name: 'Eternal Sunshine of the Spotless Mind',
			year: '2004',
			imdb: '8,3'
		}
		
	];
});
