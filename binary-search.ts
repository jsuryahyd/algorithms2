function binarySearch(arr,num){

	let left = 0
	let right= arr.length-1
	let mid = Math.floor(left + (right - left) / 2);
	let counter = 0
	while(left<right){
			if(arr[mid] === num) {return mid}
			if(num < arr[mid]) right = mid-1;
			if(num > arr[mid]) left = mid+1
			mid = Math.floor(left + (right - left) / 2);
			// console.log(left, right, mid)
			counter++
	}
	console.log({right, num, left, counter})
	// left === right
	return arr[right] === num ? right : arr[left] === num ? left : -1;//when 2 items are remaining, mid=0, if num is not 0th, left=mid
}

console.log(binarySearch([1,2,3,4,5], 1))
console.log(binarySearch([1,20,30,64,555], 20))
console.log(binarySearch([1,20,30,64,555], 30))
console.log(binarySearch(new Array(100).fill(0).map((i,idx)=>idx * 99), 99*7))
console.log(binarySearch(new Array(1000).fill(0).map((i,idx)=>idx * 99), 99*7))