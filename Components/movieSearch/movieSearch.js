function MovieSearchController($scope, $element, $attrs, $rootScope, $state, $stateParams, toaster, helperUtils) {
  var ctrl = this;
  ctrl.name = $stateParams.name;
  ctrl.year = $stateParams.year;
  ctrl.imdb = $stateParams.imdb;
  
  ctrl.searchMovie = function() {
	var params = {
     name: ctrl.name,
     year: ctrl.year,
     imdb: ctrl.imdb,
    }
	$state.go('moviesearch.list', params, {reload: true, notify: false});
  };
  
  ctrl.resetParams = function() {
	ctrl.name = "";
	ctrl.year = "";
	ctrl.imdb = "";	
  };
}

movieApp.component('movieSearch', {
  templateUrl: 'Components/movieSearch/movieSearch.html',
  controller: MovieSearchController
});
