


// inline / line comment ctrl + '

/* 
    multi-line / block comment 
    shift + alt + a
*/

/* 
    CONSOLE 
    i webbläsaren: inspektera -> console
    felsökning i utvecklarläge
    i produktionläge minimalt med consoleutskrifter
*/

// console.log('informationsmeddelande')
// console.warn('varningsmeddelande')
// console.error('felmeddelande')


/* 
    VARIABLER
    JS:     camelCase       let firstName
    C#:     Pascal          var FirstName
    var        GLOBAL (typ som static i C#)
    let        LOKAL (finns inte förens vi faktiskt deklarerar)
    const      LOKAL (finns inte förens vi faktiskt deklarerar)
                     Kan dessutom inte deklareras om, undantag finns
*/

// console.log(value)
// value = 1
// console.log(value)
// value = 1.1

// console.log(value)
// var value = 2
// console.log(value)
// value = 2.1

// console.log(value)
// var value = 3
// console.log(value)
// value = 3.1

// console.log(value) <= går inte att göra
// let value = 4
// console.log(value)
// value = 4.1

// console.log(value) <= går inte att göra
// const value = 5
// console.log(value)
// value = 5.1 // <= går inte att göra



/* 
    DOM - Document Object Model
    Är det som HTML och CSS skapar kan manipuleras av JS
    document.
*/

 /* document.body.innerText = '<a href="#">en länk</a>'
 document.body.innerHTML += '<a href="#">en länk igen</a>' */


/* access till en input  (tag, id, name, class) */
//ByTagName
// let htmlcollection = document.getElementsByTagName('input')
// console.log(htmlcollection)
// console.log(htmlcollection[0].value)
// console.log(htmlcollection[1].value)

// //By id
// let inputId = document.getElementById('input-id')
// console.log(inputId.value)

//By Name-NODELIST-kan loopa egenom
// let nodelist = document.getElementsByName('input-name')
// console.log(nodelist)
// console.log(nodelist[0].value)

 /* let genders = document.getElementsByName('gender')
 genders.forEach(gender => {
    if(gender.checked) {
        console.log(gender.id)
     }
 })
 */

//By class
// let classlist = document.getElementsByClassName('input-class')
// console.log(classlist)
// console.log(classlist[0].value)



//DIV  -har !value i html -> ! value = Inner Text/html
/* access till en div eller andra element  (tag, id, class) */
// let htmlcollection = document.getElementsByTagName('div')
// console.log(htmlcollection)
// console.log(htmlcollection[0].innerText)

// let divId = document.getElementById('div-id')
// console.log(div.innerText)

// let classlist = document.getElementsByClassName('div-class')
// console.log(classlist)
// console.log(classlist[0].innerText)