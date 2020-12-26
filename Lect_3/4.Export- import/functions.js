/* SKA ANVÄNDA VALIDERA() OFTEN-den info som vi type in
  JS validera dynamisk info , när vi scriver in ---
  instället vi trycka knapen och det ses -- "fel"
    ---FOKUS område i JS for oss:
    - validering
    - hur vi kan hämta data  på smidig set(statisk<->dynamisk)
  */

//vanlig i script.js 
 /* function write(value){
    console.log(value)
} */


//export - kan anropas from script.js/++ import -i script.js
export function print(value) {
    console.log(value)
}
//arrow funktion
export const validate =(value) =>{
 if(value === '')//har inte controll på hur skrivt firstname
     console.log('grön ljus')
 else 
    console.log('rött ljus')    
}
export const validate1 =(value) =>{
    if(value !== '')
        return false
    else 
        return true
   }
   export const validate2 =(value) =>{
    if(value.length >= 2)
        return true
    else 
        return false
   }
export const validate3 = (value, min = 2) => {
   // if(value !== '')
        if(value.length < min)
            return false           
        else
        return true  
    // else
    // return false   
}
export const validate4 = (value, min = 2, callback) => {    
         if(value.length >= min)
             callback(true)         
         else
             callback(false)        
     }

export const validate5 = (value, min = 2, callback) => {    
        if(value.length < min)                 
            callback(
                {statusCode: 4001 ,
                 message: `uppfyller inte kravet på ${min} tecken.`
                })
            //callback(error)
        else
           // callback(false)
            callback(
            {
                statusCode: 2001,
                 message: `uppfyller kravet på ${min} tecken.`
                })
}     

//---------- tillfunction--regular expression--RegEx
//regular expression /\d/---kollar om inerhåller tech eller numer
/*   
    \d--find digit
    \s find whitespace character
    \b find a word \bWORD ||  WORD\b
    [abc] find any char between brackets
    [0-9]  any digits
*/

export const containNumbers = value => {
    return /\d/.test(value)
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
