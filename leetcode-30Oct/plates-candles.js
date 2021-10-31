import { input } from "./plates-candles-input.js";
import { output } from "./plates-candles-outuput.js";

// var platesBetweenCandles = function (s, queries) {
//   // console.log(s);
// const memo={};
//   return queries.map((q) => {
//     const segment = s.substring(q[0], q[1] + 1);
// 		if(memo[segment]) return memo[segment]
//     //alternatively, remove open-ended stars

//     let started = false;
//     let nonConfirmedPlates = 0;
//     let confirmedPlates = 0;
//     for (let i = 0; i < segment.length; i++) {
//       // if(result[i] ==='|' && !started) started=true;
//       if (segment[i] === "|") {
//         //&& i!= result.length -1
//         confirmedPlates += nonConfirmedPlates;
//         nonConfirmedPlates = 0;
//         started = true;
//       }
//       if (segment[i] == "*" && started) nonConfirmedPlates++;
//     }
// 		memo[segment] = confirmedPlates
//     return confirmedPlates;
//   });
// };

// var platesBetweenCandles = function (s, queries) {
//   // console.log(s);
//   const memo = {};
//   return queries.map((q) => {
//     let segment = s.substring(q[0], q[1] + 1);

//     let started = false;
//     let nonConfirmedStrippedSeg = "";
//     let strippedSeg = "";
//     for (let i = 0; i < segment.length; i++) {
//       // if(result[i] ==='|' && !started) started=true;
//       if (segment[i] === "|") {
//         //&& i!= result.length -1
//         strippedSeg += nonConfirmedStrippedSeg + "|";
//         nonConfirmedStrippedSeg = "";
//         started = true;
//       }
//       if (segment[i] == "*" && started) nonConfirmedStrippedSeg += segment[i];
//     }

//     //alternatively, remove open-ended stars
//     if (memo[strippedSeg]) return memo[strippedSeg];
//     const res = strippedSeg.match(/\*/g)?.length || 0;
//     if (strippedSeg.length <= 500) memo[strippedSeg] = res;
//     // console.log(memo, memo[strippedSeg], segment);
//     return res;
//   });
// };

// var platesBetweenCandles = function (s, queries) {
//   // console.log(s);
//   const memo = {};
//   return queries.map((q) => {
//     let segment = s.substring(q[0], q[1] + 1);

//     let strippedSeg = "";
//     // console.log('before removing prefix',strippedSeg)
//     for(let i =0;i<segment.length;i++){
//       if(segment[i]=="|"){
//         // console.log(i)
//         // if(i!=0)
//          strippedSeg=segment.slice(i);
//         break;
//       }
//     }
//     // console.log('after removing prefix',strippedSeg)
//     for(let i=strippedSeg.length;i>=0;i--){
      
//       if(strippedSeg[i]=="|"){
//         // if(i!==strippedSeg.length-1)
//          strippedSeg=strippedSeg.slice(0,i+1);
//         break;
//       }
//     }
//     //alternatively, remove open-ended stars
//     if (memo[strippedSeg]) return memo[strippedSeg]; //"**|***|**|***".replace(/(^\**)|(\**$)/g,"")
//     const res = strippedSeg.match(/\*/g)?.length || 0;
//     // console.log(segment,"<->",strippedSeg,res)
//     if (strippedSeg.length <= 500) memo[strippedSeg] = res;
//     // console.log(memo, memo[strippedSeg], segment);
//     return res;
//   });
// };


// not mine!!!
var platesBetweenCandles = function(s, queries) {
  const len = s.length;
  const left = new Array(len);
  const right = new Array(len);
  const prefixSum = new Array(len);
  let mostLeft = -1;
  let mostRight = -1;
  let sum = 0;
  
  for (let i = 0; i < len; ++i) {
      if (s[i] === "*") ++sum;
      else mostLeft = i;
      
      left[i] = mostLeft;
      prefixSum[i] = sum;
  }
  
  for (let i = len - 1; i >= 0; --i) {
      if (s[i] === "|") mostRight = i;
      right[i] = mostRight;
  }
  
  const result = new Array(queries.length);
  
  for (let i = 0; i < queries.length; ++i) {
      result[i] = Math.max(prefixSum[left[queries[i][1]]] - prefixSum[right[queries[i][0]]], 0);
  }
  
  return result;
};

[
  {
    input: [
      "**|**|***|",
      [
        [2, 5],
        [5, 9],
      ],
    ],
    output: [2, 3],
  },
  {
    input: [
      "***|**|*****|**||**|*",
      [
        [1, 17],
        [4, 5],
        [14, 17],
        [5, 11],
        [15, 16],
      ],
    ],
    output: [9, 0, 0, 0, 0],
  },
  { input: input, output: output },
].forEach((a, i) => {
  console.time("idx:" + i);
  expect(platesBetweenCandles(...a.input)).to.eql(a.output);
  console.timeEnd("idx:" + i);
});
