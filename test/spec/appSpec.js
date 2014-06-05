(function () {
  'use strict';

  describe('Demo Application', function () {

    beforeEach(module('demoApp'));

    it('should route properly', inject(function($route) {

      expect($route).toBeDefined();

      var calcRoute =  $route.routes['/calculator'];
      expect(calcRoute).toBeDefined();
      expect(calcRoute.controller).toBe('CalcCtrl');
      expect(calcRoute.templateUrl).toBe('views/calculator.html');

      var editorRoute =  $route.routes['/editor'];
      expect(editorRoute).toBeDefined();
      expect(editorRoute.controller).toBe('EditorCtrl');
      expect(editorRoute.templateUrl).toBe('views/editor.html');
    }));


  });
}());
