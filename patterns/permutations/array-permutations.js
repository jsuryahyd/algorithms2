/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	if(!nums.length) return []
	if(nums.length === 1) return [nums];
	if(nums.length === 2) return [nums, [nums[1],nums[0]]]
	let result = []
    for(let i=0;i<nums.length;i++){
			const subNums = [...nums]
				const [item] = subNums.splice(i,1)
				result = result.concat(permute(subNums).map(arr=>[item,...arr]))
    }
    return result;
};

var permuteUnique = function(nums) {
	nums.sort((a,b)=> a-b);
	const used = new Array(nums.length).fill(false);
	const result = [];
	const arr = [];
	backtrack();
	return result;


	function backtrack(){
			// Base case: reach teh end:
			if (arr.length===nums.length) result.push([...arr]);

			// Recursive case:
			// Loop through choice:
			for (let i=0; i<nums.length; i++){
					// Pruning: if use or duplicate
					if (used[i]) continue;
					if (i!=0 && !used[i-1] && nums[i] === nums[i-1]) continue;
					// Make choice
					arr.push(nums[i]);
					used[i] = true;
					// Backtrack to next level
					backtrack();
					// Undo choice
					arr.pop();
					used[i] = false;
			}
	}
};


expect(permuteUnique([1,2,3])).to.eql([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
expect(permute([1])).to.eql([[1]])
expect(permute([0,1])).to.eql([[0,1],[1,0]])