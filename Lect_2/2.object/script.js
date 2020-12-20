/*     OBJECT-------------
    key:value pair
*/

/* Javascript Object */ 
var person1 = {
    "firstName": "Kalle",
    "lastName": "Andersson",
    "age": 36
}

//++method (nån som kooplad på object)
var person2 = {
    firstName: 'Hans',
    lastName: 'Mattin-Lassei',
    age: 36,
    hair: ['blond','short'],
    address: {
        addressline: 'Havsörnsgränd 2',
        zipcode: '12349',
        city: 'Farsta'
    },
    //metod/this.=ligger i den object
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

 console.log(person1)
 console.log(person2.fullName())

/* JSON = Javascript Object Notation -------------
    {
        "firstName": "Hans",
        "lastName": "Mattin-Lassei",
        "age": 36
    }*/
//json måste == text sträng for att parse
var json = '{ "firstName": "Hans", "lastName": "Mattin-Lassei","age": 36 }'

 //JSON -> JS Object (C# JsonConvert.DeserializeObject<>())
    var parsedjson = JSON.parse(json)
    console.log(parsedjson)

// JS Object -> JSON (C# JsonConvert.SerializeObject())
    var json = JSON.stringify(person2)
    console.log(json)
//som i C# hämta
   console.log(person2.address.addressline)
   console.log(person2['address']['addressline'])

// destructing object -hämta ut saker
//instället:
// let firstName = person1.firstName
// let lastName = person1.lastName
// let age = person1.age
// let addressline = person2.address.addressline
//bara:
let {firstName, lastName, age} = person1
console.log(firstName)

// göra 3 person med object--instället , do --class 
let person11 = {
    "firstName": "Kalle",
    "lastName": "Andersson",
    "age": 36
}
let person12 = {
    "firstName": "Kamax",
    "lastName": "Andersson",
    "age": 16
}
let person13 = {
    "firstName": "Olle",
    "lastName": "Andersson",
    "age": 7
}