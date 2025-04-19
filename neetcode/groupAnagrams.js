function groupAnagrams1(strs) {
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


function groupAnagrams(strs){
	if(strs.length === 0) return []
	if(strs.length === 1) return [strs]

	const result = [[strs[0]]]

	strs: for(let i=1;i<strs.length;i++){
		for(let j=0;j<result.length;j++){
			if(isAnagram(strs[i], result[j][0])){
				result[j].push(strs[i]);
				continue strs
			}
			
		}
		result.push([strs[i]])
	}
	return result;
}
function isAnagram(s1, s2){
	if(s1.length !== s2.length) return false;
	const counts = new Map()
	for(let i=0;i<s1.length;i++){
		counts.set(s1[i], (counts.get(s1[i])||0) + 1)
	}
	for(let i=0;i<s2.length;i++){
		if(!counts.get(s2[i])) return false
		counts.set(s2[i], (counts.get(s1[i])||0) - 1)
	}
	
	return true;

	// return s1.split('').sort().join("") === s2.split('').sort().join("")
}
console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]))
//more tests
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]
console.log(groupAnagrams(["a"])) // [["a"]]
console.log(groupAnagrams(["a","b"])) // [["a"],["b"]]
console.log(groupAnagrams(["a","a"])) // [["a","a"]]
console.log(groupAnagrams(["a","b","c"])) // [["a"],["b"],["c"]]

console.log(groupAnagrams(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"]))
//large number of anagrams test
console.log(groupAnagrams(["abc","acb","bac","bca","cab","cba"])) // [["abc","acb","bac","bca","cab","cba"]]
console.log(groupAnagrams(["abc","acb","bac","bca","cab","cba","a"])) // [["abc","acb","bac","bca","cab","cba"],["a"]]

//compare the performance of both functions, by running them on a large input, a hundred times
console.time("groupAnagrams1")
for(let i=0;i<100;i++){
	groupAnagrams1(["abc","acb","bac","bca","cab","cba"])
}
console.timeEnd("groupAnagrams1")
console.time("groupAnagrams")
for(let i=0;i<100;i++){
	groupAnagrams(["abc","acb","bac","bca","cab","cba"])
}
console.timeEnd("groupAnagrams")