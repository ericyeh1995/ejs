function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
var sol = ancestry.map(function(person) {
  return {centry:Math.ceil(person.died / 100),
          age: person.died-person.born};
}).reduce(function(a, b){
  
  a[b.centry] = ( 
    typeof a[b.centry] != 'undefined' && 
    a[b.centry] instanceof Array 
  ) ? a[b.centry] : [];
  a[b.centry].push(b.age);
  
  return a;
  
}, {})

Object.keys(sol).forEach(function (key){
  console.log(key, ':', average(sol[key]))
});



// console.log(sol)

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
