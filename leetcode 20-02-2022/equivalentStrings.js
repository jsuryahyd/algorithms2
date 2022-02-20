var countEven = function (num) {
  let evenDigitSumNums = 0;

  while (num > 1) {
    const sum = (num + "").split("").reduce((acc, digit) => acc + +digit, 0); //string + number= string
    if (sum % 2 === 0) evenDigitSumNums += 1;
    num--;
  }
  return evenDigitSumNums;
};

// console.time('wtf?')
// console.log(countEven(30));
// console.timeEnd('wtf?')

var mergeNodes = function (head) {
  // console.log(head);
  console.log(head.val, head.next);
  const list = [];
  let sum = 0;
  let idx = 0;
  while (head.next !== null) {
    const i = head.val;
    sum += i;
    if (i === 0) {
      console.log("next head", head.val, idx);
      idx != 0 && list.push(sum);
      // console.log(list,"sum pushed",sum,)

      sum = 0;
    }
    idx++;
    head = head.next;
  }
  list.push(sum); //last series
  console.log(list);
  // return new ListNode(list[0], new ListNode(list[1]));
  return convertToLL(list);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let convertToLL = (arr) =>
  arr.reverse().reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null);

// console.log(head(arr));

// console.time("mergeNodes");
// console.log(mergeNodes(convertToLL([0, 3, 1, 0, 4, 5, 2, 0])));
// // console.log(mergeNodes(convertToLL([0, 1, 0, 3, 0, 2, 2, 0])));
// console.timeEnd("mergeNodes");

var repeatLimitedString = function (s, repeatLimit) {
  let reverseAlphabets = "abcdefghijklmnopqrstuvwxyz".split("").reverse();
  const stringAnalysis = s.split("").reduce((acc, s) => {
    acc[s] = acc[s] ? acc[s] + 1 : 1;
    return acc;
  }, {});
  // console.log(stringAnalysis)
  let res = "";
  let iterations = 0;
  let lastLetter = "";
  while (Object.keys(stringAnalysis).length) {
    // console.log(stringAnalysis);
    reverseAlphabets.forEach((a) => {
      // console.log(a,stringAnalysis[a])
      if (stringAnalysis[a] && lastLetter !== a) {
        let _repeatLimit = Math.min(repeatLimit, stringAnalysis[a]);
        if (Object.keys(stringAnalysis)[0] !== a && res.length) {
          //donot have to repeat every letter 3 times, just put 2nd best once (to break repeatlimit)and start repeating largest alphabet again
          _repeatLimit = 1;
        }
        res += repeatString(a, _repeatLimit);
        lastLetter = a;
        // console.log(stringAnalysis[a],'mf')

        if (stringAnalysis[a] > 0) {
          stringAnalysis[a] = stringAnalysis[a] - _repeatLimit;
        }
        if (stringAnalysis[a] === 0) delete stringAnalysis[a];
      }
    });
    iterations++;
    // if(iterations >= 10) break;
  }
  return res || "no string";
};

function repeatString(string, count) {
  let s = "";
  while (count > 0) {
    s += string;
    count--;
  }
  return s;
}

// var repeatLimitedString = function (s, repeatLimit) {
//   let reverseAlphabets = "abcdefghijklmnopqrstuvwxyz".split("").reverse();
//   const stringAnalysis = s.split("").reduce((acc, s) => {
//     acc[s] = acc[s] ? acc[s] + 1 : 1;
//     return acc;
//   }, {});
//   // console.log(stringAnalysis)
//   let res = "";
//   let iterations = 0
//   let lastLetter = ""
//   while (Object.keys(stringAnalysis).length) {

//   }
//   return res || "no string";
// };

// console.time("repeatLimitedString");
// console.log(repeatLimitedString("cczazcc", 3));
// console.timeEnd("repeatLimitedString");

var coutPairs = function (nums, k) {
  let pairs = 0;
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (cache[nums[i] + ":" + nums[j]] || cache[nums[j] + ":" + nums[i]]) continue;
      if ((nums[i] * nums[j]) % k == 0) {
        pairs++;
      }else{
        cache[nums[i]+":"+nums[j]] = 1
      }
    }
  }
  return pairs;
};

// var coutPairs = function (nums, k) {
//   let pairs = 0;
//   let cache = {};
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (cache[nums[i] + ":" + nums[j]] || cache[nums[j] + ":" + nums[i]]) continue;
//       if ((nums[i] * nums[j]) % k != 0) {
//         pairs++;
//       }else{
//         cache[nums[i]+":"+nums[j]] = 1
//       }
//     }
//   }
//   return nums.length * (nums.length-1) - pairs;
// };
console.time("coutPairs");
console.log(coutPairs([1, 2, 3, 4, 5], 2));
console.log(coutPairs([1, 2, 3, 4], 5));
console.timeEnd("coutPairs");
