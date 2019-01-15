// print de getallen tussen 0 en 100
for (let i = 0; i <=100 ; i++)
{console.log(i)}

// grootste getal uit een lijst
let lijst = [5,6,8,2,4,7,9,3,0,1]
function groosteGetal (){
let g = lijst [0]

for (let i = 0; i < lijst.length; i++)
{
    const huidig = lijst [i]
    if (huidig > g){
        g = huidig
    }

}
    return g 
}
console.log("de grooste getal is " + groosteGetal())
// gemiddelde van een lijst getallen

let gemiddelde = 0;
for (let i = 0; i < lijst.length; i++)
{
    gemiddelde += lijst[i] / lijst.length
}
console.log("De gemiddelde is " + gemiddelde)
// check of een string een palindroom is

// langste string uit lijst
let namen = ["jan", "paul", "Laure", "Bertin"]
function LangsteString()
{
    let g = namen[0]
    for (let a = 0 ; a< namen.length; a++)
    {
       const huidig = namen[a]
       if (huidig.length > g.length){
           g = huidig
       }
    }
    return g

}
console.log(LangsteString())