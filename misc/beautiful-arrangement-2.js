// https://leetcode.com/problems/beautiful-arrangement-ii/

function _constructArray(n, k) {
  const arr = [1];
  let arrIdx = 0;
  while (arr.length < n) {
    arr.push(arr[arrIdx] + 1);
    arrIdx++;
  }

  // let distinctDiffs = 1;//all are 1 more than each currently
  // let flipIdx = 1
  // while(distinctDiffs < k){
  // 	const movingNum = arr.splice(flipIdx,1)
  // 	arr.splice(flipIdx+1,0,movingNum[0])
  // 	distinctDiffs++
  // 	flipIdx+=3
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   const _arr = [...arr];
  //   for (let j = 0; j < arr.length; j++) {
  //     if (i === j) continue;
  //     const temp = _arr[i];
  //     _arr[i] = _arr[j];
  //     _arr[j] = temp;
  //   }
	// 	console.log({_arr})
  //   if (getDistincDiffs(_arr) === k) return _arr;
  // }
	let permutation = [...arr];
	let distinctDiffs = 1
	while(distinctDiffs != k){
		if(!nextPermutation(permutation)){
			console.log('breaking for ',permutation)
			break;
		}//modifies array
		// console.log({arr})
		distinctDiffs = getDistincDiffs(permutation)

	}
	return permutation

  // return arr;
}

function nextPermutation(array) {
	// Find non-increasing suffix
	let i = array.length - 1;
	while (i > 0 && array[i - 1] >= array[i])
		i--;
	if (i <= 0)
		return false;
	
	// Find successor to pivot
	let j = array.length - 1;
	while (array[j] <= array[i - 1])
		j--;
	let temp = array[i - 1];
	array[i - 1] = array[j];
	array[j] = temp;
	
	// Reverse suffix
	j = array.length - 1;
	while (i < j) {
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		i++;
		j--;
	}
	return true;
}


function getDistincDiffs(arr) {
  let diffs = new Set();
  for (let i = 1; i < arr.length; i++) {
    diffs.add(Math.abs(arr[i] - arr[i - 1]));
  }
  return diffs.size;
}


function constructArray(n,k){

	let top = 1;
	let bottom = n;

	const arr = []
	while(top<=bottom){
		if(k%2===1){ //odd
			arr.push(top)
			top++
		}else{
			arr.push(bottom)
			bottom--
		}
		k>1 && (k--)
	}

	return arr;
}

console.log(constructArray(3, 1));
console.log(constructArray(3, 2));

console.log(constructArray(10, 4));
console.log(constructArray(10, 5));

console.log(constructArray(5, 1)); // 1,2,3,4,5 | [ 1, 2, 3, 4, 5 ]
console.log(constructArray(5, 2)); // 1,3,2,4,5 | [ 5, 1, 2, 3, 4 ]
console.log(constructArray(5, 3)); // 1,3,4,2,5 | [ 1, 5, 2, 3, 4 ]
console.log(constructArray(5, 4)); // 1,5,2,4,3 | [ 5, 1, 4, 2, 3 ]
// 1,2,3,4,5,6,7 (1,...)
// 1,3,2,4,5,6,7 (2,1,2,1,1,1)
// 1,3,2,5,4,6,7 (2,1,3,1,2,1)
// 1,5,2,3,4,6,7 (2,1,2,3,1,1)
// 1,5,2,7,4,6,3 (4,3,5,3,2,3)
