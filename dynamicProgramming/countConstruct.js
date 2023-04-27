function countConstruct(targetWord, wordList,memo={}) {
  if (targetWord === "") return 1;

  let numWays = 0;
  for (let w of wordList) {
    if (targetWord.indexOf(w) != 0) continue;
    const remainingStr = targetWord.slice(w.length);
    // const _numWays = countConstruct(remainingStr, wordList);
    memo[remainingStr] = countConstruct(remainingStr, wordList,memo);
    if (memo[remainingStr] > 0) {
      numWays = numWays + memo[remainingStr];
    }
  }
  return numWays;
}

expect(countConstruct("skateboard", ["sk", "ate", "boar", "boa", "rd"])).to.be(
  1
);

expect(
  countConstruct("skateboard", ["sk", "ate", "boar", "boa", "rd", "d", "skate"])
).to.be(4);

expect(
  countConstruct("skateboard", ["sk", "ate", "boar", "boa", "ard",])
).to.be(0);

expect(countConstruct('purple',['purp','le','p','purpl','ur'])).to.be(2)

expect(countConstruct('eeeeeeeeeeeeeeeeeeeeee',['e','ee','eee','eeeeeee'])).to.be(473082)
expect(countConstruct('eeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeeeeee'])).to.be(0)
