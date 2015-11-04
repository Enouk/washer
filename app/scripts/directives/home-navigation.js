'use strict';

angular.module('washerApp')
  .controller('homeNavigationCtrl', function($scope, $location) {

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

  });

angular.module('washerApp')
  .directive('homeNavigation', function() {
    return {
      controller: 'homeNavigationCtrl',
      templateUrl: 'views/home-navigation.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
