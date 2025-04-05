function ListNode(val, next){
	if(val === undefined || val === null) throw "no val provided to list node"
	this.val = val
	this.next = next || null
}


/**
* @param {number[]} nums
* @return {boolean}
*/
var circularArrayLoop = function(nums) {
	
	let added = new Set()
	let numsRemaining = true
	let nodes = Array(nums.length).fill(0)
	// for(let i=0;i<nums.length;i++){
	//     nodes[i] = new ListNode(i)
	//     const nextIdx = (nums[i] + i) % nums.length
	//     nodes[i].next = nodes[nextIdx] !== 0 ? new ListNode(nextIdx): nodes[nextIdx]
	// }
	let visited = new Set()
			if(nodes[i] !== 0) 
			nodes[i] = new ListNode(i)
			let _i = i
			let nextIdx = (nums[i] + i) % nums.length
			if(nodes[nextIdx] !== 0) nodes[i].next = nodes[nextIdx]
			//keep adding next, until next node already exists
			while(nodes[nextIdx] === 0){
			nodes[nextIdx] = new ListNode(nextIdx) 
			nodes[_i].next = nodes[nextIdx]
			_i = nextIdx
			nextIdx = (nums[nextIdx] + nextIdx) % nums.length
			}
	
	console.log(nodes)

	//get all cycles

	//check if direction flips? or sum the nums[i] === 0


};

circularArrayLoop([2,-1,1,2,2])