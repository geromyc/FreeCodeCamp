
  function findLongestWord(str) {
  return str.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length);
    }, 0);
}

findLongestWord("The quick brown fox jumped over the lazy dog");