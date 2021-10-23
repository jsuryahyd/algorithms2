/**
 * @link https://www.youtube.com/watch?v=ib88K0j7yjI
 */

function pairwise(nums, targetSum) {
  const indexSum = 0;
  const indices = [];
  console.log(nums);
  // const lowestIndices = {};
  // //remove higher index repeat nums
  // for (var [idx, num] of nums.entries()) {
  //   if (typeof lowestIndices[num] !== 'undefined') {
  //     nums.splice(idx, 1,"gibber");
  //     continue;
  //   }
  //   lowestIndices[num] = idx;
  // }
  // console.log(nums)

  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (i <= j) continue;//once they are equal and above, the combinations are already checked
  // 		if(isNaN(nums[i]) || isNaN(nums[j])) continue;
  //     if (nums[i] + nums[j] == targetSum) {
  // 			console.log([i,j],[nums[i] , nums[j]])
  //       indices.push(i);
  //       indices.push(j); //afraid to use concat.
  //     }
  //   }
  // }
  // return indices.reduce((a,i,idx)=>a+i,0);

  
	const usedIndices = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= j) continue; //once they are equal and above, the combinations are already checked
			if(usedIndices[i] || usedIndices[j]) continue;
			// console.log(combinations[i],combinations[j],"both are undefined")
      if (nums[i] + nums[j] == targetSum) {
				usedIndices[i]=true
				usedIndices[j]=true
        console.log(`${nums[i]} + ${nums[j]} = ${targetSum} ([${i},${j}])`);
      }
    }
  }
  console.log(usedIndices);
  return Object.entries(usedIndices).reduce((a, i) => {return a + Number(i[0])}, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); //11
console.log(pairwise([7, 9, 11, 13, 15], 20)) // 6
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); //10
console.log(pairwise([1, 3, 2, 4], 4)) //1
console.log(pairwise([], 100)) //0
