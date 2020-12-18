/* 
    CLASSES
*/    

// göra 3 person med object = inte optimalt

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

class Person {
constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

fullname() {
    return `${this.firstName} ${this.lastName}`
}
}

var pc1 = new Person('Hans','Mattin-Lassei')
var pc2 = new Person('Tommy','Mattin-Lassei')
var pc3 = new Person('Anki','Mattin-Lassei')

pc1.age = 36

console.log(po1)