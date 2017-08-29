function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
console.log(
  average(
    ancestry.map(function(person) {
      if (byName[person.mother] != undefined)
        return person.born - byName[person.mother].born
    }).filter(function(age) {
      return age != undefined
    })
  )
)

// → 31.2
