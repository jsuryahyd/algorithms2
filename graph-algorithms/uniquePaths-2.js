//https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function _uniquePathsWithObstacles(obstacleGrid) {
  let cacheGrid = [];
  for (let i = 0; i < obstacleGrid.length + 1; i++) {
    cacheGrid[i] = [];
    for (let j = 0; j < obstacleGrid.length + 1; j++) {
      cacheGrid[i].push(undefined);
    }
  }
  console.log(cacheGrid);
  return numPaths(0, 0, obstacleGrid, cacheGrid);
}
function numPaths(i, j, obstacleGrid, cacheGrid) {
  let _numPaths = 0;
  if (i < 0) return 0;
  if (j < 0) return 0;
  if (i >= obstacleGrid.length) return 0;
  if (j >= obstacleGrid[i].length) return 0;
  if (obstacleGrid[i][j] === 1) return 0;
  if (i === obstacleGrid.length - 1 && j === obstacleGrid[i].length - 1)
    _numPaths += 1;

  // console.log(numPaths(i + 1, j, obstacleGrid, cacheGrid));
  if (cacheGrid[i + 1][j] === undefined) {
    cacheGrid[i + 1][j] = numPaths(i + 1, j, obstacleGrid, cacheGrid);
  }
  _numPaths += cacheGrid[i + 1][j];
  if (cacheGrid[i][j + 1] === undefined) {
    cacheGrid[i][j + 1] = numPaths(i, j + 1, obstacleGrid, cacheGrid);
  }
  _numPaths += cacheGrid[i][j + 1];
  return _numPaths;
}

//iterative
function uniquePathsWithObstacles(obstacleGrid) {
  const dpTable = Array.from({ length: obstacleGrid.length }, () =>
    Array.from({ length: obstacleGrid[0].length }, () => 0)
  );

  for (let j = 0; j < obstacleGrid.length; j++) {
    if (obstacleGrid[0][j] === 1) {
      //obstacle
      break;
    }
    dpTable[0][j] = 1;
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1) {
      //obstacle
      break;
    }
    dpTable[i][0] = 1;
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        //obstacle
        continue;
      }
      dpTable[i][j] = dpTable[i - 1][j] + dpTable[i][j - 1];
    }
  }
  console.log(obstacleGrid, dpTable);
  return dpTable[obstacleGrid.length - 1][obstacleGrid[obstacleGrid.length-1].length - 1];
}

console.log(
  _uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); //2
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
); //1
console.time();
console.log(
  uniquePathsWithObstacles([
    [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1,
      0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
    ],
    [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
    ],
    [
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
      1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
    ],
    [
      1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
      1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0,
      0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
    ],
    [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    ],
    [
      0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    ],
    [
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
      0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    ],
    [
      0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0,
      1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    ],
    [
      0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  ])
);
console.timeEnd();
console.time();
console.log(
  uniquePathsWithObstacles([
    [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1,
      0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
    ],
    [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
    ],
    [
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
      1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
    ],
    [
      1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
      1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0,
      0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
    ],
    [
      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    ],
    [
      0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    ],
    [
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
      0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    ],
    [
      0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0,
      1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    [
      1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    ],
    [
      0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
    ],
    [
      0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  ])
);
console.timeEnd();