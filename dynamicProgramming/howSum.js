//get combinations

/**
 * @description keep removing numbers from target, and if we hit 0, that is a combination
 * @param {*} targetSum
 * @param {*} numbers
 */
function howSum(targetSum, numbers, memo = {}) {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const combosForRemainder = howSum(remainder, numbers, memo);

    if (combosForRemainder != null) {
      memo[targetSum] = [num, ...combosForRemainder];
      return memo[targetSum];
    }
  }
  return null;
}

expect(howSum(7, [2, 3, 4])).to.eql([2, 2, 3]);
expect(howSum(8, [2, 3, 5])).to.eql([2, 2, 2, 2]);
console.time();
expect(howSum(8, [5, 3, 2])).to.eql([5, 3]);
console.timeEnd();
console.time();
expect(howSum(300, [14, 7])).to.eql(null);
console.timeEnd();//without memo: 224172.78198242188 ms | with memo :  0.367919921875 ms
