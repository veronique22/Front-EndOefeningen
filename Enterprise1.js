const assert = require('assert')

const employees = [
  { name: 'Marcel', salary: 3000, freelancer: true },
  { name: 'Sandra', salary: 3100, freelancer: false },
  { name: 'Thomas', salary: 2800, freelancer: false },
  { name: 'Alexander', salary: 3502, freelancer: false },
  { name: 'Els', salary: 3050, freelancer: true },
  { name: 'Igor', salary: 2600, freelancer: true },
  { name: 'Anne', salary: 2600, freelancer: true },
]

//* Hoeveel bedraagt de totale loonkost iedere maand?
/*function totalSalaries(employees) {
  let totalSalaries = 0
  for(let i = 0; i< employees.length; i++)
  {
    totalSalaries += employees[i].salary
  }
  return totalSalaries
}
assert.equal(totalSalaries(employees), 20652)
console.log("het total salary is " + totalSalaries(employees))*/

//* Welke freelancer verdient het meest?
function bestPaidFreelancer(employees) {
  let g = employees[0].name
  for (let i = 1; i < employees.length; i++)
  {
      const huidig = employees [i]
      while(huidig.salary> g.salary){
          g = huidig
      }
  
  }
      return g 
}

assert.equal(bestPaidFreelancer(employees), 'Alexander')
console.log ("de best paid Freelancer is " + bestPaidFreelancer(employees))

//* Wie verdient er allemaal meer als 3000?
function earsMoreThan3k(employees) {
  return employees
  .filter (e =>e.salary > 3000)
  .map (e =>e.name)
}

assert.deepEqual(earsMoreThan3k(employees), ['Sandra', 'Alexander', 'Els'])
console.log("Mensen die meer dans 3000 euros verdienen zijn : " + earsMoreThan3k(employees))

//* Hoeveel verdient een interne medewerker gemiddeld?
function averageSalaryNonFreeLancer(employees) {
  const internen = employees.filter(e=> !e.freelancer)
  const totals = internen.reduce((x,y) => x+y , 0)
  return totals/ internen.length
}

assert.equal(averageSalaryNonFreeLancer(employees), 3134)
console.log ("een interne medewerker verdient in gemiddel : " + averageSalaryNonFreeLancer(employees))

//* Wie heeft de langste naam?
function longestName(employees) {
  
      let g = employees.name[0]
      for (let a = 0 ; a< employees.length; a++)
      {
         const huidig = employees.name[a]
         if (huidig.length > g.length){
             g = huidig
         }
      }
      return g
  
  
    }
    
    
    assert.equal(longestName(employees), 'Alexander')
    
    console.log("de langste naam in de lijst is : " + longestName(employees))

//*  Print de namen van alle werknemers, gesorteerd op voornaam.
function sortedNames(employees) { 
   employees.name.sort()
}

assert.deepEqual(sortedNames(employees), ['Alexander', 'Anne', 'Els', 'Igor', 'Marcel', 'Sandra', 'Thomas'])

console.log("Werknemers gesorteerd op voornam : " + sortedNames(employees))

//*/
