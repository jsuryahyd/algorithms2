function canConstruct(targetWord, wordList, memo = {}) {
  if (targetWord === "") {
    return true;
  }
  for (let i of wordList) {
    if (targetWord.indexOf(i) != 0) continue; //donot want middle pieces
    const remainingStr = targetWord.slice(i.length); //0 + i.length
    if (memo[remainingStr] != undefined) return memo[remainingStr];
    memo[remainingStr] = canConstruct(remainingStr, wordList,memo);
    if (memo[remainingStr]) {
      console.log(i, remainingStr);
      return true;
    }
  }

  return false;
}

expect(canConstruct("skateboard", ["sk", "ate", "boar", "boa", "rd"])).to.be(
  true
);
expect(canConstruct("skateboard", ["ska", "ate", "boar", "boa", "rd"])).to.be(
  false
);
console.time("e");
expect(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eee",
    "eeeee",
    "eeeeeeeeee",
    "eeeeeeeeeeeeeee",
  ])
).to.be(false);
console.timeEnd("e");
