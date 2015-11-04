'use strict';

/**
 * @ngdoc function
 * @name washerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the washerApp
 */
angular.module('washerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
