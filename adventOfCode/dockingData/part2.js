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
      const allVariations = applyMask(
        Number(c.address).toString(2).padStart(36, "0"),
        currentMask
      );
      allVariations.forEach((v) => {
        memory[v] = c.value;
      });
    }
  }

  // console.log(memory);
  return Object.values(memory).reduce((acc, v) => acc + v, 0);
}

function applyMask(value, mask) {
  let floatingAddress = "";
  for (let i = 0; i < value.length; i++) {
    if (mask[i] == '0') floatingAddress += value[i];
    else floatingAddress += mask[i];
  }
  const variations = getAddresses(floatingAddress);
  return variations.map((x) => parseInt(x, 2));
}

function getAddresses(addr) {
  if (!addr.length) return [""];

  const firstChar = addr[0];
  const restAddr = addr.slice(1);

  return firstChar === "X"
    ? [
        ...getAddresses(restAddr).map((v) => 1 + v),
        ...getAddresses(restAddr).map((v) => 0 + v),
      ]
    : getAddresses(restAddr).map((a) => firstChar + a);
}
// console.log(getAddresses('X01X010X'))
expect(
  getSumOfNumbers([
    { type: "mask", value: "000000000000000000000000000000X1001X" },
    { type: "mem", address: 42, value: 100 },
    { type: "mask", value: "00000000000000000000000000000000X0XX" },
    { type: "mem", address: 26, value: 1 },
  ])
).to.be(208);

console.log(getSumOfNumbers(commands));
