(function() {
  'use strict';

  angular.module('demoApp')
    .filter('filterAsHtml', function($sce) {
     return function(value) {
       if (angular.isString(value)) {
         return value.toUpperCase();
       } else {
         return value;
       }
     };
    })
    .controller('EditorCtrl', function($scope, $sce) {

    });
}());