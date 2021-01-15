import Root from "./User.js";
import { uuidv4 } from "../helpers/function.js";
//extends User ---Roor?-när viköra export default kan döpa User till Root
export default class Employee extends Root {
    constructor(firstname, lastname, email, password) {
        super(firstname, lastname, email, password)
    }
//encapsulation--get
    get employeeId() {     
        return uuidv4()
       //return Date.now().toString()
         }
//override f. register()-from User =>POLYMORHISM
    register() {
        /* 
        if(super.register())
            console.log('succesfully registrated the employee')
        else
            console.log('Failed to register the employee') */
        //super.register()//värde from User
        console.log('Registrating the Employee. Please Wait.')


        /* // Denna kommer generera en evighetsloop och funkar ej
        let regStatus = 0
        while(regStatus !== 1) {        
            setTimeout(() => {
                if(super.register())
                    regStatus = 1
                else
                    console.log('.')
            }, 2000);
        }
        console.log('Completed')
 */
        setTimeout( console.log('Completed'))
    }
}