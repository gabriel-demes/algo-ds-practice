const selection_sort = (array) => {
    n = array.length 

    for(let i = 0; i < n -1; i++){
        let position = i
        for(let j = i + 1; j < n; j++){
            if(array[j] < array[position]){
                position = j
            }
            let temp = array[i]
            array[i] = array[position]
            array[position] = temp
        }
    }
}

let array = [3,5,8,9,2]

console.log(`Original Array: ${array}`)
selection_sort(array)
console.log(`Sorted Array: ${array}`)
