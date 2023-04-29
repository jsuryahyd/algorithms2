function countSubStrings(str) {
  const goodStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      const subStr = str.substring(i, j);
      // console.log(subStr,'------',i,j);
      if (isGoodString(subStr)) {
        goodStr.push(subStr);
      }
    }
  }
  console.log("-----------\n",goodStr)
  return goodStr.length;
}

function isGoodString(str) {
  if (str.length % 2 !== 0) return false;
  // console.log(str)
  const other = str[0] === "0" ? "1" : "0";
  for (let i = 0; i < str.length; i++) {
    if (i < str.length / 2) {
      if (str[i] !== str[0]) return false;
    } else {
      if (str[i] !== other) return false;
    }
  }
  return true;
}



// console.log(countSubStrings("00110011"));
// console.log(countSubStrings("10101"));
// console.log(countSubStrings("11110000"));


function optimised_removeAdjDupStr(str){
	const sameLetterGroups = Array(str.length).fill(undefined)
	let letterSwitchedIdx = 0;
	sameLetterGroups [0] = 1;
	for(let i = 1;i<str.length;i++){
		if(str[i-1] != str[i]){
			letterSwitchedIdx++;
			sameLetterGroups[letterSwitchedIdx]=1
		}else{
			sameLetterGroups[letterSwitchedIdx]++;
		}
	}
	console.log(sameLetterGroups)
	let ans = 0;
	for(let i=1;i<=letterSwitchedIdx;i++){
		ans+= Math.min(sameLetterGroups[i-1],sameLetterGroups[i])
	}
	return ans;
}
// console.log(alternative("00110011"));
console.log(optimised_removeAdjDupStr("001110101100"));
// console.log(alternative("10101"));
// console.log(alternative("11110000"));