'use strict';
angular.module('kitTestApp').service('utilityService', function() {
    this.isVowel = function(letter) {
        return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(letter) !== -1;
    };
});
