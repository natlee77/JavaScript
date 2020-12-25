 //den biten ska göra i C# --- är mycket bättre
 
 export default class User {
    constructor(firstname, lastname, email) {
        this.firstName = firstname
        this.lastName = lastname
        this.email = email
      //  this.id=Date.now().toString()//skapa id -13 digit
    }
// skapa id/C#-Guid.newGuid()
// id=Date.now().toString()
    get id() {
        return Date.now().toString()
    }
}
