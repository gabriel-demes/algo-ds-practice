const sumOfN = (n) => {
    if(n === 0){
        return 0;
    }else {
        return (sumOfN(n-1) +n)
    }
}

let num = window.prompt("Enter number:")
let n = parseInt(num)
console.log(sumOfN(n))