/*     OBJECT-------------
    key:value pair
*/

/* Javascript Object */
var person = {
    "firstName": "Kalle",
    "lastName": "Andersson",
    "age": 36
}

var person = {
    firstName: 'Hans',
    lastName: 'Mattin-Lassei',
    age: 36,
    hair: ['blond','short'],
    address: {
        addressline: 'Havsörnsgränd 2',
        zipcode: '12349',
        city: 'Farsta'
    },

    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person)
// console.log(person.fullName())


/* JSON = Javascript Object Notation 
    {
        "firstName": "Hans",
        "lastName": "Mattin-Lassei",
        "age": 36
    }

*/

var json = '{ "firstName": "Hans", "lastName": "Mattin-Lassei","age": 36 }'

// JSON -> JS Object (C# JsonConvert.DeserializeObject<>())
    var parsedjson = JSON.parse(json)
    // console.log(parsedjson)

// JS Object -> JSON (C# JsonConvert.SerializeObject())
    var json = JSON.stringify(person)
    console.log(json)

    console.log(person.address.addressline)
    console.log(person['address']['addressline'])

// destructing object

// let firstName = person.firstName
// let lastName = person.lastName
// let age = person.age
// let addressline = person.address.addressline

let {firstName, lastName, age} = person
console.log(firstName)