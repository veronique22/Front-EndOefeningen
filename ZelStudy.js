let name = "Bingo";
name;
let hello = "dit bonjour";
hello;
let gretting = name + " " + hello;
console.log(gretting);

// les opérateurs de comparaison
// === signifie "egalité stricte" soit "les termes sont ils exactement identiques?"
let x = 5 === 2+4
console.log(x)  // output  = faux 
// !==           "non egalité "         "les termes sont ils differents?"

let y = "Christ" !== "ch" + "ris"

console.log(y)  // output true
// <           "inférieur à "

let z = 10 < 6 
console.log(z) // output false
// >            " superieur à "

let p = 10> 20

console.log(p) // output false


// Les structures conditionnelles: les boucles

// afficher les nombres pairs d'une serie avec For
console.log("Les nombres pairs compis entre 1 et 21")
for(let i = 1; i< 21; i++){if (i%2 == 0){console.log(i )}}

// les funtions 
let naam = "lea"
function direBonjour(){
    console.log("Bonjour " + naam + "!")
}
let salutation = direBonjour();




