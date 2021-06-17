class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val){
        let node = new Node(val)
        if(this.size === 0){
            this.first = node
            this.last = node
        }else{
            node.next = this.first
            this.first = node
        }
        return ++this.size
    }
    pop(){
        if(this.size === 0)return null
        if(this.size === 1){
            let node = this.first
            this.first = null
            this.last = null
            this.size--
            return node
        }
        let node = this.first
        this.first = this.first.next
        node.next = null
        this.size--
        return node.val
    }
}