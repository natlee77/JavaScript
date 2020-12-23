/* OOP - Objektorienterad Programmering */

    /* 
        Encapsulation
        Inheritance
        Polymorphism
        Abstraction
        JS
        --------------
        Encapsulation
        Inheritance
        Polymorphism 
    */

/* Encapsulation (GET = READ, SET = WRITE) */
    class Product {
        constructor(name, desc, price) {
            this.name = name
            this.desc = desc
            this.price = price        }
        inStock() {
             return true        } 
        
    
    //     changeInStockStatus(status) {
    //         this.inStock = status
    //         return this.inStock
    //     }
         inclVat() {
            return this.price * 1.25     }
     }
    let product = new Product('Product 1', 'desc for product', 100)
    console.log(product)
    console.log(product.inStock)
    //can modify
    product.inStock = false
   // product.inStock = 'tadadaaaaa'
    console.log(product.inStock) 

    // product.changeInStockStatus(false)
    // console.log(product.inStock)

// måste skydda inclVat() med encapsulation
    console.log(product.inclVat)         //ett f.
    product.inclVat = '123123asdfasdf'   //ett värde skrivet över
     console.log(product.inclVat)       //ett värde


/*
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
    
        get DisplayName() {
            return `${this.firstName} ${this.lastName}`
        }
    
        set DisplayName(value) {
            const names = value.split(' ')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }
    
    const person = new Person('Hans','Mattin-Lassei')
    console.log(person.DisplayName)
    
    person.DisplayName = 'Kalle Anka'
    
    console.log(person.DisplayName)
    console.log(person.firstName)
    console.log(person.lastName)*/