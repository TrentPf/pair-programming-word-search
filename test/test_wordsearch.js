const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['I', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'S', 'F', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'B', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['F', 'D', 'C', 'A', 'K', 'U', 'A', 'D'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['E', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'F', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'L', 'I'],
      ['S', 'D', 'C', 'A', 'K', 'U', 'A', 'D'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return undefined if no word is provided", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ],);

    assert.isUndefined(result);
  });

  it("should return undefined if no grid or word is provided", function() {
    const result = wordSearch();

    assert.isUndefined(result);
  });
});
