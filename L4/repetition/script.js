/* arrays (list att lagra saker)---stor bit av JS */
//var array=[] //var, let , const
//let array = []
const array = []
//kan ha olicka datatype, men att lista det ser ut constig
array[0] = 12
array[1] = 'Hans'
array[2] = { firstName: 'Hans'}//object
array[3] = ['C#','.Net']//andra array
array[4] = true//bool
array[5]=false
//console.log(array)
for (let value of array){
    if(value){//if sats kolla om value är true, [5]-false 
      //  console.log('skriva ut: '+value)

    //switch- jämföra saker    
    }
}
//---------------------------
const names = []
    // sätt in värde på en specifik position
    names[0] = 'Nata'
    // lägg till något i slutet av listan
    names.push('max')
    // lägg till något i början av listan
    names.unshift('Anki')
    // lägg till något från en viss position i listan
    names.splice(1, 0, 'Joakim', 'Hanna')//position, tabort, +1||flera värde
    
    //ta bort ett värde från en specifik position-har index[0]-hålla plats 
    // names[0]=''
    // names[0]=null
     delete names[0]
    //ta bort något i slutet av listan
      names.pop()
    //ta bort något i början av listan-flytta [index]
     names.shift()
    // ta bort något från en viss position i listan
   names.splice(1,1)  //värde dehållas from [1], HUR MÅNGA tabort

     // console.log(names)

    // ta bort alla värden innan en viss position och behåll resten
    //måste sparas i new Array[] - klipa ut PART av array
    const namestokeep = names.slice(1)
    console.log(namestokeep)

//--------- Sort Array[]-- loppa genom-------------
const names1 = ['Hans','Anki','Tommy','Nata','Joakim','Hanna','Nat']
    // sorterat i stigande ordning (A-Z)
    //names1.sort()
  //  console.log(names1.sort())
    // sorterat i fallande ordning (Z-A)
 //   console.log(names1.sort().reverse())
//- loppa genom----------
    names.forEach(name => {
       // console.log('forEach: ' + name)
    })

    for (let name of names1) {
      //  console.log('for of: ' + name)
    }

    for (let i=0; i < names1.length; i++) {
       // console.log('for: ' + names1[i])
    }
// -------andra ---filter(),--map()----
    const filtered = names1.filter(name => {
        return name === 'Nata'
    })
   // console.log(filtered)
//hämta specifik del-return specific sak
    const mapped = names1.map(name => {
        return name//return hela list av namn
    })
   // console.log(mapped)
//    byta nästa värde +- ned varja steg
const numbers = [300, 100, 100, 50];
    const result = numbers.reduce((total, num) => {
      //  console.log(total,num)
        return total - num;
    })
  //  console.log(result)

  console.log('-------------------------')
/*--------- OOP Objektorienterad Programmering--------- */

import User from "./models/User.js";
const user = new User('Hans','Mattin-Lassei','hans@domain.com','BytMig123')
//-------- encapsulation example (getters setters)
 //   user.id = 123123123123123132//kan inte setta user.-id-som det (get)
    console.log(user.id)
user.displayName = 'Kalle Anka'//vill inte att det kan ändras på det set-->GET
/* user.displayName=()=>{
    return'hhhhdda'
}  */   
    //  console.log(user.displayName)
    // console.log(user)


 //====== inheritance example (extends)  ===== 
console.log('----- arv -----')
import Employee from "./models/Employee.js";

const employee = new Employee('Nata','Lisjö','nat@domain.com','BytMig123')
console.log(employee)
//varj gång new id --new nummer hela tiden --värdelöss --bätre skapaId i C#
 console.log(employee.id)//from employee
 console.log(employee.employeeId)//from user genom employee


//======  polymorphism example (override methods)=========
console.log('----- polymorphism -----')
     const employee_p = new Employee('Nata','Lisjo','hans@domain.com','BytMig123')
     
        employee_p.register()//tar from User


/* export - import */
// import { uuidv4 as uuid} from "./helpers/functions.js";//f./as uuid -kan användas
// import Employee from "./models/Employee.js";//class


