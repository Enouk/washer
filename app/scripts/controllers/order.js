'use strict';


angular.module('washerApp')
  .controller('OrderCtrl', function($scope, OrderService) {

    $scope.TABS = {
      PICKUPS: 0,
      ONGOING: 1,
      DELIVERY: 2
    };

    $scope.FILTERS = {
      PICKUPS: 'pickup',
      ONGOING: 'ongoing',
      DELIVERY: 'delivery'
    };

    $scope.selectedTab = $scope.TABS.PICKUPS;
    $scope.statusFilter = $scope.FILTERS.PICKUPS;

    $scope.init = function() {

      OrderService.getCurrent()
        .success(function(orders) {
          $scope.orders = orders;
          $scope.pickups();
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta orderlistan';
        });
    };

    $scope.init();

    $scope.pickups = function() {
      $scope.selectedTab = $scope.TABS.PICKUPS;
      $scope.statusFilter = $scope.FILTERS.PICKUPS;
    };

    $scope.ongoing = function() {
      $scope.selectedTab = $scope.TABS.ONGOING;
      $scope.statusFilter = $scope.FILTERS.ONGOING;
    };

    $scope.deliveries = function() {
      $scope.selectedTab = $scope.TABS.DELIVERY;
      $scope.statusFilter = $scope.FILTERS.DELIVERY;
    };

    $scope.getCustomer = function() {
      var cust = {
        firstName: 'Adam',
        lastName: 'Bengtsson'
      };

      return cust;
    };

  });
