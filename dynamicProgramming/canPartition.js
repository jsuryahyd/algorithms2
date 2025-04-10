// https://leetcode.com/problems/partition-equal-subset-sum/

// Best solution, not mine, taken from leetcode. 
var canPartition = function (nums) {
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
			total += nums[i];
	}

	if (total % 2 !== 0) return false;

	let target = total / 2;
	let dp = new Array(target + 1).fill(false);
	dp[0] = true;

	for (let num of nums) {
			for (let i = target; i >= num; i--) {
					if (dp[i - num]) dp[i] = true;
					if (dp[target]) return true;
			}
	}

	return false;
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function(nums) {
// 	if(nums.length  < 2) return false
// 	if(nums.length === 2)  return nums[0] === nums[1];
// 	nums.sort((a,b)=>a-b)
// 	let left = 0;
// 	let right= nums.length-1;
// 	let leftSum = nums[left]
// 	let rightSum = nums[right]
// 	while(left < right){
// 			if(rightSum > leftSum)
// 					leftSum += nums[++left]
// 			else if(rightSum < leftSum)
// 					rightSum += nums[--right]
// 			else {
// 					if(left === right - 1) break
// 					if(left === right - 2) return false
					
// 					leftSum += nums[++left]
// 					rightSum += nums[--right]
// 			}
// 	}
// 	return leftSum === rightSum
// };

// var canPartition = function(nums) {
// 	if(nums.length  < 2) return false
// 	if(nums.length === 2)  return nums[0] === nums[1];
// 	const sum = nums.reduce((acc, n,idx)=>acc+n,0)
// 	const halfSum = sum / 2;
// 	if(halfSum != Math.floor(halfSum)) return false;
// 	const memo = {}
// 	return reduceToZero(halfSum, nums,memo)
// };

// function reduceToZero( sum, nums,memo,key="undefined"){
// 	if(memo[key] ) return memo[key]
// 	if(nums.length === 0 && sum !== 0) {memo[key]=false; return memo[key]}
// 	if(sum === 0) return true
// 	for(let i=0;i<nums.length;i++){
// 		let remainingSum = sum - nums[i];
// 		if(remainingSum < 0) continue
// 		if(remainingSum === 0 ) return true
// 		const key = sum+":"+nums[i]
// 		if(memo[key] === false) continue;
// 		if(reduceToZero(remainingSum, nums.filter((_,idx)=>idx !== i),memo, key)) {
// 			// console.log(nums.filter((_,idx)=>idx !== i));
// 			return true}
// }
// memo[key] = false
// 	return false;
// }


function reduceToZero(sum, nums,memo){

	let dp = []
	for(let j=0;j<nums.length;j++){
		let num = nums[j]

		dp.push(new Array(sum+1).fill(false))
		dp[dp.length - 1][0] = true // set first element of this array to 'true'

		for(let i=1;i<=sum;i++){
			dp[j][i] = i === num
			if(j > 0){
				dp[j][i] = dp[j][i] || dp[j-1][i-num] || dp[j-1][i]//trickledown the previous array true values
			}
	}

	}
	dp.length > 1 && dp.splice(0,1)
	// console.log(dp)
	return dp[dp.length-1][sum]
}

// function expect(val){

// 	return {
// 		to: {
// 			be:function(val2){
// 				if (val === val2) console.log('success', val)
// 					else console.error('assertion failed, expected:', val2, " received:", val)
// 			}
// 		}
// 	}
// }



// expect(canPartition([3,5, 2,12])).to.be(false);
// expect(canPartition([1,5,11,3])).to.be(false);
// expect(canPartition([1,3,4,4])).to.be(false);
// expect(canPartition([1,2,5])).to.be(false);
expect(canPartition([2,2,1,1])).to.be(true);
// expect(canPartition([1,2,3,5])).to.be(false);
expect(canPartition([1,5,11,5])).to.be(true);
expect(canPartition([1,5,11,5,1,5,11,5,1,5,11,5,5,1,5,11,5,1,5,11,5,1,5,11,5,1,5,11])).to.be(true);
expect(canPartition([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97])).to.be(false);
console.log('done')