/* ------Polymorphism-------skriva over saker med speciel---- */

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age    }
//method
    makeSound() {
        console.log(` the sound from the parent class:`)
    }

    connectToDatabase() {
        console.log(`Connecting to database`)
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)    }        
    //skriver over
    makeSound(){
        super.makeSound()//bas class 
        //console.log(`${this.name} says woof woof`)
        return `${this.name} says woof woof`
    }

    //exempel Microfoft bibliotek
    connect() {
        super.connectToDatabase()
        console.log(`${this.name} says db`)
    }
}

const dog = new Dog('Tindra', 23)
console.log(dog.makeSound)
//dog.makeSound()
console.log(dog.makeSound())
dog.connect()
//skriver over om jag har the same name f. i basclass och subclass
//c#= override