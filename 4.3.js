// Your code here.

var arrayToList = function(arr) {
  var list = {}
  for (var i=arr.length-1; i>=0; i--)
  {
    if (i==arr.length-1)
      list = prepend(arr[i], null)
    else
      list = prepend(arr[i], list)
  }
  return list
};

var prepend = function(ele, list) {
  return {value: ele, rest: list}
};

var listToArray = function(list) {
  var arr = [];
  var i = 0;

  while (nth(list, i)!=null)
  {
    arr.push(nth(list, i))
    i++;
  }
  return arr
};

var nth = function(list, num) {
  if (list == null)
    return null
  else if (num == 0)
    return list.value
  else
    return nth(list.rest, num-1)
};


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
