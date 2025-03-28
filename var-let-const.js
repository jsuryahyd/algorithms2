function example1() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}

example1(); //10

function example2() {
  if (true) {
    let y = 20;
  }
  console.log(y); 
}

try{

	example2(); //throws error
}catch(e){
	console.log(e)
}

function example3() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}

example3(); // 4,4,4,4,4

const myObject = {
  value: 5
};

myObject.value = 10;
console.log(myObject.value); 10

function example9() {
  console.log(e);
  let e = 4;
}

tryCatch(example9); // throws error

function example8() {
  console.log(d);
  var d = 3;
}

example8(); // undefined

// function example7() {
//   const c = 1;
//   c = 2;
//   console.log(c);
// }

// tryCatch(example7()); //throws error

// function example6() {
//   let b = 1;
//   let b = 2;
//   console.log(b);
// }

// example6(); //throws error

function example5() {
  var a = 1;
  var a = 2;
  console.log(a);
}

example5(); //2

function example4() {
  for (let j = 0; j < 5; j++) {
    setTimeout(() => {
      console.log(j);
    }, 100);
  }
}

example4(); // 0,1,2,3,4,


function tryCatch(func){
	try {
		func()
	}catch(e){
		console.log('error occurred')
	}
}