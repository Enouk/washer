'use strict';


angular.module('washerApp')
  .service('customerService', function($http) {

    this.getAll = function() {
      return $http.get('washer/data/customers.json');
    };

  });
