/**
 * @param {number} _start
 * @param {number} _goal
 * @return {number}
 */
var minBitFlips = function (_start, _goal) {
  let start = (_start >>> 0).toString(2);
  let goal = (_goal >>> 0).toString(2);
  const difflen = start.length - goal.length;
  if (difflen < 0) {
    start = "0".repeat(Math.abs(difflen)) + start;
  } else if (difflen > 0) {
    goal = "0".repeat(difflen) + goal;
  }

  let flipCount = 0;
  for (let i in start.split("")) {
    // console.log(start[i], goal[i]);
    if (goal[i] != start[i]) {
      // goal[i] = start[i]
      flipCount++;
    }
  }
  return flipCount;
};

// console.log(minBitFlips(10, 7));
// console.log(minBitFlips(3, 4));

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length > 1) {
    // nums = nums.reduce(
    //   (acc, i, idx, origArr) =>
    //     origArr[idx + 1] != undefined 
    //       ? acc.concat((i + origArr[idx + 1]) % 10)
    //       : acc,
    //   []
    // );
    const newNums = [];
    let idx = 0;
    while (idx < nums.length) {
      if (nums[idx + 1] != undefined)
        newNums.push((nums[idx] + nums[idx + 1]) % 10);
      idx++;
    }
    nums = newNums;
    // console.log(nums);
  }
  // return nums.reduce((acc,i)=>acc+i,0)
  return nums[0];
};
// console.log(triangularSum([1,2,3,4,5]));
// console.log(
//   triangularSum([2, 6, 6, 5, 5, 3, 3, 8, 6, 4, 3, 3, 5, 1, 0, 1, 3, 6, 9])
// );
// // [1,8,8,4,6,8,5,8,6,9,1,2,5,2,8,2,4,7,8,6,9,0,1,4,7,4,7,8,2,6,3,3,5,9,8,5,7,4,2,2,0,4,2,8,9,5,8]
// console.time("bigarr");
// console.log(
//   triangularSum([
//     8, 1, 4, 9, 9, 2, 5, 6, 7, 4, 0, 3, 8, 2, 0, 9, 2, 2, 5, 7, 6, 4, 6, 0, 3,
//     5, 5, 6, 3, 7, 4, 6, 8, 7, 4, 0, 6, 2, 0, 1, 6, 4, 4, 8, 2, 8, 0, 5, 3, 7,
//     7, 8, 4, 4, 9, 6, 3, 5, 6, 2, 0, 4, 3, 4, 7, 9, 2, 1, 7, 8, 1, 0, 0, 8, 1,
//     2, 0, 8, 8, 8, 5, 9, 1, 7, 5, 0, 0, 8, 8, 3, 2, 2, 8, 9, 5, 2, 8, 3, 1, 4,
//     6, 1, 0, 9, 1, 3, 2, 1, 0, 1, 0, 6, 4, 1, 1, 1, 5, 0, 4, 0, 3, 9, 4, 6, 9,
//     8, 0, 5, 0, 7, 1, 8, 6, 9, 7, 9, 4, 7, 4, 7, 9, 4, 8, 3, 1, 6, 9, 9, 2, 9,
//     8, 6, 4, 6, 4, 7, 9, 9, 3, 4, 8, 1, 5, 1, 7, 8, 7, 9, 8, 0, 8, 1, 5, 8, 5,
//     7, 7, 6, 0, 0, 0, 5, 1, 7, 5, 9, 3, 8, 5, 0, 0, 0, 9, 2, 4, 7, 9, 0, 0, 7,
//     1, 8, 9, 2, 3, 2, 6, 0, 0, 7, 7, 1, 9, 9, 8, 3, 0, 5, 8, 4, 1, 5, 2, 3, 3,
//     1, 1, 7, 1, 5, 6, 8, 5, 1, 4, 7, 3, 1, 9, 2, 6, 8, 8, 8, 4, 7, 8, 8, 4, 9,
//     1, 4, 1, 5, 4, 1, 5, 0, 0, 0, 3, 5, 4, 7, 2, 6, 4, 8, 3, 6, 0, 4, 3, 7, 3,
//     4, 8, 2, 9, 2, 0, 0, 4, 4, 9, 1, 2, 2, 7, 1, 7, 3, 2, 1, 2, 7, 3, 4, 1, 2,
//     0, 4, 1, 4, 3, 9, 6, 5, 7, 9, 9, 1, 4, 0, 7, 7, 6, 0, 2, 9, 1, 1, 2, 0, 3,
//     2, 0, 7, 5, 9, 7, 4, 6, 2, 0, 8, 0, 4, 7, 3, 6, 8, 2, 2, 3, 4, 3, 4, 3, 4,
//     2, 8, 8, 7, 6, 6, 0, 0, 9, 9, 7, 7, 6, 3, 6, 5, 2, 0, 4, 3, 7, 3, 6, 5, 0,
//     6, 5, 5, 3, 4, 5, 8, 7, 6, 0, 1, 5, 5, 1, 8, 7, 7, 0, 5, 0, 8, 7, 3, 5, 3,
//     4, 3, 9, 5, 9, 4, 6, 4, 7, 2, 6, 3, 2, 5, 3, 1, 3, 3, 1, 1, 7, 2, 5, 2, 7,
//     0, 5, 6, 8, 1, 4, 0, 9, 4, 9, 2, 7, 4, 4, 1, 7, 1, 9, 9, 0, 8, 9, 4, 6, 1,
//     2, 9, 7, 0, 4, 4, 3, 3, 0, 3, 1, 0, 2, 0, 8, 2, 1, 3, 4, 1, 7, 4, 8, 2, 9,
//     2, 2, 7, 9, 5, 5, 8, 2, 8, 3, 5, 6, 3, 8, 8, 5, 4, 4, 4, 8, 0, 2, 9, 8, 8,
//     4, 0, 3, 3, 0, 0, 8, 4, 1, 5, 6, 9, 4, 0, 0, 7, 9, 8, 1, 8, 9, 3, 0, 1, 4,
//     4, 9, 6, 7, 1, 5, 0, 1, 0, 9, 6, 7, 6, 2, 7, 4, 0, 5, 6, 1, 5, 7, 2, 8, 0,
//     6, 8, 4, 1, 8, 0, 9, 3, 5, 6, 3, 0, 4, 2, 5, 6, 7, 6, 4, 8, 5, 0, 2, 6, 1,
//     8, 0, 8, 7, 0, 3, 0, 0, 5, 4, 0, 8, 0, 7, 6, 2, 4, 8, 7, 9, 1, 7, 6, 9, 2,
//     2, 7, 9, 4, 4, 8, 7, 0, 7, 8, 1, 5, 3, 0, 2, 4, 0, 9, 8, 1, 2, 6, 1, 6, 0,
//     9, 9, 1, 1, 0, 2, 7, 0, 7, 9, 7, 8, 5, 3, 5, 0, 5, 1, 6, 4, 7, 2, 0, 2, 6,
//     8, 1, 0, 5, 6, 4, 7, 3, 8, 2, 0, 0, 4, 9, 4, 7, 4, 8, 7, 9, 1, 6, 9, 4, 7,
//     4, 7, 4, 7, 7, 1, 0, 6, 7, 6, 6, 6, 0, 4, 3, 4, 6, 6, 7, 0, 5, 4, 2, 8, 9,
//     1, 3, 0, 8, 7, 3, 6, 0, 7, 7, 8, 8, 7, 7, 1, 7, 3, 4, 0, 8, 1, 1, 4, 3, 2,
//     7, 2, 6, 4, 2, 7, 6, 1, 2, 7, 4, 7, 8, 2, 1, 5, 4, 9, 9, 7, 9, 4, 1, 1, 2,
//     2, 1, 4, 3, 2, 8, 6, 5, 4, 5, 6, 0, 5, 8, 3, 0, 7, 1, 2, 2, 5, 2, 9, 2, 3,
//     1, 4, 9, 2, 3, 3, 5, 8, 2, 5, 9, 2, 5, 3, 5, 3, 1, 9, 8, 6, 1, 0, 8, 5, 7,
//     2, 8, 9, 5, 6, 8, 9, 9, 0, 9, 1, 4, 4, 5, 8, 2, 9, 0, 3, 4, 8, 8, 4, 8, 0,
//     3, 9, 7, 9, 1, 1, 5, 5, 0, 6, 5, 0, 4, 9, 2, 9, 6, 7, 8, 9, 1, 0, 5, 0, 2,
//     9, 7, 9, 5, 8, 5, 3, 5, 9, 8, 1, 1, 2, 2, 3, 5, 9, 1, 3, 7, 5, 9, 6, 3, 7,
//     3, 7, 5, 9, 3, 6,
//   ])
// );
// console.timeEnd("bigarr");


/**
 * @param {string} s
 * @return {number}
 */
 var numberOfWays = function(s) {
    
	
	return 8;
};