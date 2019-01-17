/**
 * JSON
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 */


const data = {
  foo: 123,
  bar: "baz",
  fruit: ["apple", "lemon", "banana"]
}


// we kunnen data omzetten naar een string: 
const repr = JSON.stringify(data)
typeof repr // string


// we kunnen deze strings weer omzetten in data
const repr2 = '[0, 1, 2, 3]'
typeof repr2 // string

const data2 = JSON.parse(repr2)
typeof data2 // object