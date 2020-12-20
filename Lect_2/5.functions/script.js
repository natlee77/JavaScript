/* 
    FUNCTIONS(alla ska retunera saker ||utföra saker)
    var         =       GLOBAL          typ static i C#//när ladda fill skapar utrymme i minne
    function    =       GLOBAL          typ static i C#
    
    let         =       LOCAL           när kommer till f. skapar utrymme i minne
    const       =       LOCAL
*/
greeting()//anropa före f. -ok
//message()//anropa före f. har error - använda const-

// ----traditionella sättet--------
function greeting() {
    return 'Välkommen hit!'
   // console.log("hej")
 }
 greeting()
 
 //------ det nya sättet (ES6)----esma ----
 //spara f. in en variable
 //const message = text => {  //1 värde utan parantes
 const message = (value) => {    //const ||let
     return 'Du har blivit antagen till jobb.'
   // console.log("Du har blivit antagen")
 }
 console.log(message())//anropa f.med return del
 //message('gfgf') //matta värde
 message()
 //---------
 //const messageV2 = () => console.log( 'Denna är förenklad')
 //messageV2()
 //------
 //const messageV2 = () =>  {return 'förenklad'}
 const messageV2 = () =>  'förenklad'// retunera en text
 console.log(messageV2())

 //skriva ut i DOM:
 document.body.innerHTML = `<h2>${ greeting() }</h2>`//return f.
 document.body.innerHTML += `<p>${ message() }</p>`
  
 
 
 //=============================================
 // 1 f. göra 1 sak - snabbare , lättare felsökning
 //---------BAAAD variant:
 function RegisterUser() {
     // validate form data
     // register user via api
     // login user via api
     // redirect user to mypages
 } 
 
 //--c#, JS----- GOOOD variant:
 function validate() { if(true) return true  
     return false } 
 function register() { if(true)  return true  
     return false } 
 function login() { if(true)  redirect()  
     return false }
 
 function redirect() {}
 
 function SignUpSignIn() {
     register()
     login() }
 
 
 //---------callback functions---knepig----
 //köra funktion (utan namn )in funktion main
 
 const main = (callback) => {
     let value = 'test'
     callback(value)
    //= no_namn()
 }
 main(value=> console.log(value))
 //vanlig main() 
 //main(function(){console.log('hej')})
 //= function no_namn(){console.log('hej')}
 function main2(data,callback){
     callback(data)
  //  callback('här är data')//hård codat värde
 }
 //anropa main2
 let data='här är data2 i main2'
 main2(data, function(data){
     console.log(data)
 })//2 parametr data , callback
 
 function main3(data, callback) {
     /* 1.
         gör en massa saker med data som:
         - att skicka det till ett api och
         - få nån form av respons från det som gör nått
     */
     let successful = false
     
     if(data === 'Hans')
         successful = true
 
    //2.
     callback(successful)
 }
 
 
 
 let name = 'Hans'
 //här JAG bestämma vad ska göra med result av main3
 main3(name, function(data) { 
     console.log(data)
     //eller skicka ->Dom
     document.body.innerHTML += `<p>${data}</p>`
 })