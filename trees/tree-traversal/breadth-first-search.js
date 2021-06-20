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
tree.insert(5)
tree.insert(2)
tree.insert(6)
tree.insert(13)



const BFS = (tree) => {
    let data = []
    let queue = []
    let node = tree.root
    queue.push(node)

    while(queue.length){
        node = queue.shift()
        data.push(node)

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
    return data
}

console.log(BFS(tree))