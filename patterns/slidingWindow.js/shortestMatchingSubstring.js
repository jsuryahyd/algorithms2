class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {string}
	 */
	minWindow(s, t) {
			let result = ""
			forLoop: for(let i=0;i<s.length - t.length + 1;i++){
					let subStrLen = t.length
					// let s1 = s.substr(i, substrLen)
					// if(isMatch(s1, t)) return s1
					while(i + subStrLen <= s.length){
							let s1 = s.substr(i, subStrLen++)
							if(isMatch(s1, t)) {
									result = result == "" || result.length > s1.length ? s1 : result;
									continue forLoop;
									break;
							}
					}
			}

			return result
	}
}
function isMatch(s1, t){
	
	const counts = new Map()
	for(let i=0;i<s1.length;i++){
		counts.set(s1[i], (counts.get(s1[i])||0) + 1 )
	}

	for(let i=0;i<t.length;i++){
		if(!counts.get(t[i])) return false
		counts.set(t[i], (counts.get(t[i])) - 1 )
	}
	return true
}
console.log(new Solution().minWindow("ADOBECODEBANC", "ABC"))
console.log(new Solution().minWindow("OUZODYXAZV", "XYZ"))
console.log(new Solution().minWindow("abc", "ac"))
console.log(new Solution().minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"))