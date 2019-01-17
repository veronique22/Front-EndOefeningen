/**
 * if
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 */


let fuelRequired = 100
let fuelAvailable = 80
let fuelCapacity = 50
let engineStatus = 'ready'


// if
if (fuelAvailable >= fuelRequired) {
  console.log("start the engines")
}


// if else
if (fuelAvailable >= fuelRequired) {
  console.log("start the engines")
} else {
  console.log("go get more fuel")
}


// if else if
if (fuelAvailable >= fuelRequired) {
  console.log("start the engines")
} else if (fuelRequired <= fuelCapacity) {
  console.log("go get more fuel")
} else {
  console.log("go get a bigger vehicle")
}


// and
if (fuelAvailable >= fuelRequired && engineStatus == 'ready') {
  console.log("lets go")
}