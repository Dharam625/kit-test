'use strict';

/**
 * @ngdoc function
 * @name kitTestApp.controller:PigLatinTranslatorCtrl
 * @description
 * # PigLatinTranslatorCtrl
 * Controller of the kitTestApp
 */
angular.module('kitTestApp').controller('PigLatinTranslatorCtrl', function ($scope, utilityService) {

    $scope.changeToPigLatin = function(enteredWord) {
       var regex = /[aeiou]/gi;
       if (enteredWord.length > 0 &&  enteredWord.match(regex) !== null) {

          var vowelIndex = enteredWord.indexOf(enteredWord.match(regex)[0]);
          var first = enteredWord.slice(0, vowelIndex);
          var sLast = enteredWord.slice(vowelIndex);

            if (utilityService.isVowel(enteredWord[0])) {
              $scope.output = enteredWord + 'way';
            }
            else {
              $scope.output = sLast + first + 'ay';
            }
        } else { // Else set the output to same as input
          $scope.output = enteredWord;
        }
    };

  });
