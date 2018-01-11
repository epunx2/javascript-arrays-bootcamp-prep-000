var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var addElementToBeginningOfArray = function (array, n){
  var array1 = array;
  var array2 = [n, ...array1];
  return array2;
}

var destructivelyAddElementToBeginningOfArray = function (array, n){
  
  return array1.unshift(n);
}