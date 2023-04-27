/**
 * @returns {number} pathLength
 * @param {number[][]} twoDimensArr
 */
function longestPath(twoDimensArr) {
  // if(!move) return 0
  let longest = 0; //max  //n*n - square
  for (let i = 0; i < twoDimensArr.length; i++) {
    for (let j = 0; j < twoDimensArr[i].length; j++) {
      let _pathLength = 1 + pathLength(i, j, twoDimensArr);
      console.log(i, j, _pathLength);
      if (_pathLength > longest) longest = _pathLength;
    }
  }
  return longest;
}

function pathLength(m, n, arr) {
  let len = 0;
  // let current = arr[m][n];
  if (arr[m] != undefined && n > 0 && arr[m][n] + 1 === arr[m][n - 1]) {
    len = 1 + pathLength(m, n - 1, arr);
  }
  if (n < arr.length - 1 && arr[m][n] + 1 === arr[m][n + 1]) {
    len = 1 + pathLength(m, n + 1, arr);
  }
  if (m < arr.length - 1 && arr[m][n] + 1 === arr[m + 1][n]) {
    len = 1 + pathLength(m + 1, n, arr);
  }
  if (m > 0 && arr[m][n] + 1 === arr[m - 1][n]) {
    len = 1 + pathLength(m - 1, n, arr);
    // current = arr[m-1][n]
  }

  return len;
}

expect(
  longestPath([
    [1, 2, 9],
    [5, 3, 8],
    [4, 6, 7],
  ])
).to.be(4);

expect(
  longestPath([
    [1, 2, 9],
    [6, 3, 8],
    [5, 4, 7],
  ])
).to.be(6);
