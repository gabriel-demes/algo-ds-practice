// const binary_search = (array, value) => {
//     let left = array[0]
//     let right = array.length-1

//     while(left <= right){
//         middle = Math.floor((left+right)/2)
//         if(value === array[middle]){
//             return middle
//         }else if(value < array[middle]){
//             right = middle - 1
//         }else if(value > array[middle]){
//             left = middle + 1
//         }
//     }
//     return -1
// }

const binary_search = (array, value, left, right) => {
    let middle = Math.floor((left + right)/2)
    if(left > right){
        return -1
    }else{
        if(value === array[middle]){
            return middle
        }else if(value > array[middle]){
            return binary_search(array, value, middle +1, right)
        }else if (value < array[middle]){
            return binary_search(array, value, left, middle - 1)
        }
    }
}

const array= [1,2,3,4,5,6,7,8,9]
let num = window.prompt("Enter a value to be found")
let n = parseInt(num)
console.log(binary_search(array, n, array[0], array.length -1))