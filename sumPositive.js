//Write a function that takes an array of numbers and 
//returns the sum of all the positive numbers in the array.

var posNum = function calSumOfPositiveNumber(arr){
    var posNumber = arr.filter(num => num >= 0);
    var sumNumber = posNumber.reduce((a, b) => a + b);
    return sumNumber;
}

console.log(posNum([2,-9, -100, 0, 1]));