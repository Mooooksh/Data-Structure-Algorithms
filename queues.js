class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// class Stack {
//     constructor(){
//         this.top = null
//         this.bottom = null
//         this.length = 0
//     }

//     peek(){
//         return this.top
//     }
//     push(value){
//         const newNode= new Node(value)
//         if(this.length === 0 ){
//             this.top = newNode;
//             this.bottom = newNode;
//         } else {
//             const HoldingPointer = this.top;
//             this.top = newNode;
//             this.top.next = HoldingPointer
//         }
//         this.length++
//         return this;
//     }
//     pop(){
//         if(this.top === this.bottom) this.bottom = null;
//         this.top = this.top.next;
//         this.length--;
//         return this;
//     }
// }

// const NewStack = new Stack()
// NewStack.push('google')
// NewStack.push('udemy')
// NewStack.push('udacity')
// NewStack.pop()
// NewStack.pop()

// console.log(NewStack.peek())


class Queue {
    constructor(){
        this.first = null;
        this.second = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode
            this.second = newNode
        }else{
            this.second.next = newNode;
            this.second = newNode
        }
        this.length++
        return this
    }
    dequeue(){
        if(!this.first) return null
        if(this.first === this.second) this.second = null;
        this.first = this.first.next;
        this.length--
        return this;
    }
}

const NewStack = new Queue()
NewStack.enqueue('Ahmed')
NewStack.enqueue('Ziad')
NewStack.enqueue('Bahaa')
NewStack.enqueue('menna')
console.log(NewStack.dequeue())
console.log(NewStack.dequeue())
