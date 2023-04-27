function smallestIslandSizeInGrid(grid) {
  let minSize = Infinity;//todo: if no islands, we will return Infinity
  let visited = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const size = getIslandSize(grid, i, j, visited);
      if (size> 0 && minSize > size) {
        minSize = size;
      }
    }
  }
  return minSize;
}

function getIslandSize(grid, i, j, visited) {
	//check this pixel
  if (!isLand(grid, i, j, visited)) return 0;
  let size = 1;
  size += getIslandSize(grid, i - 1, j, visited);
  size += getIslandSize(grid, i + 1, j, visited);
  size += getIslandSize(grid, i, j + 1, visited);
  size += getIslandSize(grid, i, j - 1, visited);
  return size;
}

function isLand(grid, i, j, visited) {
	// console.log(i,j)
  if (i < 0 || i >= grid.length) return false;
  if (j < 0 || j >= grid[0].length) return false;
  if (visited.has(i + "," + j)) return false;
  visited.add(i + "," + j);
  if (grid[i][j] === "w") {
    return false;
  }
  return true;
}

console.log(
  smallestIslandSizeInGrid([
    ["w", "l", "w", "w", "w"],
    ["l", "l", "w", "w", "w"],
    ["w", "w", "w", "l", "w"],
    ["w", "w", "l", "l", "w"],
    ["l", "l", "w", "l", "l"],
    ["l", "l", "w", "w", "w"],
    // ["w", "w", "w", "l", "w"],
  ])
);
