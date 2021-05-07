const factorial = (n) => {
    if(n===0){
        return 1
    }else{
        return factorial(n-1) * n
    }
}

let num = window.prompt("Enter a number:")
let n = parseInt(num)
console.log(factorial(n))