import { inspect } from "util";

function brickWall(wall) {
  const wallE = [];
  for (let row = 0; row < wall.length; row++) {
    wallE[row] = [];
    for (let col = 0; col < wall[row].length; col++) {
      while (wall[row][col] > 1 /*instead get least size in whole 2d array and use it.*/) {
        wallE[row].push("-");
        wall[row][col]--;
      }
      wallE[row].push("|");
    }
  }
  console.log(inspect(wallE, false, 2, true));
  const intersections = Array(wallE[0].length - 1).fill(0); //skip last column which is right edge of the wall
  for (let row = 0; row < wallE.length; row++) {
    for (let col = 0; col < wallE[row].length; col++) {
      if (col === wallE[row].length - 1) continue;
      wallE[row][col] === "-" && intersections[col]++;
    }
  }
  // console.log(intersections)
  if (intersections.length < 1) return wallE.length; //1 brick in each row, so no edges, all are intersections
  return Math.min(...intersections);
}

console.log(
  brickWall([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
  ])
); //2
// console.log(brickWall([[1],[1],[1]]))
// console.log(brickWall([[100000000],[100000000],[100000000]]))

function brickWall2(wall) {
  if (wall.every((row) => row.length === 1)) return wall.length;
  const totalWidthOfWall = wall[0].reduce((s, a) => s + a, 0);
  // const intersections = Array(_sum).fill(0);
  // const rowCumulativeSums = Array.from({ length: wall.length }, () => []);
	const intersectionsOfCumulativeSums = {}
  for (let rowIdx = 0; rowIdx < wall.length; rowIdx++) {
		const rowCumulativeSums = []
    for (let colIdx = 0; colIdx < wall[rowIdx].length; colIdx++) {
      //cumulative sum up to this column, === any cumulative sum for next column
      const sum =
        (colIdx > 0 ? rowCumulativeSums[colIdx - 1] : 0) +
        wall[rowIdx][colIdx];
      rowCumulativeSums.push(sum);
			if(sum != totalWidthOfWall) //dont want to consider right-edge of the wall itself
			intersectionsOfCumulativeSums[sum]= (intersectionsOfCumulativeSums[sum]||wall.length) - 1;//all the rows that does not have this cumulative sum, will be an intersection point

    }
  }
  // console.log(inspect({ rowCumulativeSums }, false, 2));
	console.log(inspect(intersectionsOfCumulativeSums,false,2))
 
  return  Math.min(...Object.values(intersectionsOfCumulativeSums))
}
console.log(
  brickWall2([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
  ])
); //2
// console.log(brickWall2([[1], [1], [1]]));
// console.time()
// console.log(brickWall2([[100000000], [100000000], [100000000]]));
// console.timeEnd()
