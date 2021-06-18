//BST used for data that can be compared
//something that is sortable
//every parent node has two chuldren
//every node to the left of parent is less than parent-- every node to the right is greater than parent


class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(val){
        this.root = null
    }

    insert(val){
        let node = new Node(val)
        if(!this.root){
            this.root = node
            return this
        }
        let cur = this.root
        while(true){
            if(val === cur.val) return undefined
            if(val < cur.val){
                if(!cur.left){
                    cur.left = node
                    return this
                }
                cur = cur.left
            }else{
                if(!cur.right){
                    cur.right = node
                    return this
                }
                cur = cur.right
            }
        }
        return this


    }
}

const tree = new BST()
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(2))
console.log(tree.insert(6))
console.log(tree.insert(13))
console.log(tree.insert(13))





