function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    console.log(count);
  }
  return innerFunction;
}

const counter = outerFunction();
counter();//1
counter();//2
//==============
const myObj = {
  value: 10,
  getValue: function() {
    console.log(this.value);
  }
};

myObj.getValue(); // Output 1: 10

const getValueFunc = myObj.getValue;
getValueFunc(); // Output 2 // undefined (non-strict mode) | throws error if "use strict" or type: "module" in package.json, as "this" is undefined.

var getValueFunc2 = myObj.getValue;
getValueFunc2(); // Output 2 // undefined (non-strict mode) | throws error if "use strict" or type: "module" in package.json, as "this" is undefined.
//==========


const myObj2 = {
  value: 20,
  getValueArrow: () => {
    console.log(this.value);
  }
};

myObj2.getValueArrow(); // undefined (non-strict mode) | throws error if "use strict" or type: "module" in package.json

//========== 
console.log('Start');

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 0);
});

promise.then((value) => {
  console.log(value);
});

console.log('End'); //start, End, Promise resolved
//=========

async function fetchData() {
  console.log('Fetching data...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Data fetched!');
}

fetchData();
console.log('After fetchData'); // after fetchData; fetching data..., data fetched

for(let i = 0; i <= 5; i++) {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(i); // 0, 1, 2, 3, 4
      resolve(i);
    }, i * 1000);
  })
}