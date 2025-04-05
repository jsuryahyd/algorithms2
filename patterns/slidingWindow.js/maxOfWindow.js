//https://neetcode.io/problems/sliding-window-maximum
class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	static maxSlidingWindow(nums, k) {
		const result = []
		let sorted = null
		for(let i=0;i<nums.length - k + 1;i++){
			console.log(nums.slice(i, i+k))
			sorted = new MaxHeap(nums.slice(i, i+k))
			// result.push(nums.slice(i, i+k).sort().at(-1))
			result.push(sorted.peek())
		}
		return result
	}

}

class MaxHeap{

	constructor(elements){
		this.elements= elements || []
		this.elements.length && this.buildHeap()
	}
 add(el){
		this.elements.push(el)
		this.heapifyUp(this.elements.length - 1)
}

	 heapifyUp(idx){
		let parentIdx = this.getParentIdx(idx)
		while(idx > 0 && this.elements[parentIdx] < this.elements[idx]){
			this.swap(idx, parentIdx)
			idx = parentIdx
			parentIdx = this.getParentIdx(idx)
		}
	}
	 getParentIdx(idx){
		return Math.floor((idx - 1) / 2)
	}

	 swap(i,j){
		[this.elements[j],this.elements[i]] = [this.elements[i],this.elements[j]]
	}

	peek (){
		return this.elements[0]
	}
	extractMax (){
		const max = this.elements[0]
		this.elements[0] = this.elements.pop();//put the last item on top, and start sorting

		this.heapifyDown(0)
		return max
	}

	heapifyDown(start){
			if(this.isLeaf(start)) return

			let left = 2 * start + 1
			let right = 2 * start + 2
			let largest = start

			if(left < this.elements.length && this.elements[left] > this.elements[start]){
				largest = left
			}
			if(right < this.elements.length && this.elements[largest] < this.elements[right]){
				largest = right
			}

			if(largest != start){
				this.swap(largest, start)
				this.heapifyDown(largest)
			}

	}
isLeaf(idx){
	return idx >= Math.floor(this.elements.length / 2)
}
buildHeap(){
	for(let i=Math.floor(this.elements.length / 2);i>=0;i--){
		this.heapifyDown(i)
	}
	console.log(this.elements,"sorted")
}
}


console.log(Solution.maxSlidingWindow([1,2,1,0,4,2,6], 3))