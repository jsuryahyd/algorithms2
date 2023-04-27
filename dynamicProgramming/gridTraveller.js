function numWays(m, n, memo = {}) {
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;

  memo[m + "," + n] =
    memo[m + "," + n] || numWays(m - 1, n, memo) + numWays(m, n - 1, memo);
  return memo[m + "," + n];
}

const testCases = [
  { input: [1, 1], output: 1 },
  { input: [3, 3], output: 6 },
  { input: [3, 2], output: 3 },
  { input: [2, 3], output: 3 },
  { input: [18, 18], output: 2333606220 },
];
testCases.forEach((t) => {
  
    const name = JSON.stringify(t.input) + "---" + t.output
		console.time(name);
    expect(numWays(...t.input)).to.be(t.output);
    console.timeEnd(name);
  
});
