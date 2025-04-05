class Solution {

	naiveSolution(nums, k) {
		// O(nlogn) time complexity
		nums.sort((a, b) => a - b);
		return nums.slice(-k);
	}

	// O(n) time complexity
	// O(k) space complexity
	heapSolution(nums, k) {
		const minHeap = new MinHeap();
		for (const num of nums) {
			minHeap.add(num);
			if (minHeap.size() > k) {
				minHeap.removeMin();
			}
		}
		return minHeap.toArray();
	}

}

class MinHeap {
	constructor() {
		this.heap = [];
	}

	add(value) {
		this.heap.push(value);
		this.bubbleUp(this.heap.length - 1);
	}

	removeMin() {
		if (this.heap.length === 0) return null;
		const min = this.heap[0];
		const last = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = last;
			this.bubbleDown(0);
		}
		return min;
	}

	bubbleUp(index) {
		let parentIndex = Math.floor((index - 1) / 2);
		while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
			[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown(index) {
		const length = this.heap.length;
		let leftChildIndex = 2 * index + 1;
		let rightChildIndex = 2 * index + 2;
		let smallestIndex = index;

		if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
			smallestIndex = leftChildIndex;
		}
		if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
			smallestIndex = rightChildIndex;
		}
		if (smallestIndex !== index) {
			[this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
			this.bubbleDown(smallestIndex);
		}
	}

	size(){
		return this.heap.length;
	}

	toArray() {
		return this.heap.slice().sort((a, b) => a - b);
	}

}

console.log(new Solution().heapSolution([3, 2, 1, 5, 6, 4], 2)); // [5, 6]
console.log(new Solution().naiveSolution([3, 2, 1, 5, 6, 4], 2)); // [5, 6]
console.log(new Solution().heapSolution([3, 2, 3, 1, 2, 4, 5], 4)); // [4, 5]
console.log(new Solution().naiveSolution([3, 2, 3, 1, 2, 4, 5], 4)); // [4, 5]
console.log(new Solution().heapSolution([1, 2], 2)); // [1, 2]
console.log(new Solution().naiveSolution([1, 2], 2)); // [1, 2]