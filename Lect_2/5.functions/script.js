/* 
    FUNCTIONS
    var         =       GLOBAL          typ static i C#
    function    =       GLOBAL          typ static i C#
    
    let         =       LOCAL
    const       =       LOCAL
*/


// traditionella sättet
function greeting() {
    return 'Välkommen hit!'
 }
 
 // det nya sättet (ES6)
 const message = () => {
     return 'Du har blivit antagen.'
 }
 const messageV2 = () => 'Denna är förenklad'
 
 
 document.body.innerHTML = `<h2>${ greeting() }</h2>`
 document.body.innerHTML += `<p>${ message() }</p>`
 
 
 // BAAAD 
 function RegisterUser() {
     // validate form data
     // register user via api
     // login user via api
     // redirect user to mypages
 }
 
 
 // GOOOD
 function validate() { 
     if(true) 
         return true 
 
     return false
 }
 
 function register() {
     if(true) 
         return true 
 
     return false
 }
 
 function login() {
     if(true) 
         redirect() 
 
     return false
 }
 
 function redirect() {}
 
 function SignUpSignIn() {
     register()
     login()
 }
 
 
 // callback functions
 
 // const main = (callback) => {
 //     let value = 'test'
 //     callback(value)
 // }
 
 
 
 function main(data, callback) {
     /* 
         gör en massa saker med data som att
         skicka det till ett api och få nån
         form av respons från det som gör nått
     */
     let successful = false
     
     if(data === 'Hans')
         successful = true
 
     callback(successful)
 }
 
 
 
 let name = 'Hans'
 
 main(name, function(data) { 
     document.body.innerHTML += `<p>${data}</p>`
 })