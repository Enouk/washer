'use strict';


angular.module('washerApp')
  .service('productService', function($http) {

    this.getAll = function() {
      return $http.get('data/products.json');
    };

  });
