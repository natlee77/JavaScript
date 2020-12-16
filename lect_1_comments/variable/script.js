//variable -en container /box -for att lagra info
//heap-/stack-direct access/ linkad access
//många variant att decklarera

/* firstName ="nata"
console.log(firstName) */
//"strict mode"-
//value ="NATA"
// value = true
// value= {}
// value=[]
/* value= 35
console.log(value)
if ( value==="35"){         //kan jämföra int med text med true === värde &datatype
    console.log(true)
}else{
    console.log(false)
}

// var - dynamisk variable anpassa sig
// kan decklarera samma variable flera gång->
value=36
value="kalle"
console.log(value) */

/*
JS:     camelCase       var firstName
C#:     Pascal          var FirstName
*/
// -> let, const
// value                    // <= gör absolut inte så här
// var value                // <= undvik att göra så här
// let value                // <= gör så här för ett dynamiskt värde (Read/Write)
// const value              // <= gör så här för ett statiskt värde (Read)

let value
value=36

let firstName = "Hans"
firstName = "Anna"          // <= kan ändras men kan inte deklareras igen

const pi = 3.14         
pi = "3.1111"               // <= const kan inte skrivas över 
