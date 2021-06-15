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
        if(this.length === 0){
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
    get(index){
        if(index < 0 || index >= this.length) return null
        if(index <= this.length/2){
            let current = this.head
            let counter = 0

            while(counter !== index){
                current = current.next
                counter++
            }
            return current
        }else{
            let current = this.tail
            let counter = this.length - 1
            while(counter !== index){
                current = current.prev
                counter--
            }
            return current
        }
    }
    set(index, val){
        const node = this.get(index)
        if(!node) return false
        node.val = val
        return true
    }
    insert(index, val){
        if(index === 0)return this.unshift(val)
        if(index === this.length) return this.push(val)
        const oldNode = this.get(index)
        if(oldNode !== null){
            const newNode = new Node(val)
            newNode.prev = oldNode.prev
            oldNode.prev.next = newNode
            oldNode.prev = newNode
            newNode.next = oldNode
            return true
        }
        return false
    }
}

let list = new DoublyLinkedList()
list.push("harry")
list.push("sam")
list.push("bob")
list.push("jack")
