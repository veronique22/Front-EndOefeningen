/**
 * Objecten
 * 
 * 
 */


// maak een nieuw object aan
const obj = {
  foo: 123,
  bar: 456,
}


// zoek een waarde op in een object
obj.foo // 123


// verander waardes in een object
obj.bar = 789


// voeg waardes toe aan een object
obj.baz = 101112


// verwijder waardes uit een object
delete obj.baz


// refereer naar waardes waarvan je de naam niet weet op voorhand
const key = "foo"
obj[key] // 123


// loop over de inhoud van een object
const keys = Object.keys(obj)
for (let i = 0; i < keys.length; i = i + 1) {
  const key = keys[i]
  console.log("De waarde van", key, "is", obj[key])
}


// functies in een object noemen we methodes
obj.quux = function (n) {
  return n * 2
}
obj.quux(5)


// een methode kan naar het object waarin ie zit verwijzen
obj.goop = function (n) {
  return n * this.foo
}
obj.goop(321)


// prototypes (gebruiken we amper)
const prot = {
  wabl: 987,
  sprot: function (n) {
    return this.wabl + (this.foo * n)
  }
}
obj.__proto__ = prot
console.log(obj.sprot(2))