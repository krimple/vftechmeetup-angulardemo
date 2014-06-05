(function () {
  'use strict';

  angular.module('demoApp')
    .controller('CalcCtrl', function ($scope, $log) {

      // global to the view - i.e. in the scope - is the stack of numbers
      $scope.stack = [];

      // this is triggered whenever a user hits [ENTER] on the input field
      // it is supposed to parse the field, and either add the number to the stack
      // or operate on two numbers from the stack.

      $scope.enter = function ($event, value) {
        var numberValue;
        if (!$scope.inputForm.$valid) {
          $log.debug("data not valid");
          return;
        }
        $log.debug('keycode', $event.keyCode);
        $log.debug('value', value);

        if ($event.keyCode === 13) {
          $log.debug('hit [ENTER]');
          if (value.match(/^\+|\-|\*|\//)) {
            $log.debug('hit operation');
            $scope.operate(value);
            $scope.value = '';
            return;
          }

          try {
            // must be a number, so parse it
            numberValue = Number.parseFloat(value);

          } catch(e) {
            $log.debug('bad value', e);
          }
          // oh Javascript, your Global functions frustrate me
          if (isNaN(numberValue)) {
            $log.debug('NaN!!!');
            $scope.value = '';
            return;
          }


          $scope.stack.unshift(numberValue);
          $scope.value = '';
        }
      };

      $scope.operate = function (opcode) {
        if ($scope.stack.length >= 2) {
          var op1 = $scope.stack.shift(),
              op2 = $scope.stack.shift(),
              result;


          // eval is evil so we'll hardcode this silliness
          switch(opcode) {
            case '+': {
              result = op1 + op2;
              break;
            }
            case '-': {
              result = op1 - op2;
              break;
            }
            case '*': {
              result = op1 * op2;
              break;
            }
            case '/': {
              result = op1 / op2;
              break;
            }
            default: {
              throw 'invalid';
            }
          }
          $log.debug(op1, op2, result, $scope.stack);
          $scope.stack.unshift(result);
        }
      };
    });
}());