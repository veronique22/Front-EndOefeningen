/**
 * arrays
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * @TODO: length
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */


// maak een array aan
const fruits = ['Apple', 'Banana'];


// zoek de lengte van een array op
fruits.length // 2


// refereer naar een element in de array
// opgepast: we tellen vanaf 0.
fruits[0] // Apple
fruits[1] // Banana


// pas elementen in de array aan
fruits[0] = 'Lemon' // fruits is nu ['Lemon', 'Banana']


// met map pas je een functie toe op ieder element
// je krijgt een nieuwe array met de resultaten
[0, 1, 2, 3, 4, 5].map(n => n + n) // [0, 2, 4, 6, 8, 10]


// filter elementen in een array
const isEven = n => n % 2 == 0
[0, 1, 2, 3, 4, 5].filter(isEven) // [0, 2, 4]


// vorm een array om in een string
fruits.join("|")         // "Lemon|Banana"
"hello world".split(" ") // ["hello", "world"]


// je kan arrays maken waarin de waardes verschillende types hebben.
// we gebruiken dit (bijna) nooit in productie code
[true, 123, "test", [null]] // niet doen