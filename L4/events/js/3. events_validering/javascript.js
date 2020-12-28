/*     Javascript Events     
                Triggers:
        click, blur, focus, keydown, keyup, mouseclick dblclick etc.
        document = DOM - Document Object Model
        window = BOM - Browser Object Model
*/
//bygga js till button-----event "click"
 let counter = 0  //counter++ / ++counter//ladda inte om websida
 
document.getElementById('click_btn').addEventListener('click', ()=>{
    console.log('clicked')//event - vad hända om jag tryck på knappen
    document.getElementById('results').innerText='puff ' + ++counter +' gång'     //text i broweser
})

// ----------"mouseover"-- inte clicka -bara flytta mouse on btn och counter++++
/* document.getElementById('click_btn').addEventListener('mouseover', ()=>{
    console.log('clicked')//event - vad hända om jag tryck på knappen
    document.getElementById('results').innerText='puff ' + ++counter +' gång'     //text i broweser
}) */

const array = []
/*document.getElementById('click_btn').addEventListener('click', ()=>{
   // array.push(++counter )     //+1 count
    console.log(array)
})
//add array
document.getElementById('add_btn').addEventListener('click', ()=>{
    array.push(++counter )     //add digit
    console.log(array)
})
document.getElementById('remote_btn').addEventListener('click', ()=>{
   // array.pop()    //ta bort
    array.splice(4,19)//spesefic plats by plats-nummer
    console.log(array)
})
//add 
/* document.getElementById('add_btn').addEventListener('click', ()=>{
    array.push(document.getElementById('input').value)    //add text from input window
    console.log(array)
}) */
//foränkla:
/*
document.getElementById('add_btn').addEventListener('click', ()=>{
    let element = document.getElementById('input')//värdet here
    array.push(element.value)    //add text from input window
    element.value=('') //add --> text i input försvinner
    console.log(array)
})*/
//------------- input ---------------------------------

document.getElementById('input').addEventListener('click', (e )=>{
    //console.log(window.screen)//screeensize
   console.log(e.target.value)//e-alt on input object
   //(e.target.value)samma som----> let element = document.getElementById('input')
})
//------------- change (text in input )---------------------------

document.getElementById('input').addEventListener('change', (e )=>{
     console.log(e.target.value)  
})
//-------------btn time----------
function displayDate(){
    document.getElementById('time').innerHTML=Date()
}
//document.getElementById('demo').innerHTML = Date()//time in button
document.getElementById('demo').addEventListener('click', ()=>{
     document.getElementById('results').innerHTML = Date()//text efter click btn
})



//===========  VALIDERING  input fält ==========
//============= keyup --- lägg tilltext/tabort text----------------------
/*
document.getElementById('input').addEventListener('keyup', (e )=>{
    console.log(e.target.value)  //e==input i den fallet
    //kan validera input value direct -när skriver inne -amount av täcken
    if(e.target.value.length < 4) {
        document.getElementById('results').innerText = 'För få tecken i ' + e.target.id
        //btn-add kan inte trycka -nu --disable
        document.getElementById('add_btn').disabled = true
     }
    else {
        document.getElementById('results').innerText = ''
       //able efter 4 tecken
        document.getElementById('add_btn').disabled = false
    }
})

//-------for mer effective, skulle skicka in olika saker
/* document.getElementById('firstname').addEventListener('keyup', (e) => {
    if(e.target.value.length < 4) {
        document.getElementById('results').innerText =  e.target.id+ ' uppfyller inte kravet '
        document.getElementById('add_btn').disabled = true
    }
    else {
        document.getElementById('results').innerText = ''
        document.getElementById('add_btn').disabled = false
    }
}) */

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

 
//--------------utväckla mer --by TagName==array
/*document.getElementsByTagName('input').array.forEach(element => {
     element.addEventListener('keyup', (e) => {
    validateInputLength(e) 
    })     //inte rätt att skriva som det --->
});*/
// --->
let inputs = document.getElementsByTagName('input')
console.log(inputs)//inputs_html collection- kan! använda ForEach på den
//kör på alla inputs
/* for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        validateInputLength(e)
    })
}  */
//samma variant med f. validateInputLength(e) inne
for (let input of inputs) {
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

/*
document.getElementById('regform').addEventListener('submit', (e) => {
    e.preventDefault()

    let errors = []

    for (let element of e.target.elements) {
        switch(element.tagName) {
            case 'INPUT': 
                errors.push(validateInput(element))
                break;
            case 'SELECT': 
                errors.push(validateSelect(element))
                break;
        }
    }

    if(!errors.includes(true))
        window.location.replace("success.php");
})

function validateInput(element) {

    if(element.required) {
        if(element.value.length < 2)  {
            console.log('fältet uppfyller inte kravet på 2 tecken')
            return true
        }
    }

    return false
}

const validateSelect = (element) => {
    if(element.required) {
        if(element.value === '') {
            console.log('Du måste ange en stad')
            return true
        }  
    }

    return false
}*/