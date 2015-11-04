'use strict';


angular.module('washerApp')
  .service('OrderService', function($http) {

    this.getCurrent = function() {
      return $http.get('/data/orders.json');
    };

    this.getHistory = function() {
      return $http.get('/data/history.json');
    };

  });
