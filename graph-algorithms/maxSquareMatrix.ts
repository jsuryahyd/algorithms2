function maximalSquare(matrix: string[][]): number {
  let maxSideLen = 0;
  //loop through each cell,
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      const levels = [[[c, r]]];
      let curr = 0;
      let sideLen = 0;
      const visited = {};
      while (levels[curr]?.length) {
        const [c, r] = levels[curr].shift() || [];
        if (visited[r + ":" + c]) continue;
        visited[r + ":" + c] = true;
        if (matrix[r] && matrix[r][c] !== "1") {
          // console.log(sideLen, r, c);
          maxSideLen = Math.max(sideLen, maxSideLen);
          break;
        }
        if (c < matrix[r].length - 1 && r < matrix.length - 1) {
          if (!levels[curr + 1]) levels[curr + 1] = [];
          const other = levels[curr + 1];
          !visited[r + ":" + (c + 1)] && other.push([c + 1, r]);
          !visited[r + 1 + ":" + c] && other.push([c, r + 1]);
          !visited[r + 1 + ":" + (c + 1)] && other.push([c + 1, r + 1]);
        } else {
          levels[curr + 1] = []; //if out of bounds, clear all the added items
        }

        if (!levels[curr].length) {
          sideLen++;
          maxSideLen = Math.max(sideLen, maxSideLen);
          curr = curr + 1;
          //if(!levels[curr]){console.log("this should not happen"); levels[curr]=[]}
        }
      }
    }
  }

  return maxSideLen ** 2;
}

expect(
  maximalSquare([
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "0", "0", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
  ])
).to.be(4);
expect(
  maximalSquare([
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "0"],
  ])
).to.be(16);
expect(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
).to.be(4);
expect(
  maximalSquare([
    ["1", "1"],
    ["1", "1"],
  ])
).to.be(4);
expect(maximalSquare([["1", "1"]])).to.be(1);
expect(maximalSquare([["1"]])).to.be(1);
expect(maximalSquare([["0"]])).to.be(0);
