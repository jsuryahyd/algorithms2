function groupAnagrams(strs) {
	const result = [[strs[0]]]
	//loop over each item in original array,
	// check if next item is anagram, then push in to the previous item's array,
	// if not add it in a new array

	main: for(let i=1;i<strs.length;i++){
	
results: for(let j=0;j<result.length;j++){
			//if this str matches with first item of any array, add it to the array
	const isAnagram = strs[i].split('').sort().join('') === result[j][0].split('').sort().join('')
	if(isAnagram){

	result[j].push(strs[i])
	continue main;
	}
	
}
			result.push([strs[i]])
	}
	
	return result;
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]))