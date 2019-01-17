/**
 * for
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */


// standaard for loop
for (let i = 0; i < 10; i = i + 1) {
  console.log("counting up", i)
}


// tel naar beneden
for (let i = 10; i > 0; i = i - 1) {
  console.log("counting down", i)
}


// loop over array
const friends = ['bob', 'moe', 'tom']
for (let i = 0; i < friends.length; i = i + 1) {
  const friend = friends[i]
  console.log(friend, "is my friend")
}


// while
/*
const makeGuess = p => p / 2
const goodEnough = (g, p) => Math.abs(g*g - p) <= 0.01
const improveGuess = (g, p) => g

for (
  let guess = makeGuess(problem);
  !goodEnough(guess, problem);
  guess = improveGuess(guess, problem)) {
    // no body!
  }
*/