// const findMostRepeated = array => {
    
//     let obj = {}
//     let num 
//     let count 
//     for(let i = 0; i < array.length; i++){

//         if (array[i] === num) {
//             count++
//         }else{
//             count = 1
//             num = array[i]
//         }

//         if(!obj[array[i]]){
//             obj[array[i]] = 1
//         }else{
//              if (count > obj[array[i]]){
//                  obj[array[i]] = count
//              }
//          }
//     }

//     let max = {
//         key : 0,
//         value : 0
//     }
    
//     Object.keys(obj).forEach(key => {
//         let value = obj[key]
//         if( value > max.value){
//             max.value = value
//             max.key = key
//         }
//     })
//     return max.key
// }

// let x = findMostRepeated([1,1,2,3,4,4,4,5,5,5,5,6,6,6])

// console.log(x)


// given an array of integers, find the most repeated consecutive integer 

//[3,3,1,1,6,6,6,3,3,3,4,1,1,1,1,1,4,4,4,5,4,4,4,4,6,4,4,4]
// i
//     j
// multiple pointer 

// 

// when i = j increment j by 1 ; 
// const  findMostRepeated = array => {

//     let obj = {}
//     let num 
//     let count 
//     let max = {
//         key: null,
//         value: 0
//     }
//     for(let i = 0; i < array.length; i++){
//         if(array[i]=== num){
//             count++
//         }else{
//             count = 1
//             num = array[i]
//         }

//         if(!obj[array[i]]){
//             obj[array[i]] = 1
//         }else{
//             if (count > obj[array[i]]){
//                 obj[array[i]] = count
                
//                 if(count > max.value){
//                     max.value = count;
//                     max.key = array[i]
//                 }
//             }
//         }
//     }

    

//     // Object.keys(obj).forEach(key => {
//     //     let value = obj[key]
//     //     if(value > max.value){
//     //         max.key = key
//     //         max.value = value
//     //     }
//     // })

//     return max.key
// }


// let x = findMostRepeated([1,1,2,3,4,4,4,5,5,5,5,6,6,6])

// console.log(x)

