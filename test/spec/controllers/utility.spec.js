'use strict';

describe("Testing Utility service functions", function() {
  beforeEach(module('kitTestApp'));

  it('should return true when vowel is tested', inject(function(utilityService) {
    expect(utilityService.isVowel('A')).toBe(true);
  }));

  it('should return false when consonant is tested', inject(function(utilityService) {
    expect(utilityService.isVowel('B')).toBe(false);
  }));
});
