// Sum and range

var range = function(start, end, step=1) {
  var list = [];
  for (; (step>0 ? start<=end : start>=end); start+=step)
    list.push(start);
  return list;
};

var sum = function(list) {
  var sum = 0
  for (var i in list)
    sum += list[i]
  return sum
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
