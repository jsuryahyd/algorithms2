import { toArray, toNodeList }from "./utils";

// import expect from 'expect.js'
const expect = window.expect;


/**
 * 
 * @param {import('./utils').ListNode} head
 * @param {number} n
 * @return {import('./utils').ListNode}
 */
var _removeNthFromEnd = function (head, n) {
  let ahead = head;
  let nodeToDelete = head;
  let _head = head;
  let prevNode = null;
  let count = 0;
  while (ahead) {
    if (count >= n) {
      prevNode = nodeToDelete;
      nodeToDelete = nodeToDelete?.next || null;
    }
    count++;
    ahead = ahead.next;
  }
  console.log(prevNode, nodeToDelete);
  if (!prevNode) return _head.next;
  if (!nodeToDelete) return _head;
  prevNode.next = nodeToDelete?.next || null;
  return _head;
};


function removeNthFromEnd(head,count){

  let current = head;
  let target = null;
  let prevToTarget = null;
  while(current){
    count--
    current = current.next
    if(target){
      prevToTarget = target
      target = target.next
    }
    if(count === 0){
      target = head
    }
  }

  if(!prevToTarget) return target.next;
  prevToTarget.next = target.next;
  target.next = null;
  return head

}


// expect(toArray(removeNthFromEnd(toNodeList([1, 2, 3, 4, 5]), 2))).to.eql([
//   1, 2, 3, 5,
// ]);
// expect(toArray(removeNthFromEnd(toNodeList([1, 2]), 1))).to.eql([1]);
expect(toArray(removeNthFromEnd(toNodeList([1, 2]), 2))).to.eql([2]);
// expect(toArray(removeNthFromEnd(toNodeList([1]), 1))).to.eql([]);
