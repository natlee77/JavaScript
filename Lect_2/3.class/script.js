/* 
    CLASSES
*/    

// göra 3 person med object = inte optimalt - bättre class

let po1 = {
    firstName: 'Hans',
    lastName: 'Mattin-Lassei', 
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
let po2 = {
    firstName: 'Tommy',
    surname: 'Mattin-Lassei',
    fullName: function() {
        return `${this.firstName} ${this.surname}`
    }
}
let po3 = {
    firstName: 'Anki',
    lastName: 'Mattin-Lassei',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// göra 3 personer med en klass = optimalt
//ctor -sett att matta in object
//class - object
class Person {
constructor(firstName, lastName) {
    //firstName{get;set;}// c#
    this.firstName = firstName
    this.lastName = lastName
}
//funktion i class
fullname() {
    return `${this.firstName} ${this.lastName}`
}
}

var pc1 = new Person('Hans','Mattin-Lassei')
var pc2 = new Person('Tommy','Mattin-Lassei')
var pc3 = new Person('Anki','Mattin-Lassei')

//var pc1 = new Person()
//pc1.firstName='Nata'


console.log(po1)
console.log(pc1)
console.log(po2)
console.log(po3)
//(-) kan lägga till instance , som finns inte i ctor, så object kan ser ut olicka
//pc1.age = 49