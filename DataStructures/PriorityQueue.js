//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (val) {
    if (!val.length) throw "invalid item";
    this.collection.push(val);
  };
  this.frontIdx = function () {
    let itemIdx = 0;
    for (let [idx, i] of this.collection.entries()) {
      if (idx == 0) continue;
      if (i[1] < this.collection[idx - 1][1]) {
        itemIdx = idx;
      }
    }
    return itemIdx;
  };
  this.dequeue = function () {
    const itemIdx = this.frontIdx();
    console.log(itemIdx);
    const d = this.collection.splice(itemIdx, 1);
    return d[0][0];
  };
  this.front = function () {
    return this.collection[this.frontIdx()][0];
  };
  this.size = function () {
    return this.collection.length;
  };
  this.isEmpty = function () {
    return !this.collection.length;
  };
  // Only change code above this line
}

const pq = new PriorityQueue();
pq.enqueue(["kitten", 2]);
pq.enqueue(["dog", 2]);
pq.enqueue(["rabbit", 2]);
console.log(pq.dequeue())
console.log(pq.printCollection())