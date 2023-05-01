function longestSubStrWithKDistinctChars(str, k) {
  let maxcount = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      // console.log(str.substring(i, j + 1));
      if (getDistinctCount(str.substring(i, j + 1)) === 2) {
        maxcount = Math.max(maxcount, j - i + 1);
      }
    }
  }
  return maxcount;
}

function getDistinctCount(str) {
  let i = 0;
  let distinct = new Set();
  while (i < str.length) {
    distinct.add(str[i]);
    i++;
  }
  return distinct.size;
}

console.log(longestSubStrWithKDistinctChars("aaahhibc", 2)); //5
console.log(longestSubStrWithKDistinctChars("abahhibc", 2)); //3

function slidingWindow(str, k) {
  const chars = [];

  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    chars.push(str[i]);
    while (new Set(chars).size > k) {//distinct chars should not be more than given k
      chars.shift();
    }
    maxCount = Math.max(maxCount, chars.length);
  }
	return maxCount
}


console.log(slidingWindow("aaahhibc", 2)); //5
console.log(slidingWindow("abahhibc", 2)); //3