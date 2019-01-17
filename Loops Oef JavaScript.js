// print de getallen tussen 0 en 100

for(let i = 0; i < 101; i++ )
{
    console.log(i)
}
// grootste getal uit een lijst
let lijst = [5,3,-9,7,-5,6,-12]
function grootsteGetal( lijst){
    let g = lijst[0]
    for(let i = 1; i < lijst.length; i++ )
    {
    let huidig = lijst[i]
    if(g < huidig)
    {
    g = huidig
    }
    }
    return g

}
console.log("het grooste getal is : "+grootsteGetal(lijst))

// langste string uit lijst
let stringLijst = ["Shoenen", "tafel", "stoel", "onderwijs", "wine"]
function langsteString (stringLijst)
{
    let g = stringLijst[0]

    for(let i = 1; i < stringLijst.length; i++ )
    {
    let huidig = stringLijst[i]
    if(g.length < huidig.length)
    {
    g = huidig 
    }
    }
    return g
}
console.log( "Het langste string is : " + langsteString(stringLijst))

// gemiddelde van een lijst getallen

let gemiddelde = 0
for(let i = 1; i < lijst.length; i++ )
{
    gemiddelde += lijst[i]
}
console.log("de gemiddelde van de getallen in de lijst is : " + gemiddelde)


// check of een string een palindroom is
