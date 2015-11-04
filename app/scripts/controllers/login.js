'use strict';

angular.module('washerApp')
  .controller('LoginCtrl', function ($scope, $location) {

    $scope.signin = function() {
    	$location.path('/order');
    };

  });
