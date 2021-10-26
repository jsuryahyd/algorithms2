// import input from "./input.js";
const input = [
  ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
  ["L", "L", "L", "L", "L", "L", "L", ".", "L", "L"],
  ["L", ".", "L", ".", "L", ".", ".", "L", ".", "."],
  ["L", "L", "L", "L", ".", "L", "L", ".", "L", "L"],
  ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
  ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
  [".", ".", "L", ".", "L", ".", ".", ".", ".", "."],
  ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", ".", "L", "L", "L", "L", "L", "L", ".", "L"],
  ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
];
console.log(input);
console.log(getOccupiedSeatsAfterStable(input))
function getOccupiedSeatsAfterStable(grid) {
  let stabilized = 0;
	while (stabilized === 0) {
    console.log(stabilized, "stabilized");
    stabilized = enforce(
      grid.map((r) => r.map((s) => (s === "L" ? "#" : s))), //filling the seats
			0,0
    );
  }
  console.log(grid);

  return grid.reduce(
    (acc, row) => acc + row.filter((s) => s === "#").length,
    0
  );
}

function enforce(grid, i, j, ops=0) {
  if (i!= 0 && j!= 0 && ops === 0) return 1
  if (!grid[i] || !grid[j]) return false; //out of bounds
  // rule1
  let occupiedNeigbors = getNeighbors(grid, i, j);
  if (occupiedNeigbors >= 4) {
    grid[i][j] = "L";
    ops++;
  }
  if (occupiedNeigbors == 0) {
    grid[i][j] = "#";
    ops++;
  }

  if (enforce(grid, i + 1, j, ops)) return true;
  if (enforce(grid, i, j + 1, ops)) return true;

  return ops;
}

function getNeighbors(grid, i, j) {
  let occupiedNeigbors = 0;

  if (grid[i - 1]) {
    if (grid[i - 1][j] == "#") {
      occupiedNeigbors++;
    } //t
    if (grid[i - 1][j - 1] == "#") {
      occupiedNeigbors++;
    } //t-l
    if (grid[i - 1][j + 1] == "#") {
      occupiedNeigbors++;
    } //t-r
  }
  if (grid[i][j - 1] == "#") {
    occupiedNeigbors++;
  } //l
  if (grid[i][j + 1] == "#") {
    occupiedNeigbors++;
  } //r
  if (grid[i + 1]) {
    if (grid[i + 1][j - 1] == "#") {
      occupiedNeigbors++;
    }
    if (grid[i + 1][j] == "#") {
      occupiedNeigbors++;
    }
    if (grid[i + 1][j + 1] == "#") {
      occupiedNeigbors++;
    }
  }

  return occupiedNeigbors;
}
