//https://leetcode.com/problems/house-robber/
// function rob(nums: number[]): number {
//   let maxValue = 0;
//   const memo = {};
// let currSum = 0
//   function start(idx,startIdx) {
//     if (memo[idx]) return;
//     if (idx > nums.length - 1) {
//       memo[startIdx] = currSum;
//       maxValue = Math.max(currSum, maxValue);
//       return;
//     }

//     for (let i = idx; i < nums.length; i++) {
//       // if(i+2 > nums.length-1) continue;
// 			currSum += nums[i];
//       start(i + 2, startIdx);
// 			currSum -= nums[i];
//     }
//   }
//   start(0, 0);
//   return maxValue;
// }
function rob_recursive(nums: number[],startIdx = 0,memo={}): number {
	if(memo[startIdx]) return memo[startIdx]
	if(startIdx > nums.length-1) return 0
	let currSum = 0
	let maxValue = 0
	for(let i=startIdx;i<nums.length;i++){
		currSum = nums[i] + rob_recursive(nums, i+2,memo)
		maxValue = Math.max(maxValue, currSum)
	}
	memo[startIdx] = maxValue
	return maxValue
}
//copilot generated
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = 0; // Max robbed up to two houses before
  let prev1 = 0; // Max robbed up to the previous house

  for (let num of nums) {
    const current = Math.max(prev1, prev2 + num); // Rob current or skip
    prev2 = prev1; // Shift prev2 to prev1
    prev1 = current; // Update prev1 to current
  }

  return prev1; // Final result
}
// expect(rob([2, 7, 9, 3, 1])).to.be(12);
expect(rob([2, 1, 1, 2])).to.be(4);
expect(rob([2, 7, 9, 3, 1, 5, 4])).to.be(rob_recursive([2, 7, 9, 3, 1, 5, 4]));


expect(
	rob([
		114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223,
    58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187,
    69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
  ])
).to.be(4173);
console.time();
expect((rob([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))).to.be(0)
console.timeEnd();
