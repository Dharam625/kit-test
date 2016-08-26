'use strict';

describe('Controller: PigLatinTranslatorCtrl', function () {

  beforeEach(module('kitTestApp'));

  var PigLatinTranslatorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PigLatinTranslatorCtrl = $controller('PigLatinTranslatorCtrl', {
      $scope: scope
    });
  }));

  it('should update the scope variable output with pig latin translated value', function () {
    scope.changeToPigLatin('glove');
    expect(scope.output).toBe('oveglay');

    scope.changeToPigLatin('happy');
    expect(scope.output).toBe('appyhay');

    scope.changeToPigLatin('inbox');
    expect(scope.output).toBe('inboxway');
  });
});
