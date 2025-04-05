
function nextGreaterElements(nums) {
		const n = nums.length;
		const result = new Array(n).fill(-1);
		const stack = [];

		for (let i = 0; i < n; i++) {
				while (stack.length && nums[stack.at(-1)] > nums[i]) {
						result[stack.pop()] = nums[i];
				}
				stack.push(i);
				// console.log(stack)
		}

		return result;
}
// function nextGreaterElements(nums){


// 	const result = Array(nums.length).fill(-1)
// 	for(let i=0;i<nums.length;i++){
// 		for(let j=i+1;j<nums.length;j++){
// 			if(i === nums.length - 1) console.log(i,j, nums[i],nums[j])
// 			if(nums[j] > nums[i]){
// 				result[i] = nums[j];
// 				break;
// 			}
// 		}	
// 	}
// return result;
// }



// const input = [2,1,5,6,0,4,5]
// const output = nextGreaterElements(input);
// console.log(output); // [5, 5, 6, -1, 4, 5, -1]
//==============


function daysUntilWarmerDay(temps){

	const result = Array(temps.length).fill(0)
	const daysToBeCalculated = [] //stack
	
	
	for(let i =0; i<temps.length;i++){
		// @ts-ignore
		while(daysToBeCalculated.length &&  temps[i] > temps[daysToBeCalculated.at(-1)] ){
			const prevIdx = daysToBeCalculated.pop();
			if(prevIdx === undefined) continue
			result[prevIdx] = i - prevIdx
		}
		daysToBeCalculated.push(i)
	}

	return result

}

console.log(daysUntilWarmerDay([28, 31, 32, 35, 30, 28, 26, 37]))