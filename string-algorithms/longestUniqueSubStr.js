/**
 * @description find longest subStr without duplicate characters, using sliding window strategy
 */
function longestUniqueSubStr(str) {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    const visitedChars = {};
    for (let j = i; j < str.length; j++) {
			// console.log(visitedChars)
			// visitedChars[i] = true;
      if (visitedChars[str[j]]) break;
      else {
				// console.log(i,j,str.substring(i,j+1))
        visitedChars[str[j]] = true;
        if (j - i + 1 > maxLength) {
          maxLength = j - i + 1;
        }
      }
    }
    visitedChars[str[i]] = false;
  }

  return maxLength;
}

console.log(longestUniqueSubStr('geeksforgeeks'))
