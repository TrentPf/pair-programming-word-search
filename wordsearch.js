const wordSearch = (letters, word) => {
  if (word === undefined || letters === undefined) {
    return undefined;
  }
  let diagonalsLeft = [];
  let diagonalsRight = [];
  for (let i = 0; i < letters.length * 2 - 1; i++) {
    diagonalsLeft.push([]);
    diagonalsRight.push([]);
  }
    
  for (let j = 0; j < letters.length * 2; j++) {
    for (let k = 0; k < j + 1; k++) {
      let m = j - k;
      if (m < letters.length && k < letters.length) {
        diagonalsLeft[j].push(letters[m][k]);
      }
    }
  }

  let diagonals1 = diagonalsLeft.map(ls => ls.join(''));

  let index = 0;
  for (let l = letters.length * 2 - 2; l >= 0; l--) {
    for (let n = 0; n < index + 1; n++) {
      let o = l + n - letters.length + 1;
      if (n < letters.length && o < letters.length && o >= 0) {
        diagonalsRight[index].push(letters[o][n]);
      }
    }
    index++;
  }

  let diagonals2 = diagonalsRight.map(ls => ls.join(''));

  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));
  const reverseVerticalJoin = verticalJoin.map(wds => wds.split('').reverse().join(''));
  const reverseHorizontalJoin = letters.map(ls => ls.reverse().join(''));

  if (horizontalJoin.includes(word) || verticalJoin.includes(word) || reverseHorizontalJoin.includes(word) || reverseVerticalJoin.includes(word) || diagonals1.includes(word) || diagonals2.includes(word)) {
    return true;
  }

  return false;
};

const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  
  for (let j = 0; j < newMatrix.length; j++) {
    for (let k = 0; k < matrix.length; k++) {
      newMatrix[j].push(matrix[k][j]);
    }
  }
  return newMatrix;
};

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
], 'FRANK');

module.exports = wordSearch;