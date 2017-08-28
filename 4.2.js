// reverse and reverse in place

var reverseArray = function(origArr) {
  var newArr = [];
  for (i in origArr)
    newArr.unshift(origArr[i]);
  return newArr
};

var reverseArrayInPlace = function(arr) {
  var temp;
  var N = arr.length;
 
  for (var i=0; i<Math.floor(N/2); i++) {
    temp = arr[i];
    arr[i] = arr[N-i-1];
    arr[N-i-1] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
