/**
 * types
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Data_structures_and_types
 */


// waardes in JavaScript hebben types:
typeof true            // boolean
typeof 123             // number
typeof "foo"           // string
typeof Math.random     // function


// afhankelijk van het type, kan je verschillende zaken doen met de waarde:
1 + 1             // 2
"foo" + "bar"     // "foobar"
true || false     // true
Math.random()     // 0.7045648095444397


// javascript doet zijn best om automatisch types om te vormen.
// dwz dat een getal soms omgevormd wordt naar een string, etc..
// we gebruiken deze functionaliteit niet in productie code.
"You chose: " + 5                   // werkt, maar is slordig.
"You chose: " + (5).toFixed(0)      // beter


// niet doen:
{ } +[]
'' + {}


// in javascript is het de waarde (niet de variabele) die een type heeft.
// je kan dus in één variabeles waardes opslaan van verschillende types.
// we gebruiken deze functionaliteit niet in productie code.
let limit = 5
limit = "okay"                      // werkt, maar is slordig.