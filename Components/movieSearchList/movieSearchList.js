function MovieSearchListController($state, $stateParams, $rootScope, helperUtils, toaster) {
  var ctrl = this;
  ctrl.list = [];
  if(helperUtils.isNotEmpty($stateParams.name) || helperUtils.isNotEmpty($stateParams.year) || helperUtils.isNotEmpty($stateParams.imdb)){
  	angular.forEach($rootScope.list, function(roll, key){
  		if(roll.name == $stateParams.name)
  			ctrl.list[ctrl.list.length] = roll;
  		else if(roll.year == $stateParams.year)
  			ctrl.list[ctrl.list.length] = roll;
  		else if(roll.imdb == $stateParams.imdb)
  			ctrl.list[ctrl.list.length] = roll;
  	});
  	
  }

  ctrl.deleteMovie = function(movie) {
    if (ctrl.list.indexOf(movie) >= 0) { ctrl.list.splice(ctrl.list.indexOf(movie), 1); }
    if ($rootScope.list.indexOf(movie) >= 0) { $rootScope.list.splice($rootScope.list.indexOf(movie), 1); }
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

movieApp.component('movieSearchList', {
  templateUrl: 'Components/movieSearchList/movieSearchList.html',
  controller: MovieSearchListController
});
