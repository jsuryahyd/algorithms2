function permutations(arr) {
  const combos = [];
  if (!arr.length) return [];
	if(arr.length === 1) return [arr]
  for (let i = 0; i < arr.length; i++) {
    const combosOfOneItemSmallerArr = permutations(
      arr.slice(0, i).concat(arr.slice(i + 1))
    );
    combosOfOneItemSmallerArr.forEach((c) => {
      combos.push([arr[i]].concat(c));
    });
  }
  return combos;
}

console.log(permutations([1,2,3]))
console.log(permutations([1,2,3,'b']))

//todo: https://stackoverflow.com/a/34142269/7314900 check this
