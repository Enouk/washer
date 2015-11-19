'use strict';


angular.module('washerApp')
  .service('OrderService', function($http) {

    this.getCurrent = function() {
      return $http.get('washer/data/orders.json');
    };

    this.getHistory = function() {
      return $http.get('washer/data/history.json');
    };

  });
