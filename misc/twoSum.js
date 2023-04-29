function bruteForce(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [i, j];
      }
    }
  }
  return [];
}

function sortAndTwoPointer(arr, targetSum) {
  const arr2 = [...arr];
  arr2.sort();
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr2[i] + arr2[j] === targetSum) {
      return [arr.indexOf(arr2[i]), arr.indexOf(arr2[j])].sort(); //let the indices be in increasing order
    } else if (arr2[i] + arr2[j] < targetSum) {
      i++; //go for bigger number, which is next one in a sorted array
    } else if (arr2[i] + arr2[j] > targetSum) {
      j--;
    }
  }
  return [];
}

function hashMap(arr,k){
	const _hashMap = {}
	for(let i=0;i<arr.length;i++){
		if(_hashMap[k - arr[i]] !== undefined){//index can be zero, which is falsy
			// console.log(_hashMap)
			return [_hashMap[k - arr[i]],i]
		}else{
			_hashMap[arr[i]] = i
		}
	}
	return []
}

const twoSum = (...args) => {
  console.log(bruteForce(...args));
  console.log(sortAndTwoPointer(...args));
	console.log(hashMap(...args))
};
twoSum([2, 3, 7, 4], 9);
twoSum([2, 18, 3, 4, 19], 23);
