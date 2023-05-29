function genParen(n) {
  let combinations = [];

  genString(n, 1, combinations);
  return combinations;
}

function genString(total, insertPos = 1, combinations) {
  let str = "";
  if (total === 0) return str;
  str += "(";
  // if (insertPos === total) {
  //   return str + ")";
  // }
  let minPossible = insertPos === total ? 1 : 0;
  let maxPossible = Math.min(insertPos,total);
  for (let i = minPossible; i <= maxPossible; i++) {
    str +=
      ")".repeat(i);

     str += (insertPos < total
        ? genString(total - i, insertPos + 1, combinations,str)
        : ""
        );
  }

  insertPos === total && combinations.push(str);
  return str;
}

//(((())))()
console.log(genParen(3));
console.log(genParen(5));
