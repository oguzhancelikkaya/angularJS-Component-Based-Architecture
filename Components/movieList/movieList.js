function MovieListController($scope, $element, $attrs, $rootScope, toaster) {
  var ctrl = this;

  ctrl.list = $rootScope.list;
  
  
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
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
      ctrl.list[idx].editMode = false;
    }
	toaster.pop({type: 'success',title: 'Updated',body: 'Movie has been updated',bodyOutputType: 'trustedHtml',timeout: 3000,showCloseButton: true});
  };  
  
}

movieApp.component('movieList', {
  templateUrl: 'Components/movieList/movieList.html',
  controller: MovieListController
});
