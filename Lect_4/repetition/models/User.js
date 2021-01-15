import { uuidv4 } from "../helpers/function.js";

export default class User {
    constructor(firstname, lastname, email, password) {
        this.firstName = firstname
        this.lastName = lastname
        this.email = email
        this.password = password
    }

    get id() {
       return uuidv4()
      // return Date.now().toString()//random numer-datum tid
    }
//get -skyda from ändring
    get displayName() {
        return `${this.firstName} ${this.lastName}`
    }
  //set - kan ändras senare --inte recomenderas med Name
     set displayName(value) {
        const values = value.split(' ')
        this.firstName = values[0]
        this.lastName = values[1]
    }
// exempl polymorphism
    register() {
        console.log('Registrating user i database')
        /* return false */

   //time delay f.---exempel: registrera i DB och använda efter
        setTimeout(() => {return true }, 3000);
    }
}
