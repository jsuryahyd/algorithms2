/**
 * 
 * @param text 
 * @param str 
 * 
 * "Jaya Surya"
 * "     surya"
 * 
 * "text search boyre moore"
 * "     			boyre 	"
 * 
 * "text"
 * "boyre"
 */

function searchString(text:string, str:string):number|number[]{
	if(str === "" || text === "") return []
	let result:number[] = []
	let i = 0;
	const lastOccurences = {}
	
		for(let i=0;i<str.length; i++){
			lastOccurences[str[i]] = i
		}
	
	
	//find last mismatch 
	while(i < text.length){
		let mismatchedIdx = -1
		// loop over str, from i,
		if(i+str.length > text.length) break;
		// find last mismatch
		for(let j=0;j<str.length && i +  j < text.length;j++){
			if(str[j] !== text[i+j]) mismatchedIdx = i+j
		}
		// console.log(text.substring(mismatchedIdx))
		// console.log(str)
		if(mismatchedIdx === -1){
			//  return i//all matched, return
			result.push(i)
			i+=1
			continue;
			 }
		
			// if str has it, try to align the mismatch - i+= str.length - str.indexOf(mismatchedchar); continue;
		// const mismatchedCharIdxInStr = lastOccurence(str, text[mismatchedIdx])
		const mismatchedCharIdxInStr = lastOccurences[text[mismatchedIdx]]
			
		if(mismatchedCharIdxInStr > -1) i = i +Math.max( str.length -  1 - mismatchedCharIdxInStr,1)//if duplicated chars in the pattern, then str.length-1-misIdx will be -ve, taking back and forth causing infinte loops
			// else move past the mismatch i.e. i=misIdx+1; continue
			else i = mismatchedIdx+1
	}
	return result.length ? result : []
	// return -1;
}

function lastOccurence(str, char){
	for(let i=str.length-1;i>= 0; i--){
		if(str[i] === char) return i
	}
	return -1
}


/**
 * tests
 * 
 */
function getAllIndexes(str, searchValue) {
	if(str === "" || searchValue === "") return []
  const indexes:number[] = [];
  let index = str.indexOf(searchValue);
  while (index !== -1) {
    indexes.push(index);
    index = str.indexOf(searchValue, index + 1);
  }
  return indexes;
}
// o Hello
// Hello
console.time();
[
	["Are you out of your mind?","you"],
	["Hello, how are you?","you"],
	["o Hello, how are you?","Hello"],
	["This is not as easy, as we think","as"],
["This thing is not as easy, as we think","thin"],
["Team", "I"],
["AAAAAAA","AA"],
["AABAACAADAABAABA","AABA"],
    ["short", "longerPattern"],
    ["AAAAAA", "AAA"],
    ["abcdef", "xyz"],
    ["HelloWorld", "helloworld"],
    ["abcdef", ""],
    ["", "pattern"],
    ["abcdef", "def"],
		["GJGGGGJJJGG","GJ"],
		["text search boyre moore","boyre "],
		["Jaya Surya", "surya"],
		["Jaya Surya", "Surya"]
].forEach(([t,s])=>{
	// console.log(t,s)
	expect(searchString(t,s)).to.eql(getAllIndexes(t,s))
})
console.timeEnd()