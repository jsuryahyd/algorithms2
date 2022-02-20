var checkAlmostEquivalent = function(word1, word2) {
	//both words length is equal
	const word1F ={}
			const word2F ={}
	while(word1.length){
		if(!word1F[word1[0]]) word1F[word1[0]] = 0
		if(!word1F[word2[0]]) word1F[word2[0]] = 0
		if(!word2F[word1[0]]) word2F[word1[0]] = 0
		if(!word2F[word2[0]]) word2F[word2[0]] = 0
			 word1F[word1[0]]+=1
			 word2F[word2[0]]+=1
			word1 = word1.slice(1);
			word2 = word2.slice(1);
			// console.log(word1,word2)
	}
	// console.log(word1F,word2F)
	for(let alphabet in word1F){
			// console.log(word1F[alphabet] - word2F[alphabet])
			if(word1F[alphabet] - word2F[alphabet] > 3 || word1F[alphabet] - word2F[alphabet] < -3) return false
	}
	return true
};

console.time()
expect(checkAlmostEquivalent('abcdeef','abaaacc')).to.be(true)
console.timeEnd()

console.time()
expect(checkAlmostEquivalent('cccddabba','babababab')).to.be(true)
console.timeEnd()


console.time()
expect(checkAlmostEquivalent('aaaa','bccb')).to.be(false)
console.timeEnd()


