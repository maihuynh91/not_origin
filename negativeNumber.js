//Write a function that takes 
//in an array of numbers and returns an array of only the negative numbers

var negaFunc = function NegativeNumber(arr){
    var result = arr.filter(value => value >= 0);
    return result;
}
console.log(negaFunc([5,-9,10]));