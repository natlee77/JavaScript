
//importera VAD from VAR
//++ html (type = "module") --i line med -script.js
import Person from "./models/Person.js";
import User from "./models/User.js";
//import { print } from "./functions.js";
//import { print as write} from "./functions.js";
import { validate,validate1,validate2,validate3,validate4,validate5,validateEmail, print 
    as write } from "./functions.js";

const person= new Person('Nata', 'Lisjö')//skapa object -> skicka till 
//print(person)         // trying to print out paper    
  write(person)    //-alias for print f.
//  validate(person.firstName)//Object-> skicka till f.validare()
//  validate(person.lastName)  //rött
//  console.log(validate1(person.firstName))
//  console.log(validate1(person.lastName))

if(!validate1(person.firstName) || !validate1(person.lastName))
     console.log('validering av användare misslyckades')
else 
console.log('validering av användare lyckades')

if(!validate2(person.firstName) || !validate2(person.lastName))
     console.log('validering misslyckades')
else 
console.log('validering lyckades')
//------------------
if(!validate3(person.firstName, 4 ) || !validate3(person.lastName ,5))
     console.log('validering av användare misslyckades')
else 
console.log('validering av användare lyckades')

//---------- validate password--------
if(!validate3('BytMig123', 12 ) )
     console.log('Lösenord --fel')
else 
console.log('lösenordet lyckades')

validate4('BytMig123', 9 , (error)=>{ 
    console.log('Lösenord fel')})
//callback f. hear--- jag bästämmer värde som kommer tilbacka    
validate4('BytMig123', 12, (error)=>{ 
    if(error)
        console.log(' fel')
    else
    console.log(' bra')
})

let error =validate3('BytMig123', 10)
if (error)
console.log(' uppfyller inte kravet')
//------
validate5("BytMig123", 12, ( error) => { 
        console.error(error.statusCode , error.message)})
//------
validate5("BytMig123", 9, (res, error) => { 
    if(res.statusCode === 2001)
        console.log(res.message)
    if(res.statusCode === 4001)
        console.error(res.message)
})
//testa
console.log(validateEmail('hans.mattin-lassei@domain.com'))

//-------------User------
const user = new User('Hans', 'Mattin-Lassei', 'hans@domain.com')
console.log(user)
console.log(user.id)

//setTimeout(function(){ alert('hello'); }, 3000);//alert popup-windows
 setTimeout(function(){ console.log(user.id); }, 4000);