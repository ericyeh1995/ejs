// Your code here.
var deepEqual = function(a, b)
{
  if (typeof a != "object")
  {
    return a===b
  }
  else
  {
    for (var ele in a)
    {
      // TODO: check if have same key
      return deepEqual(a[ele], b[ele])
    }
  }
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "asdf"}, object: 2}));
// → false
console.log(deepEqual(obj, {k: 1, object: 2}));
// → false
