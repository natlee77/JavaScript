/*     Javascript Events     
                Triggers:
        click, blur, focus, keydown, keyup, mouseclick dblclick etc.
        document = DOM - Document Object Model
        window = BOM - Browser Object Model
*/

//------------- input ---------------------------------
/*
document.getElementById('input').addEventListener('click', (e )=>{
    //console.log(window.screen)//screeensize
   console.log(e.target.value)//e-alt on input object
   //(e.target.value)samma som----> let element = document.getElementById('input')
})

//===========  VALIDERING  input fält ==========
//============= keyup --- lägg tilltext/tabort text----------------------

//-----------kan bli separate f.  validateInputLength(e)
//anropa med callback variant= kör f. som kör annat f.((e)=>{})

/*document.getElementById('firstname').addEventListener('keyup', (e) => {
    validateInputLength(e)
})
document.getElementById('lastname').addEventListener('keyup', (e) => {
    validateInputLength(e)
})
//no action efter
function validateInputLength(e) {
    if(e.target.value.length < 4) {
        document.getElementById('results').innerText = 'För få tecken i ' + e.target.id
        document.getElementById('add_btn').disabled = true
    }
    else {
        document.getElementById('results').innerText = ''
       // document.getElementById('add_btn').disabled = false
    }
}

*/
/*
 //--------- ++error mdl i html-<div>firstname-error
function validateInputLength(e) {
    if(e.target.value.length < 4) {
        document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
        document.getElementById('addfn_btn').disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        document.getElementById('addfn_btn').disabled = false
    }
}

 */
//--------------utväckla mer --by TagName==array

// let inputs = document.getElementsByTagName('input')
// console.log(inputs)//inputs_html collection- kan! använda ForEach på den
//kör på alla inputs
/* for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        validateInputLength(e)
    })
}  */
//samma variant med f. validateInputLength(e) inne
/* for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 4) {
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
            document.getElementById('addfn_btn').disabled = true
        }
        else {
            document.getElementById(`${e.target.id}-error`).innerText = ''
            document.getElementById('addfn_btn').disabled = false
        }
    })
} // kvar problem -- knappen inte validera 2 fält samtidig 

*/






//0000000000000000000000000000000000000000000000
//trycker på knapp->
/*
document.getElementById('regform').addEventListener('submit',(e)=>{
    e.preventDefault() //förhindra default betiendet - i den fall-submit formular-stå kvar på sida
    //  console.log(e.target)//ser i Console form. html
    //  console.log(e)   //event
    // console.log(e.target.elements)//array av element/! köra ForEach()
       
    for (let element of e.target.elements) {
      //  console.log(element.value)//visa alla value
      //  console.log(element.type) //type
      //  console.log(element.localName)        
      //  console.log(element.tagName)

        //switch- skicka in element by tagName//validera på olika set ---switch
        switch(element.tagName) {
            case 'INPUT': 
               // console.log('ÄR en input')
               // validateInput(element.value)//skapad f.
                validateInput(element)
               // errors.push(validateInput(element))
                break;
            case 'SELECT': 
                validateSelect(element)
               // errors.push(validateSelect(element))
                break;
        }
    } 
    //variant- kan diaktivera button -- men -! "submit"    
})
*/

//exempel --validera alla kravs for go go to success.php
document.getElementById('regform').addEventListener('submit',(e)=>{
    e.preventDefault() //förhindra default betiendet 
    
    let errors = [] 
    
    for (let element of e.target.elements) {          
        switch(element.tagName) {
            case 'INPUT':                
               errors.push(validateInput(element))
              // validateInput(element)
                break;
            case 'SELECT':                
               errors.push(validateSelect(element))
              // validateSelect(element)
                break;
        }
    }  
             //  errors.contains(true)//om det innerhåller true värde
              // console.log(errors)
    //redirect
             // window.location.replace(success.php)//not defined
   //includes()
   if(!errors.includes(true))
   window.location.replace("success.php");

})



function validateInput(element) {
   console.log('värdet for inputen är:'+ element.value)
  // console.log(element)
  //validering om det fält är required

    if(element.required) {

      //  console.log('måste')
        if(element.value.length < 4)  {
            console.log('----fältet uppfyller inte kravet på 4 tecken')
            return true
        }
    } 
    return false
}


const validateSelect = (element) => {
 //   console.log('värdet for selected är:'+ element.value)

    //bestämmer om jag har värde choosed
    if(element.required) { //om det required-->
        if(element.value === '') {   //då--> är fältet tomt-->
           console.log('----Du måste ange en stad')
            return true    //om det tomt return false
        }  
    }

   return false//om ! required//! tomt
}


// document.getElementById("demo").innerHTML = 
// "The full URL of this page is:<br>" + window.location.href;

function redirect()  //from www.3skole
{
   // window.location.href="login.php";
    window.location.replace(success.php)
    return false
}
