//linked list consists of nodes. references the next node
//head is beinging, tail is end
//one node points to the next, which points to thee next
// no indicies just head which tells you the beginning and a tail
//random access not allowed, have to traverse from the beginning

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = null
        this.head = null
        this.tail = null
    }
    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.length += 1;
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }else{
            let node = this.head
            while(node.next){
                this.tail = node
                node = node.next
            }
            this.tail.next = null
            this.length -= 1
            if (this.length === 0){
                this.head = null
                this.tail = null
            }
            return node.val
        }
    } 
    
    shift(){
        if(!this.head) return undefined
        let val = this.head
        this.head = this.head.next
        this.length -= 1
        return val
    }

    unshift(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }
}

let list = new SinglyLinkedList()
console.log(list)
console.log(list.push(1))
console.log(list.push(2))
console.log(list.push(3))
console.log(list.pop())
console.log(list)