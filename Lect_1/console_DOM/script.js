// hämta by id
// document.getElementById('results').innerText="hejsa";
// document.getElementById('results').innerHTML="<h1>hejsa</h1>";
// console.log(document.getElementById('results').innerText);
// let text = document.getElementById('results').innerText;
// let text2 = text + ' HEJDÅ';
// document.getElementById('results').innerText= text2;

//hämta på andra set  , updatera
//var name=document.getElementById('results').innerText;///inner text BARA i TAG div--vanligaste sett 
// var name=document.getElementById('name').value;//by value 
// var name = document. getElementsByTagName('input')[0].value;//"" , [list]
// //var name = document.getElementsByTagName('name')[0].value;
// var name = document. getElementsByClassName('input-text')[0].value;
name.innerText= "Hej igen"


// var last = document. getElementsByTagName('div')[0].innerText;
// var last = document. getElementById('results').innerText;
// //var last = document. getElementsByName('results').innerText;// div har inte name
//var last =document.querySelector('#results').innerText="Max"//första object i list
//var last =document.querySelector('div').innerText="Max div"
var last =document.querySelectorAll('.div-text')//hämta alla element och ger lista
var last =document.querySelectorAll('.div-text')[0] = " kalle class 1" 
var last =document.querySelectorAll('.div-text')[1] = " kalle class 2" 


var regform= document.getElementById('regform')
//console.log(last)
// console.log(name);
console.log(regform)