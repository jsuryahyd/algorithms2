import { toArray, toNodeList } from "./utils";

//https://leetcode.com/problems/partition-list/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (head === null || head.next === null) return head;
  let current = head;
  let prev = null;
  let prevToGreaterNode = null;
  let hasEncounteredTarget = false;
  while (current) {
    if ((current.val >= x || current.next?.val >= x) && !prevToGreaterNode) {
      prevToGreaterNode = current;

      // prev = current
    }
    if (current.val >= x) {
      hasEncounteredTarget = true;
    }

    if (!prevToGreaterNode || !hasEncounteredTarget) {
      prev = current;
      current = current.next;
      continue; //no need to do anything
    }
    if (current.val < x) {
      if (prevToGreaterNode.val >= x) {
        //prevToGreaterNode should always be < x in all loops other than the first one atleast.this is the first loop for some inputs
        prev.next = current.next;
        current.next = head;
        head = current;
        prevToGreaterNode = current;
      } else {
        const nodeToMove = current;
        prev.next = nodeToMove.next;
        nodeToMove.next = prevToGreaterNode.next;
        prevToGreaterNode.next = nodeToMove;
        prevToGreaterNode = nodeToMove;
      
      }
    }

    prev = current;
    current = current.next;
  }
  return head;
};

// console.log(toArray(partition(toNodeList([1, 4, 3, 2, 5, 2]), 3)));
// console.log(toArray(partition(toNodeList([2, 1]), 2)));
// console.log(toArray(partition(toNodeList([4,3,2,5,2]), 3))); //[2,2,4,3,5]
// console.log(toArray(partition(toNodeList([1,4,3,0,5,2]), 2))); //[1,0,4,3,5,2]


//todo: incomplete
// function partition2(head,x){

// 	let current = head;
// 	let hasEncountedHigherNum = false
// 	let prev = null
// 	let newlistHead = null;
// 	let newlistLast = null

// 	while(current){
		
//     if (current.val >= x) {
//       hasEncountedHigherNum = true;
//     }
		
// 		if(!hasEncountedHigherNum){
// 			prev = current;
// 			current = current.next;
// 			continue;
// 		}
// 		if(current.val < x){
// 			if(!newlistHead){
// 				newlistHead = current
// 			}else{
// 				prev.next = current.next
// 				// current.next = null;
// 				newlistHead.next = current;
// 				newlistLast = current
// 				newlistLast.next = null;
// 			}
// 		}
// 		prev = current;
// 		current = current.next;
// 	}
		
// 	if(head.val >= x){
// 			newlistLast.next = head
			
// 	}else{
// 		newlistLast.next = head;
// 		head = newlistHead
// 	}
// 	return head
// }

// console.log(toArray(partition2(toNodeList([1, 4, 3, 2, 5, 2]), 3)));
// console.log(toArray(partition2(toNodeList([2, 1]), 2)));
// console.log(toArray(partition2(toNodeList([4,3,2,5,2]), 3))); //[2,2,4,3,5]
// console.log(toArray(partition2(toNodeList([1,4,3,0,5,2]), 2))); //[1,0,4,3,5,2]