let datatype =[]// {}, null=object
//console.log(typeof datatype)//lässer type av data
//--------------------
let datatype1 =''//="",'', ``-shift +
//console.log(typeof datatype1)
/* String */
  /*  var stringVarable = ""
    var stringVarable = ''
    var stringVarable = ``  //  <=     shift + ´

    var fullName = 'Hans'
    var greeting = 'Hej jag heter ' + fullName + '.'
    var greeting2 = `Hej jag heter ${fullName}. `
    console.log(greeting)
    console.log(greeting2)

    console.log(greeting.length)
    console.log(greeting2.length)
    console.log(greeting.toLocaleLowerCase())
    console.log(greeting.toLocaleUpperCase())
    console.log(greeting.indexOf('Hans')) //tabort  lenght hans from string lenght
    console.log(greeting.concat(' Jag bor i Farsta'))//2 text string ++ together
    console.log(greeting.trim())//klipa ut melanslag i slutet 
*/
/* Number */
    var value = 1
    var value = 1.1
    var value = 1e-5
    var value = 1e5
    var value = 0.123123123
   // console.log(value)
/* Boolean */
    var status = true
 //   console.log(status)

/* Object */
    let objectValue = {}
//const, let
    let person1 = {
        firstName: 'Hans',
        lastName: 'Mattin-Lassei',
        age: 36,
        skills: ['C#', 'Javascript', 'HTML och CSS'],//array
        address: {          // andra type av object
            addressLine: 'Havsörnsgränd 2',
            zipCode: '123 49',
            city: 'Farsta'
        },
        fullName: function() {
            return `${this.firstName} ${this.lastName}`
        }
    }

  //  console.log(person1.fullName())
    console.log(person1.skills)
    console.log(person1.skills[0])
   // console.log(person1.address)
  //  console.log(person1.address.addressLine)

    /* Convert to JSON */
    let json = JSON.stringify(person1)
  // console.log(json)

    /* Convert from JSON *///finns inte fullname f.-for att den fungera -> class
    let person22 = JSON.parse(json)
   // console.log(person2)


/* Classes */
class Address {
    constructor(addressLine, zipCode, city) {
        this.addressLine = addressLine
        this.zipCode = zipCode
        this.city = city
    }
}
// class Skills{
//     constructor(skills){
//         this.skills=skills
//     }
// }

    class Person {
        constructor(firstName = '', lastName = '', age = 0, skills = [], address = new Address()) {//skills= new Skills()
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.skills = skills //egen class 
            this.address = address//flytta i egen class Adress
        }
          //method
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }

    let person11 = new Person()//har inte fullname f.
    let person21 = new Person('Hans','Mattin-Lassei', 36, ['C#','HTML'], new Address('Havsörnsgränd 2', '123 49', 'Farsta'))//new Skills ['C#','HTML']
    console.log(person11.fullName())
    console.log(person21.fullName())
    // console.log(person21.address)
    // console.log(person21.address.addressLine)
     console.log(person21.skills)


/* Functions - 
 var/function = GLOBAL,
 let/const    = LOCAL */
    function greeting1(name) {
        return `Välkommen `+ name+`!`
    }//=
    const greeting2 = (name) => {
        return `Välkommen ${name}!`
    }
    function greeting3() {
        return `Välkommen Nata!`
    }
    console.log(greeting1('Hans'))
    console.log(greeting2('Hans'))
    console.log(greeting3())