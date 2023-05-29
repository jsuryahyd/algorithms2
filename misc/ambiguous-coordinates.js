function ambiguousCoords(str) {
  str = str.replace(/^\(|\)$/g, "");
  const coords = [];
  for (let i = 1; i < str.length; i++) {
    const pair1 = str.substring(0, i);
    if (pair1.length > 1 && isAllZeroes(pair1)) {
      continue;
    }
    const pair2 = str.substring(i);
    const pair1Decimals = [];
    for (let j = 1; j < pair1.length; j++) {
			const afterDecimal = pair1.substring(j);
			if((afterDecimal).endsWith("0")) continue
      const p1 = pair1.substring(0, j) + "." + pair1.substring(j);
      if (leadingZero(p1)) continue;
      pair1Decimals.push(p1);
    }
    [pair1, ...pair1Decimals].forEach((p1) => {
      for (let k = 1; k < pair2.length; k++) {
				const afterDecimal = pair2.substring(k);
				if((afterDecimal).endsWith("0")) continue
        const p2 = pair2.substring(0, k) + "." + afterDecimal;
        if (leadingZero(p2)  || leadingZero(p1)) continue;
        coords.push("(" + p1 + ", " + p2 + ")");
      }
      if (!leadingZero(p1) && !leadingZero(pair2))
        coords.push("(" + p1 + ", " + pair2 + ")");
    });
  }

  return coords;
}

function leadingZero(str) {
  return str.length>1 && str.startsWith("0") && !str.startsWith("0.");
}

function isAllZeroes(str) {
	if(!str.length) return false
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") return false;
  }
  return true;
}

// function hasOnlyLeadingZeroes(str){
// 	if(isAllZeroes(str)) return false
// 	let lastIntIdx = -1
// 	for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "0") lastIntIdx = i;
// 		if(lastIntIdx > -1 && str[i]==="0") return false
//   }
// 	return true
// }
// // console.log(hasOnlyLeadingZeroes(0))
// // console.log(hasOnlyLeadingZeroes(0.01))
// console.log(hasOnlyLeadingZeroes("10"))

console.log(ambiguousCoords("(123)"));
console.log(ambiguousCoords("(0123)")); //["(0, 1.23)","(0, 12.3)","(0, 123)","(0.1, 2.3)","(0.1, 23)","(0.12, 3)"]
console.log(ambiguousCoords("(00011)"));
console.log(ambiguousCoords("(100)"));
console.log(ambiguousCoords("(0010)"));
console.log(ambiguousCoords("(00101)"));

