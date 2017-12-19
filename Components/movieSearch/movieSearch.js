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
    $state.go('moviesearch', {});
  };

    ctrl.deleteMovie = function(movie) {
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  toaster.pop({type: 'success',title: 'Deleted',body: 'Movie has been deleted',bodyOutputType: 'trustedHtml',timeout: 3000,showCloseButton: true});
  };

  ctrl.updateMovie = function(movie) {
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
      ctrl.list[idx].editMode = true;
    }
  };

  ctrl.cancelMovie = function(movie, movieCopy) {
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
      ctrl.list[idx].editMode = false;
      ctrl.list[idx] = movieCopy;
    }
  };

  ctrl.saveMovie = function(movie) {
  if(helperUtils.isNotEmpty(movie.name)){
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
    ctrl.list[idx].editMode = false;
    }
    toaster.pop({type: 'success',title: 'Updated',body: 'Movie has been updated',bodyOutputType: 'trustedHtml',timeout: 3000,showCloseButton: true});
  }
  else{
    toaster.pop({type: 'warning',title: 'Empty',body: 'Movie name cannot be empty',bodyOutputType: 'trustedHtml',timeout: 3000,showCloseButton: true});
  }
  };  
}

movieApp.component('movieSearch', {
  templateUrl: 'Components/movieSearch/movieSearch.html',
  controller: MovieSearchController
});
