import { commands } from "./input.js";

// console.log(commands);

function getSumOfNumbers(commands) {
  const memory = {};
  let currentMask = null;
  for (let c of commands) {
    if (c.type == "mask") {
      currentMask = c.value;
    }
    if (c.type == "mem") {
      memory[c.address] = applyMask(
        c.value.toString(2).padStart(36, "0"),
        currentMask
      );
    }
  }

  console.log(memory);
  return Object.values(memory).reduce((acc, v) => acc + v, 0);
}

function applyMask(value, mask) {
  let newVal = "";
  for (let i=0;i<value.length;i++) {
    if(mask[i] === "X"){
			newVal +=  value[i]

		}else{
			newVal +=  mask[i];
		}
		// i> 25 &&console.log(newVal,mask[i],mask[i] != "X",value[i])
  }
  // console.log(value, mask, newVal,newVal.length);
	// console.log(newVal,parseInt(newVal, 2))
  return parseInt(newVal, 2);
}
// expect(
//   getSumOfNumbers([
//     { type: "mask", value: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X" },
//     { type: "mem", address: 8, value: 11 },
//     { type: "mem", address: 7, value: 101 },
//     { type: "mem", address: 8, value: 0 },
//   ])
// ).to.be(165);
console.log(getSumOfNumbers(commands));
