function MovieListController($scope, $element, $attrs, $rootScope) {
  var ctrl = this;

	ctrl.list = $rootScope.list;
  
  
  ctrl.deleteMovie = function(movie) {
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
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
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
      ctrl.list[idx].editMode = false;
    }
  };  
  
}

angular.module('movieApp').component('movieList', {
  templateUrl: 'Components/movieList/movieList.html',
  controller: MovieListController
});
