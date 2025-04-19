/**
 * Do not return anything, modify board in-place instead.
 * inside backtrack function, loop over the numbers 1-9, check if number is valid option and backtrack(nextEmptyCell)
 * use a variable to currCell = {x,y}, to easily clear the cell after backtrack
 * return condition for backtrack is to check isBoardFull().
 * also check isBoardValid(), return in the early loop too, if backtrack returns true.
 *
 */
function solveSudoku(board: string[][]): void {
  function solve(currCell) {
    if (currCell === null) {
      // console.log(board.map(r=>[...r]))
      if (isBoardValid(board)) return true;
      else return false;
    }
    if (board[currCell.y][currCell.x] !== ".")
      throw "non empty cell: " + JSON.stringify(currCell);

    for (let i = 1; i <= 9; i++) {
      if (!isValidNumber(board, currCell, i)) continue;
      board[currCell.y][currCell.x] = i + "";
      const isSolved = solve(nextEmptyCell(board, currCell));
      if (isSolved) return true; //stop further backtracking.
      board[currCell.y][currCell.x] = ".";
    }
  }
  solve(nextEmptyCell(board));
}

function nextEmptyCell(
  board,
  curr = { x: 0, y: 0 }
): { x: number; y: number } | null {
  for (let j = curr.y; j < board[curr.y].length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[j][i] === ".") return { x: i, y: j };
    }
  }
  return null;
}

function isValidNumber(
  board,
  cell: { x: number; y: number },
  n?: number
): boolean {
  let isValid = true;
  const isFilled = typeof n === "undefined";
  const checkArray = new Array(10).fill(0); //ignore 0-index
  if (!isFilled) checkArray[n] = 1; //board is not filled with this number
  //row
  for (let i = 0; i < board[cell.y].length; i++) {
    if (!isFilled && board[i][cell.x] === ".") continue;
    if (checkArray[board[i][cell.x]] !== 0) return false;
    checkArray[board[i][cell.x]] = 1;
  }
  checkArray.forEach((_, i) => (checkArray[i] = 0));
  if (!isFilled) checkArray[n] = 1;
  //column
  for (let i = 0; i < board.length; i++) {
    if (!isFilled && board[cell.y][i] === ".") continue;
    if (checkArray[board[cell.y][i]] !== 0) return false;
    checkArray[board[cell.y][i]] = 1;
  }
  //sub-grid - determine which sub-grid this cell belongs to.
  let left = 0;
  let top = 0;
  if (cell.x >= 3 && cell.x < 6) left = 3;
  else if (cell.x >= 6) left = 6;
  if (cell.y >= 3 && cell.y < 6) top = 3;
  else if (cell.y >= 6) top = 6;

  isValid = isValid && isSubGridValid(board, { x: left, y: top }, n);

  return isValid;
}

function isBoardValid(board): boolean {
  //for row and col and 3 subgrids along, go through a diagonal
  for (let i = 0; i < board.length; i++) {
    if (!isValidNumber(board, { x: i, y: i })) return false;
  }

  //for remaining sub-grids,
  if (!isSubGridValid(board, { x: 3, y: 0 }, /*board[0][3]*/)) return false;
  if (!isSubGridValid(board, { x: 6, y: 0 }, /*board[0][6]*/)) return false;
  if (!isSubGridValid(board, { x: 0, y: 3 }, /*board[3][0]*/)) return false;
  if (!isSubGridValid(board, { x: 6, y: 3 }, /*board[3][6]*/)) return false;
  if (!isSubGridValid(board, { x: 0, y: 6 }, /*board[6][0]*/)) return false;
  if (!isSubGridValid(board, { x: 6, y: 6 }, /*board[6][6]*/)) return false;
  return true;
}

function isSubGridValid(board, cell, n?) {
  const checkArray = new Array(10).fill(0);
  const isFilled = typeof n === "undefined";
  if (!isFilled) checkArray[n] = 1; //"." since not filled yet.
  for (let i = cell.x; i < cell.x + 3; i++) {
    for (let j = cell.y; j < cell.y + 3; j++) {
      if ((!isFilled && board[j][i] === "."))
        continue;
      if (checkArray[board[j][i]] !== 0) return false;
      checkArray[board[j][i]] = 1;
    }
  }
  return true;
}

const puzzle = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.time("puzzle");
solveSudoku(puzzle);
console.timeEnd("puzzle");
expect(puzzle).to.eql([
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
]);

const puzzle2 = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "9", ".", ".", "1", ".", ".", "3", "."],
  [".", ".", "6", ".", "2", ".", "7", ".", "."],
  [".", ".", ".", "3", ".", "4", ".", ".", "."],
  ["2", "1", ".", ".", ".", ".", ".", "9", "8"],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "2", "5", ".", "6", "4", ".", "."],
  [".", "8", ".", ".", ".", ".", ".", "1", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
console.time("puzzle2");
solveSudoku(puzzle2);
console.timeEnd("puzzle2");
expect(puzzle2).to.eql([
  ["7", "2", "1", "8", "5", "3", "9", "4", "6"],
  ["4", "9", "5", "6", "1", "7", "8", "3", "2"],
  ["8", "3", "6", "4", "2", "9", "7", "5", "1"],
  ["9", "6", "7", "3", "8", "4", "1", "2", "5"],
  ["2", "1", "4", "7", "6", "5", "3", "9", "8"],
  ["3", "5", "8", "2", "9", "1", "6", "7", "4"],
  ["1", "7", "2", "5", "3", "6", "4", "8", "9"],
  ["6", "8", "3", "9", "4", "2", "5", "1", "7"],
  ["5", "4", "9", "1", "7", "8", "2", "6", "3"],
]);
