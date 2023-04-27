function islandCount(grid) {
  const visited = new Set();
  let uniqueIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (exploreAndCheckIfNewIsland(grid, i, j, visited)) {
        uniqueIslands++;
      }
    }
  }
  return uniqueIslands;
}
function exploreAndCheckIfNewIsland(grid, i, j, visited) {
	if(i<0 || i>=grid.length) return false;
	if(j<0 || j>=grid[0].length) return false;
  if (visited.has(i + "," + j)) return false;
  visited.add(i + "," + j);
	// console.log(i,j)
  if (grid[i][j] === "w") {
    return false;
  }
	//just look around to populate visited
  exploreAndCheckIfNewIsland(grid, i + 1, j, visited);
  exploreAndCheckIfNewIsland(grid, i - 1, j, visited);
  exploreAndCheckIfNewIsland(grid, i, j + 1, visited);
  exploreAndCheckIfNewIsland(grid, i, j - 1, visited);
	return true;
}

console.log(islandCount([
  ["w", "l", "w", "w", "w"],
  ["w", "l", "w", "w", "w"],
  ["w", "w", "w", "l", "w"],
  ["w", "w", "l", "l", "w"],
  ["l", "l", "w", "l", "l"],
  ["l", "l", "w", "w", "w"],
	["w", "w", "w", "l", "w"],
]));
