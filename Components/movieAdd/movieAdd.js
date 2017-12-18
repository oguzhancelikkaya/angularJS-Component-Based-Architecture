function MovieAddController($scope, $element, $attrs, $rootScope, $state) {
  var ctrl = this;
  
  ctrl.name = "";
  ctrl.year = "";
  ctrl.imdb = "";
  
  ctrl.list = $rootScope.list;
  
  ctrl.saveMovie = function() {
	var listlength = ctrl.list.length;
	ctrl.list[listlength] = {}
	ctrl.list[listlength].id   = listlength + 1;
	ctrl.list[listlength].name = ctrl.name;
	ctrl.list[listlength].year = ctrl.year;
	ctrl.list[listlength].imdb = ctrl.imdb;
	ctrl.resetMovie('reset');
  };

  ctrl.resetMovie = function(resetcase) {
    ctrl.name = "";
    ctrl.year = "";
    ctrl.imdb = "";
	if(resetcase == 'reset'){
		$state.go('movielist', {}, {reload: true, notify: true});
	}
  };
}

angular.module('movieApp').component('movieAdd', {
  templateUrl: 'Components/movieAdd/movieAdd.html',
  controller: MovieAddController
});
