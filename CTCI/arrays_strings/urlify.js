// write a mwthod to replace all spaces in a string with '%20' you may assume that the string has sufficent space at the end to hold the additional character and that you are given the true length of the string. 

const urlify = (string, len) => {
    let spaces = []

    for(let i = 0; i < len; i++){
        if(string[i] === " "){
            spaces.push(i)
        }
    }
    let newString = ""
    let start = 0
    for(let i = 0; i < spaces.length; i++){
        newString = newString + string.slice(start, (spaces[i])) + '%20'
        start = spaces[i] +1
    }
    newString += string.slice(spaces[[spaces.length - 1 ]]+1)
    return newString
}

console.log(urlify("How are you today", 17))

console.log(urlify("     hi",7))