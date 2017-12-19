function MovieDetailController($scope) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.movieCopy = angular.copy(ctrl.movie);
  }

  ctrl.delete = function() {
    ctrl.onDelete({movie: ctrl.movie});
  };

  ctrl.update = function() {
    ctrl.movieCopy = angular.copy(ctrl.movie);
    ctrl.onUpdate({movie: ctrl.movie});
  };

  ctrl.save = function() {
    ctrl.onSave({movie: ctrl.movie});
  };

  ctrl.cancel = function() {
    ctrl.onCancel({movie: ctrl.movie, movieCopy: ctrl.movieCopy});
  };

}

movieApp.component('movieDetail', {
  templateUrl: 'Components/movieDetail/movieDetail.html',
  controller: MovieDetailController,
  bindings: {
    movie: '<',
    onDelete: '&',
    onUpdate: '&',
    onSave: '&',
    onCancel: '&'
  }
});

