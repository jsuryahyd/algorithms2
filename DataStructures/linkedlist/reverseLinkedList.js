import { toArray, toNodeList }from "./utils.js";




function reverseList(head) {
	// let prev = null;
	// let current = head;
	// let next = null;

	// while (current) {
	// 	next = current.next; // Store the next node
	// 	current.next = prev; // Reverse the link
	// 	prev = current; // Move prev to current
	// 	current = next; // Move to the next node
	// }

	// return prev; // New head of the reversed list

	let prev = null;
	let curr = head;
	let next = null;

		while(curr){

			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		return prev;
}

console.log(toArray(reverseList(toNodeList([1, 4, 3, 2, 5, 2])))); // [2, 5, 2, 3, 4, 1]
console.log(toArray(reverseList(toNodeList([2, 1])))); // [1, 2]