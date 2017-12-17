function MovieListController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.list = [
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
