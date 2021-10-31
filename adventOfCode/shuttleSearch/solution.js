// function shuttleSearch(timeStamp, arr) {
//   let i = timeStamp;
//   let bus = 0;
//   whileLoop: while (true) {
//     for (let b of arr.sort((x, y) => x - y)) {
//       console.log(i % b);
//       if (i % b == 0) {
//         bus = b;
//         break whileLoop;
//         // break;
//       }
//     }
//     i++;
//   }

//   return (i - timeStamp) * bus;
// }
// expect(shuttleSearch(1013728, [23, 41, 733, 13, 17, 19, 29, 449, 37])).to.be(
//   8063
// );

// function getMagicTimeStamp(arr) {
//   let num = 0;
//   let arrObj = {};
//   arr.forEach((a, i) => {
//     if (a != "x") arrObj[i] = a;
//   });
//   console.log(arrObj);
//   const arrObjLength = Object.keys(arrObj).length;
// 	const initialValue =arr[arr.length-1] // Object.values(arrObj).reduce((acc,i)=>acc * i,1) //arr[arr.length-1]
//   const step = 1;// isNaN(arr[0])?1:arr[0];
// 	for (let timestamp = initialValue; true; timestamp+=step) {
//     let matchedBuses = 0;
//     for (let b in arrObj) {
//       // console.log(
//       //   timestamp +   Number(b),
//       //   "%",
//       //   arrObj[b] ,
//       //   (timestamp + Number(b)) % arrObj[b] ==0 ? "✔" : ""
//       // );
//       if ((timestamp + Number(b)) % arrObj[b] == 0) matchedBuses++;
//     }
//     // (i === 782 || i === 3417) &&
//     // console.log(
//     //   timestamp,
//     //   matchedBuses,
//     //   "==",
//     //   arrObjLength,
//     //   matchedBuses == arrObjLength ? "👍" : "🤷‍♀️"
//     // );
//     if (matchedBuses == arrObjLength) {
//       num = timestamp;
//       break;
//     }
//   }
//   return num;
// }

function getMagicTimeStamp(buses) {
  // let time = 0;
	// let stepSize = buses[0] =="x"?1 : buses[0]
	// for(let i =1;i<buses.length;i++){
	// 	const bus = buses[i];
	// 	while((time+i)%bus !== 0){
	// 		time += stepSize
	// 	}
	// 	stepSize*=bus
	// }
	// console.log(time)
  // return time;
	buses = buses.map(b=>b==='x'?1:Number(b))
	let time = 0;
  let stepSize = buses[0];

  for (let i = 1; i < buses.length; i += 1) {
    const bus = buses[i];
    while ((time + i) % bus !== 0) {
			console.log(time,stepSize,"🤷‍♀️")
			time += stepSize;
    }

		console.log(time,stepSize,"✔")
    stepSize *= bus;
  }
  return time;
}
solution()
// console.log(shuttleSearch([17, "x", 13, 19]));
window.runTests = () => {
  expect(getMagicTimeStamp([17, "x", 13, 19])).to.be(3417);
  expect(getMagicTimeStamp([67, 7, 59, 61])).to.be(754018);
  console.time('1202161486');
  expect(getMagicTimeStamp([1789, 37, 47, 1889])).to.be(1202161486);
  console.timeEnd('1202161486');
  // solution()
};
function solution() {
  console.time();
  console.log(
    getMagicTimeStamp([
      23,
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      41,
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      733,
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      13,
      17,
      "x",
      "x",
      "x",
      "x",
      19,
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      29,
      "x",
      449,
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      "x",
      37,
    ])
  );
  console.timeEnd();
}
