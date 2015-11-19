'use strict';


angular.module('washerApp')
  .service('productService', function($http) {

    this.getAll = function() {
      return $http.get('washer/data/products.json');
    };

  });
