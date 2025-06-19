//https://neetcode.io/problems/minimum-stack?list=neetcode150


// XX wrong XX
class MinStack {
    constructor() {
        this.stack = []
        
        this.sortedIdx = [] //idxs sorted in descending order of value
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(!this.sortedIdx.length) this.sortedIdx.push(0)
        else {
				console.log("before",this.stack, this.sortedIdx)
			
            let curr = 0
            while(curr < this.sortedIdx.length-1){
                console.log(curr, this.sortedIdx.length)
                if(this.stack[this.sortedIdx[curr]] > val){
                    curr++
                }else{
                    break;
                }
            }
    this.sortedIdx.splice(curr, 0 , this.stack.length-1)
				console.log("after",this.stack, this.sortedIdx)
		
        }
    }

    /**
     * @return {void}
     * 
     */
    pop() {
			console.log("before", this.stack, this.sortedIdx)
        const idx = this.stack.length-1
        const val = this.stack.pop()
        // this.sortedIdx.splice(idx, 1)
				this.sortedIdx = this.sortedIdx.filter(s=>s!=idx)
				console.log(this.stack, this.sortedIdx)
        return val
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1] //edgecase: undefined
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.sortedIdx.length-1] //edge case: undefined
    }
}


const minStack = new MinStack()
// ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"].map(fn=>minStack[fn]())
minStack.push(1)
minStack.push(2)
minStack.push(0)
console.log(minStack.getMin())
console.log(minStack.pop())
console.log(minStack.top())
console.log(minStack.getMin())