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
      DELIVERY: 'delivery',
      DELIVERED: 'delivered'
    };

    $scope.orders = [];
    $scope.selectedTab = $scope.TABS.PICKUPS;
    $scope.statusFilter = $scope.FILTERS.PICKUPS;

    $scope.init = function() {

      OrderService.getCurrent()
        .success(function(orders) {
          $scope.orders = orders;
          $scope.showPickups();
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta orderlistan';
        });
    };

    $scope.init();

    $scope.showPickups = function() {
      $scope.selectedTab = $scope.TABS.PICKUPS;
      $scope.statusFilter = $scope.FILTERS.PICKUPS;
    };

    $scope.showOngoing = function() {
      $scope.selectedTab = $scope.TABS.ONGOING;
      $scope.statusFilter = $scope.FILTERS.ONGOING;
    };

    $scope.showDeliveries = function() {
      $scope.selectedTab = $scope.TABS.DELIVERY;
      $scope.statusFilter = $scope.FILTERS.DELIVERY;
    };

    $scope.count = function(status) {

      var count = 0;

      for (var i = 0; i < $scope.orders.length; i++) {

        if ($scope.orders[i].status === status) {
          count += 1;
        }
      }

      return count;
    };

    $scope.pickedup = function(order) {
      order.status = $scope.FILTERS.ONGOING;
    };

    $scope.washed = function(order) {
      order.status = $scope.FILTERS.DELIVERY;
    };

    $scope.delivered = function(order) {
      order.status = $scope.FILTERS.DELIVERED;
    };

    $scope.getCustomer = function() {
      var cust = {
        firstName: 'Adam',
        lastName: 'Bengtsson'
      };

      return cust;
    };

  });
