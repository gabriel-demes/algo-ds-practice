class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        const node = new Node(val)
        if(this.length === 0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined
        let node = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            node.prev = null
        }
        this.length--
        return node
    }
    shift(){
        if(this.length === 0) return undefined
        let node = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = node.next
            this.head.prev = null
            node.next = null
        }
        this.length--
        return node
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length ===0){
            this.head = newNode
            this.tail = newNodw
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
}