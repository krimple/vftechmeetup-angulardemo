(function () {
  'use strict';
  describe('Calculator', function () {
    var $scope, $logProvider, $log;

    beforeEach(module('demoApp', function(_$logProvider_) {
      $logProvider = _$logProvider_;
    }));


    beforeEach(inject(function(_$log_) {
      $log = _$log_;
    }));

    beforeEach(
      inject(function ($controller, $rootScope) {
        $logProvider.debugEnabled(true);
        $scope = $rootScope.$new();

        $scope.inputForm = {
          $valid: true
        };
        $controller('CalcCtrl', {
          $scope: $scope
        });
      }));

    it('should accept a change with the enter key', function () {
      var event = {
        keyCode: 13
      };
      $scope.enter(event, '12345');
      expect($scope.stack[0]).toBe(12345);
      // dump all logs - normally goes to the console but is stored
      // during testing in $log
      console.log('Debug logs for the enter key tests', $log.debug.logs);
    });

    it('should perform math to two numbers properly', function () {
      var operations = ['+', '-', '*', '/'],
          results = [15, 5, 50, 2];
      for (var operationIdx in operations) {
        $scope.stack = [10, 5];
        $scope.operate(operations[operationIdx]);
        expect($scope.stack.length).toBe(1);
        expect($scope.stack[0]).toBe(results[operationIdx]);
      }

      console.log('Debug logs for the number math tests', JSON.stringify($log.debug.logs));
    });
  });
}());