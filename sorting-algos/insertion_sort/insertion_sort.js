const insertionSort = (array) =>{
    n = array.length

    for(let i = 1; i < n; i++){
        let position = i
        while(position > 0 && array[position] < array[position - 1]){
            temp = array[position - 1]
            array[position - 1] = array[position]
            array[position] = temp
            position -= 1 //don't forget this!
        } 
    }
}

let array = [3, 5, 2, 5, 6, 7, 1, 8]
console.log(array)
insertionSort(array)
console.log(array)