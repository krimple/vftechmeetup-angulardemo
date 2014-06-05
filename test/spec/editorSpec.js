(function() {
  'use strict';

  describe('The text editor', function() {

    beforeEach(module('demoApp'));

    it('tests a filter', inject(function(filterAsHtml) {
      expect(filterAsHtml).toBeDefined();
    }));
  });
}());