//todo: not working
var rotate = function (matrix) {
	const n = matrix.length
  for (let i = 0; i < (matrix.length + 1) / 2; i++) {
    for (let j = 0; j < matrix[i].length / 2; j++) {
      // const temp = matrix[matrix.length - 1 - j][i];
      // matrix[matrix.length - 1 - j][i] =
      //   matrix[matrix.length - 1 - i][matrix.length - j - 1];
      // matrix[matrix.length - 1 - i][matrix.length - j - 1] =
      //   matrix[j][matrix.length - 1 - i];
      // matrix[j][matrix.length - 1 - i] = matrix[i][j];
      // matrix[i][j] = temp;
			const tmp = matrix[n - 1 - j][i]
			matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1]
			matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i]
			matrix[j][n - 1 - i] = matrix[i][j]
			matrix[i][j] = tmp
    }
  }

  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
