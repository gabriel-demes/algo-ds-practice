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

    find(val){
        if(!this.root) return false
        let cur = this.root
        let found = false 

        while(!found && cur){
            if(val < cur.val){
                cur = cur.left;
            }else if(val > cur.val){
                cur = cur.right
            }else{
                found = true
            }
        }
        return found ? cur : undefined
    }

}

const tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(8)
tree.insert(3)
tree.insert(20)


const dfsPreOrder = (tree) => {
    let arr = []
    let cur = tree.root
    const traverse = (node) => {
        if(node.left){
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right)
        }
        arr.push(node.val)
    }
    traverse(cur)

    return arr
}

console.log(dfsPreOrder(tree))