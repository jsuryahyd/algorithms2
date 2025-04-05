/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function NodeList(arr) {
  let head = new ListNode(arr.shift());
  head.next = null;
	let curr = head
  while (arr.length) {
    curr.next = new ListNode(arr.shift());
    curr = curr.next
  }
	return head;
}

function toArray(head){
	const result = []
	let curr = head
	while(curr){
		result.push(curr.val)
		curr = curr.next
	}
	return result
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	console.log(toArray(head))
	let slow = head
	let fast = head
	//for reversing
	let prev = null
	let curr = head
	let mid = null
	if(!head.next) return true
	let startComparing = false
	while(slow){
		if(startComparing){
			if(curr.val !== slow.val) return false
			curr = curr.next
			slow = slow.next
		}else{

			//find mid,
			if(!fast.next){//odd count
				//if odd total count, reverseHead=before mid; proceed slow, start comparing from next iteration.
			slow = slow.next;//going past mid.
			startComparing = true
		}else if(!fast.next.next){//even count
			//if even total count, reverseHead =mid, and start comparing
			curr = slow
			slow = slow.next //going past mid.
			curr.next = prev
			prev = curr
			startComparing = true
		}else{
			fast = fast.next.next;
			curr = slow
			slow = slow.next //going towards mid.
			curr.next = prev
			prev = curr
		}
	}

		
	}

	return true
};


[
  [0],
  [1, 6, 6, 1],//true
  [1, 1, 6, 1],//false
  [1, 6, 1, 1],//false
  [6, 1, 1, 1],//false
  [1, 1, 1, 6],//false
  [1, 6, 1, 6],//false
	[1,6,3,3,6,1],// true
  [1, 6, 6, 6, 1],//true
	[1,1,1,1,1], //true
].map((input) => console.log(isPalindrome(NodeList(input))));
