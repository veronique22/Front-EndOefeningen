/**
 * functies
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * @TODO: arguments ?
 */


// maak een functie aan
function foo() {
  console.log("foo was called")
}


// roep hem op
foo()


// functie met argumenten
function bar(quux) {
  // quux kan je enkel binnen de function body gebruiken.
  console.log("in this scope, quux is equal to:", quux)

  // je kan ook het "arguments" object gebruiken
  console.log("bar was called with", arguments)
}
// console.log(quux) // <= dit geeft een foutmelding


// functie die een waarde teruggeeft
function double(n) {
  return n + n
}


// functies meegeven als parameter
function tweeKeer(f) {
  f()
  f()
}
tweeKeer(foo)


// anonieme functies
tweeKeer(function () { console.log("hallo") })


// arrow functions
const triple = n => n * 3

const moveRobot = position => {
  turnEnginesOn()
  moveTo(position)
  turnEnginesOff()
}