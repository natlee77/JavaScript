/* OOP - Objektorienterad Programmering    
 c#:
nykel: Encapsulation
        Inheritance//halv implementerad i js
        Polymorphism
        Abstraction//not
 --------------
        JS:       
        Encapsulation
        Inheritance
        Polymorphism 
 */

/* Encapsulation (GET = READ, SET = WRITE)---har mojlighet att scriva over */
//get skyda from modify --Encapsulation  halv implementerad i JS (än c#)
    class Product {
        constructor(name, desc, price) {
            this.name = name
            this.desc = desc
            this.price = price        }

       // get inStock=true--nej , förvänta metod

       get  inStock() {
            return true        } 
        
        changeInStockStatus(status) {
            this.inStock = status
            return this.inStock
        }
//get--(get; set;)variant -skydda InclVat()=incapsulation
// hämta som property ny ,nstället f.
        get inclVat() {
            return this.price * 1.25        }
    }

    let product = new Product('Product 1', 'desc for product', 100)
    // console.log(product)
    // console.log(product.inStock) 
    // product.inStock="duhkjsdhas"//get skyda 
    // console.log(product.inStock)

    // console.log(product.inclVat)
    //  product.inclVat = '123123asdfasdf'
    //  console.log(product.inclVat) //125 i alla fall
    //product.changeInStockStatus(false)
    //console.log(product.inStock)

 //----------------------------------annat exempel   
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName        }


           // DisplayName1()
        get DisplayName()
         {
            return `${this.firstName} ${this.lastName}`    
         }
    //inte optimal , men har alternativ
        set DisplayName(value) {
            const names = value.split(' ')
            this.firstName = names[0]
            this.lastName = names[1]        }
    }
    
    const person = new Person('Nata','Lisjö')
   // console.log(person.DisplayName1())    
    person.DisplayName1 = 'Kalle Anka'    
    console.log(person.DisplayName1)//kan modifieras
    console.log(person.firstName)
    console.log(person.lastName)
    console.log('---------------------')
     console.log(person.DisplayName)
     person.DisplayName = 'Kalle Anka'    
    console.log(person.DisplayName)//kan inte modifieras
    person.firstName='Max'      //men kan modifieras här
    console.log(person.firstName) 
    console.log(person.DisplayName)
    console.log('------- ++set displayname--------------')
    console.log(person.DisplayName)
    person.DisplayName = 'Kalle Anka'    
   console.log(person.DisplayName)//kan modifieras i set
   person.firstName='Max'      //men kan modifieras här
   console.log(person.firstName) 
   console.log(person.DisplayName)
   //c# set return value=firstname