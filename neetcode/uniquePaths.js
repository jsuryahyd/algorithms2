//https://leetcode.com/problems/unique-paths/description/
function uniquePaths(x,y ) {
  let numPaths = 0;
  if (cache.get(x + ":" + y)) {
    return cache.get(x + ":" + y);
  }

  if (x === 1 || y === 1) return 1;
  if (x === 0 || y === 0) return 0;
  numPaths += uniquePaths( x, y - 1) + uniquePaths( x - 1, y);

  // console.log(x, y, numPaths);
  cache.set(x + ":" + y, numPaths);
  return cache.get(x + ":" + y);
}


const cache = new Map();
console.log(uniquePaths(3,7));

function buildMatrix(m, n) {
  return Array(m)
    .fill(0)
    .map((a) => Array(n).fill(0));
}
export default {};
