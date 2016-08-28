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
          if (utilityService.isVowel(enteredWord[0])) {
            $scope.output = enteredWord + 'way';
          }
          else {
            var vowelIndex = enteredWord.indexOf(enteredWord.match(regex)[0]);
            var consonantsPreVowel = enteredWord.slice(0, vowelIndex); // extract consonants cluster before vowel
            var vowel = enteredWord.slice(vowelIndex);
            $scope.output = vowel + consonantsPreVowel + 'ay';
          }
        } else { // Else set the output to same as input
          $scope.output = enteredWord;
        }
    };
  });
