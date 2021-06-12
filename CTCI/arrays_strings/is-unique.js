//implement and algortihm to determine if a string has allunique character. What if you cannot use additional data structures?

const isUnique = (string) => {
    let obj = {}
    for(let i = 0; i < string.length; i++){
        if(!!obj[string[i]]) return false
        obj[string[i]] = 1
    }
    return true
}

