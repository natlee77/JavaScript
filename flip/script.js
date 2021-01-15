class User {
    constructor(firstname, lastname, email) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
    }
}

const users = []
let userdata;
let userDiv,flipDiv,panelDiv,idElement,emailElement,phoneElement;

document.getElementById('button').addEventListener('click', () => {
        userdata = new User(`${firstnameinput.value}`, `${lastnameinput.value}`, `${emailinput.value}`)
        users.push(userdata)
        document.getElementById('text-output').innerText = "Användare skapades!"
        createElement();
        fillPanel();
})

//Funktioner
function createElement () {
    // CREATE ELEMENT
    userDiv = document.createElement('div')
    flipDiv = document.createElement('div')
    panelDiv = document.createElement('div')
  
    // GER DEM CLASS & ID
    flipDiv.className = "flipDiv"
    panelDiv.className = "panelDiv"
    userDiv.id = `${userdata.id}`
    flipDiv.id = `${userdata.id}-flipDiv`
    panelDiv.id = `${userdata.id}-panelDiv`
  
  	
    flipDiv.innerText = `${userdata.firstname}` + ` ${userdata.lastname}`
  
  	// LÄGGER TILL I DOM:EN
    var currentDiv = document.getElementById('users');
    currentDiv.appendChild(userDiv)
    userDiv.appendChild(flipDiv)
    userDiv.appendChild(panelDiv)
  }

function fillPanel() {
    idElement = document.createElement("p")
    idElement.innerText = `Id: ${userdata.id}`
  
    emailElement = document.createElement("p")
    emailElement.innerText = `E-mail: ${userdata.email}`
    emailElement.id = `${userdata.id}-email`
  
    phoneElement = document.createElement("p")
    phoneElement.innerText = `Phone: ${userdata.phone}`
    phoneElement.id = `${userdata.id}-phone`
  
    panelDiv.appendChild(idElement)
    panelDiv.appendChild(emailElement)
    panelDiv.appendChild(phoneElement)
  }

//JQuery

$(document).ready(function() {
    $("#button2").click(function(){
      $(".panel").slideToggle();
    });
    })