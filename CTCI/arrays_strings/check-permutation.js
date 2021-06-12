// given two string write a method to decide of one is a permutation of the other

const checkPermuation = (string1, string2) => {
    if(string1.length !== string2.length) return false
    let obj = {}
    for(let i = 0; i < string1.length; i++){
        if(obj[string1[i]]){
            obj[string1[i]] += 1
        }else{
            obj[string1[i]] = 1
        }
    }
    for(let i = 0; i < string2.length; i++){
        if(!obj[string2[i]]){
            return false
        }else{
            obj[string2[i]] -= 1
            if(obj[string2[i]]< 0){
                return false
            }
        }
    }
    return true
}

console.log(checkPermuation('abcde', 'encrf'))