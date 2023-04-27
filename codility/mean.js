// function solution(arr, mean) {
//   // write your code in JavaScript (Node.js 8.9.4)

//   const map = {};
//   // map[0] = 1;
//   let total = 0;
//   const items = []
//   let resultCount = 0;

//   for (let idx = 0; idx < arr.length; idx++) {
//     total += arr[idx];
//     items.push(arr[idx])
//     const key = total - mean * (idx + 1);
//     console.log({ i:arr[idx],items:JSON.stringify(items),remainingTotal: total,map, key, mean,resultCount });
//     // if(key == arr[idx]) resultCount +=  (map[key]||0);
//     map[key] = resultCount + 1;
//   }
//   return resultCount;
// }

function solution(arr,mean){
  let count=0;
  for(let i=0;i<arr.length-1;i++){
    for(let j=1;j<arr.length;j++){
      // console.log(i,j,arr.length)
      // console.log(arr.slice(i,i+j),i,j)
      if(i>=j) continue;
      if(getMean(arr.slice(i,i+j)) == mean){
        // console.log()
        count ++;
      }
    }
  }
return count + (getMean(arr) == mean?1:0);
}

function getMean(arr){
  return arr.reduce((a,i)=>a+i,0) / arr.length
}

expect(solution([2, 1, 3], 2)).to.be(3);
expect(solution([0,4,3,-1], 2)).to.be(2);
expect(solution([2,1,4], 3)).to.be(0);




// function solution(testNames, results) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const groups = {};
//   let numGroupsPassed = 0;
//   testNames.forEach((taskName, idx) => {
//     // console.log(taskName, getGroupNum(taskName));
//     const { num, letter } = getGroupNum(taskName);
//     const ok = results[idx] === "OK" ? 1 : 0;
//     // console.log(groups);

//     groups[num] = groups[num] ? [...groups[num], ok] : [ok];
//   });

//   const groupLen = Object.keys(groups).length;
//   for (let i in groups) {
//     if (groups[i].every((c) => c === 1)) {
//       numGroupsPassed++;
//     }
//   }
//   console.table(groups);
//   return Math.floor((numGroupsPassed / groupLen) * 100);
// }
// function getGroupNum(str) {
//   let groupNumber = "";
//   let ext = "";

//   let nameEnded = false;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       groupNumber += str[i];
//       nameEnded = true;
//     } else {
//       if (nameEnded) {
//         ext += str[i];
//       }
//     }
//   }
//   return { num: groupNumber, letter: ext };
// }
// expect(
//   solution(
//     ["test1a", "test2", "test1b", "test1c", "test3"],
//     ["adf", "OK", "adf", "OK", "asldf"]
//   )
// ).to.be(33);
// expect(solution(['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a'],['Wrong answer', 'OK', 'OK', 'Time limit exceeded', 'OK'])).to.be(50)
// expect(solution(['surya1','surya2b','surya2','surya100'],['OK','OK','asldkf','OK'])).to.be(66)
// expect(solution(['surya1','surya2b','surya3','surya100'],['OK','OK','asldkf','OK'])).to.be(75)
// expect(solution(['surya1','surya2b','surya','surya100'],['OK','OK','OK','OK'])).to.be(75)


// function solution(arr) {
// 	if(arr.length <= 1) return arr.length;
// 	// const all = Math.max(...arr)
// 	let start=0;
// 	let end =0;
// 	const table = Array(arr.length+1).fill(0)
// 	table[arr[0]] = 1;
// 	for(let i=1;i<arr.length;i++){
// 			table[arr[i] - 1]++;
// 			if(arr[i] === arr[i-1]) continue;
// 			end = i;

// 			while(table[arr[start]-1] > 1){
// 				table[arr[start]-1]--;
// 				start++
// 			}
// 	}


// 	return end-start+1;
	
// }

// expect(solution([2,1,1,3,2,1,1,3])).to.be(3)