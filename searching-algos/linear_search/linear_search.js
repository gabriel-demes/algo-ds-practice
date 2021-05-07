const linear_search = (array, value) => {

    for(let i = 0; i < array.length; i++){
        if(value === array[i]){
            return i
        }
    }
    return(-1)
}

const array = [1,2,3,4,5,6,7,8,9]
num = window.prompt("Enter a number to be found: ")
n = parseInt(num)
console.log(linear_search(array, n))