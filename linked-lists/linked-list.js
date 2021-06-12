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
    get(index){
        if(index >= this.length || index < 0) return undefined
        let count = 0
        let node = this.head
        while(count < index){
            node = node.next
            count++
        }
        return node
    }
    set(index, val){
        let old = this.get(index)
        if(!old) return false
        old.val = val
        return true 
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()

        let myNode = this.get(index)
        let prev = this.get(index - 1)
        let next = myNode.next
        prev.next = next
        myNode.next = null
        this.length--
        return myNode
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next
        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        
        return this
        

    }
}

let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list)
console.log(list.reverse())

