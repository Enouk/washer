'use strict';

/**
 * @ngdoc function
 * @name washerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the washerApp
 */
angular.module('washerApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
