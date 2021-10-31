function allConstruct(targetStr, wordList, memo = {}) {
  if (targetStr === "") return [[]];
  let combos = [];
  for (let w of wordList) {
    if (targetStr.indexOf(w) !== 0) continue;
    const remainingStr = targetStr.slice(w.length);
    memo[remainingStr] =
      memo[remainingStr] || allConstruct(remainingStr, wordList, memo); 
    if (memo[remainingStr].length) {
      combos = combos.concat(memo[remainingStr].map((arr) => [w, ...arr]));
    }
  }
  return combos;
}

expect(allConstruct("skateboard", ["sk", "ate", "boar", "boa", "rd"])).to.eql([
  ["sk", "ate", "boa", "rd"],
]);
expect(
  allConstruct("skateboard", ["sk", "ate", "boar", "boa", "rd", "d", "skate"])
).to.eql([
  ["sk", "ate", "boar", "d"],
  ["sk", "ate", "boa", "rd"],
  ["skate", "boar", "d"],
  ["skate", "boa", "rd"],
]);

expect(allConstruct("skateboard", ["sk", "ate", "boar", "boa", "ard"])).to.eql(
  []
);
console.time();
expect(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeeeee"])
).to.eql([]);
console.timeEnd();
