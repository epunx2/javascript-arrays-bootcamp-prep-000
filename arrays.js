var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var addElementToBeginningOfArray = function (array, n){
  var array1 = array;
  var array2 = [n, ...array1];
  return array2;
}

var destructivelyAddElementToBeginningOfArray = function (array, n){
  array.unshift(n)
  return array;
}

var addElementToEndOfArray = function(array, n){
  var array1 = array;
  var array2 = [...array1, n];
  return array2;
}
var destructivelyAddElementToEndOfArray = function (array, n){
  array.push(n);
  return array;
}