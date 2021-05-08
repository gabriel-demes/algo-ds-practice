const bubbleSort = array => {
    n = array.length
    for(let pass = n-1; pass >= 0 ;pass-- ){
        for(let i = 0; i < pass; i++){
            if(array[i] > array[i+1]){
                temp = array[i + 1]
                array[i + 1] = array[i]
                array[i] = temp
            }
        }
    }
}

let array = [3, 7, 4, 9, 1, 2, 6, 5]
console.log(array)
bubbleSort(array)
console.log(array)