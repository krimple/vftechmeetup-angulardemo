(function() {
  'use strict';

  angular.module('demoApp', ['ngRoute', 'btford.markdown'])
    .config(function($routeProvider, $logProvider) {
      $routeProvider
        .when('/calculator', {
          controller: 'CalcCtrl',
          templateUrl: 'views/calculator.html'
        })
        .when('/editor', {
          controller: 'EditorCtrl',
          templateUrl: 'views/editor.html'
        });

      // set this to true to see debug output in the console
      // otherwise we'll only see it in tests (see the test setup)
      $logProvider.debugEnabled(false);
    })
    .directive('menuitem', function() {
      return {
        restrict: 'C',
        link: function(scope, element, attributes) {
          jQuery('#menuitem').removeClass('selected');
          element.addClass('selected');
        }
      };
    });
}());