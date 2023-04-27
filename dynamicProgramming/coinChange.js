// function numSum(total, arr, memo = {}) {
//   if (total == 0) return 1;
//   if (total < 0) return null;
//   let numWays = 0;
// 	let combos=[];
//   for (let i of arr) {
//     const remaining = total - i;
//     if (memo[remaining]) {
//       numWays += memo[remaining];
// 			continue;
//     }
//     const remainingSumWays = numSum(remaining, arr, memo);
//     if (remainingSumWays != null) {
//       numWays += remainingSumWays;
//     }
//   }
//   memo[total] = numWays;
//   return numWays;
// }

function numSum(total, arr, memo = {}) {
  if (total == 0) return [[]];
  if (total < 0) return null;
  let numWays = [];
  for (let i of arr) {
    const remaining = total - i;
    memo[remaining] = memo[remaining] || numSum(remaining, arr, memo);
    if (memo[remaining] != null) {
      numWays = numWays.concat(memo[remaining].map((w) => [i, ...w].sort((a, b) => a - b)));
    }
  }
  memo[total] = numWays;
  return numWays;
}

expect(numSum(4, [1, 2, 3])).to.be(4);
expect(numSum(10, [2, 5, 3, 6])).to.be(5);
