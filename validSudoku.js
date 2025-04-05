class Solution {
	/**
	 * @param {character[][]} board
	 * @return {boolean}
	 */
	isValidSudoku(board) {
			//  go diagnol
			for(let i=0;i<board.length;i++){
				
					//go through diagonal cells.
				 if(!validateRowCol(board,i)) return false
				}

			if(!validateSubGrids(board)) return false

			return true;
	}
}

function validateRowCol(board, i){
	//is row valid
	return isValid(board[i]) &&

	// is column valid
	isValid(board.map(r=>r[i]))
	
}

function validateSubGrids(board){
	return ![[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]].find(([i,j]) => {
		const isSubgridValid = isValid([board[i][j],board[i][j+1],board[i][j+2],board[i+1][j],board[i+1][j+1],board[i+1][j+2],board[i+2][j],board[i+2][j+1],board[i+2][j+2]]);
		return !isSubgridValid
	})
}

function isValid(list){
	const uniques = Array(9).fill(0)
	for(let j=0;j<list.length;j++){
			if(uniques[list[j]] === 1){
				return false;
			}
			if(+list[j] <= 9 && +list[j] >= 1) uniques[list[j]] = 1
	}
	return true
}

// const board=[["1","2",".",".","3",".",".",".","."],["4",".",".","5",".",".",".",".","."],[".","9","8",".",".",".",".",".","3"],["5",".",".",".","6",".",".",".","4"],[".",".",".","8",".","3",".",".","5"],["7",".",".",".","2",".",".",".","6"],[".",".",".",".",".",".","2",".","."],[".",".",".","4","1","9",".",".","8"],[".",".",".",".","8",".",".","7","9"]]
const board = [
	["1","2",".",".","3",".",".",".","."],
	["4",".",".","5",".",".",".",".","."],
	[".","9","1",".",".",".",".",".","3"],
	["5",".",".",".","6",".",".",".","4"],
	[".",".",".","8",".","3",".",".","5"],
	["7",".",".",".","2",".",".",".","6"],
	[".",".",".",".",".",".","2",".","."],
	[".",".",".","4","1","9",".",".","8"],
	[".",".",".",".","8",".",".","7","9"]]

console.log(new Solution().isValidSudoku(board))