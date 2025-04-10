
import {inspect} from 'node:util'
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

// function numSum(total, arr, memo = {}) {
//   if (total == 0) return [[]];
//   if (total < 0) return null;
//   let numWays = [];
//   for (let i of arr) {
//     const remaining = total - i;
//     memo[remaining] = memo[remaining] || numSum(remaining, arr, memo);
//     if (memo[remaining] != null) {
//       numWays = numWays.concat(memo[remaining].map((w) => [i, ...w].sort((a, b) => a - b)));
//     }
//   }
//   memo[total] = numWays;
//   return numWays;
// }

// expect(numSum(4, [1, 2, 3])).to.be(4);
// expect(numSum(10, [2, 5, 3, 6])).to.be(5);

console.log(inspect(countCombinationsTopDown(5, [1, 2, 5]),false, 3, true)) //4
console.log(countCombinationsTopDown(10, [2, 5, 3, 6]))


function countCombinationsTopDown(amount, coins, index = 0, memo = {}) {
  const key = `${amount}-${index}`;
  if (key in memo) {
    return memo[key];
  }

  if (amount === 0) {
    return 1;
  }

  if (amount < 0 || index >= coins.length) {
    return 0;
  }

  // Include the current coin
  const include = countCombinationsTopDown(amount - coins[index], coins, index, memo);

  // Exclude the current coin
  const exclude = countCombinationsTopDown(amount, coins, index + 1, memo);

  memo[key] = include + exclude;
  return memo[key];
}

function countCombinationsBottomUp(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

// Example Usage:
// const coins = [1,2,4,5,8,12]
// const amount = 870;

const coins = [ 2, 5, 7, 10];
const amount = 54;

// Top-Down Approach
const combinationsTopDown = countCombinationsTopDown(amount, coins);
console.log("Top-Down Combinations:", combinationsTopDown); // Output: 4 (1+1+1+1+1, 1+1+1+2, 1+2+2, 5)

// Bottom-Up Approach
const combinationsBottomUp = countCombinationsBottomUp(amount, coins);
console.log("Bottom-Up Combinations:", combinationsBottomUp); // Output: 4