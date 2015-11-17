'use strict';


angular.module('washerApp')
  .controller('HistoryCtrl', function($scope, OrderService) {

    OrderService.getHistory()
      .success(function(orders) {
        $scope.orders = orders;
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta historik';
      });

  });
