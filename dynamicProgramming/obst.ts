//https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/
function mctFromLeafValuesDP(arr: number[]): number {
    const n = arr.length;

    // dp[i][j] stores the minimum cost to build a tree from arr[i...j]
    const dp: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));

    // maxVal[i][j] stores the maximum value in the subarray arr[i...j]
    const maxVal: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));

    // Pre-compute maxVal for all subarrays
    for (let i = 0; i < n; i++) {
        maxVal[i][i] = arr[i];
        for (let j = i + 1; j < n; j++) {
            maxVal[i][j] = Math.max(maxVal[i][j - 1], arr[j]);
        }
    }

    // Fill the dp table
    // len represents the length of the subarray - 1 (e.g., len = 0 for length 1, len = 1 for length 2)
    for (let len = 1; len < n; len++) { // Subarray length from 2 to n
        for (let i = 0; i < n - len; i++) {
            const j = i + len;
            dp[i][j] = Infinity; // Initialize with a very large value

            // k is the split point
            for (let k = i; k < j; k++) {
                const currentCost = dp[i][k] + dp[k + 1][j] + (maxVal[i][k] * maxVal[k + 1][j]);
                dp[i][j] = Math.min(dp[i][j], currentCost);
            }
        }
    }

    return dp[0][n - 1];
}

// Test cases
console.log(`[6, 2, 4] DP Cost: ${mctFromLeafValuesDP([6, 2, 4])}`); // Expected: 56
console.log(`[15, 13, 5, 3, 15] DP Cost: ${mctFromLeafValuesDP([15, 13, 5, 3, 15])}`); // Expected: 555
console.log(`[1, 2, 3] DP Cost: ${mctFromLeafValuesDP([1, 2, 3])}`); // Expected: 12 ( (1*2) + (3*2) = 2+6 = 8. No, ((1*2)*3) -> 2 + 6 = 8. (1*(2*3)) -> 6 + 6 = 12. Correct for 1,2,3 is 12)