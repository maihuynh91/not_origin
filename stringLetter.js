//Write a function that takes in an array of letters 
//and returns a string all the letters seperated by a space.

var takeLetter = function returnStringOfLetter(arr){
    let result ="";
    arr.forEach(function(char){
        result += " " + char
    })

    return result;
}
console.log(takeLetter(["m", "a", 'i']));