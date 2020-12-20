class Animal {
    //sound = 'generic sound'--används om jag satt inte WWOOWW
    constructor(name, age, sound = 'generic sound') {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.age = age      
        this.sound = sound      
    }

    makeSound() {
        return `${this.name} says ${this.sound}!`
    }
}
// const animal = new Animal('ranini')
// console.log(animal)
// console.log(animal.makeSound)
class Dog extends Animal {
    constructor(name, age, sound) {
        super(name, age, sound)
        //super()
        // this.name = name
        // this.age = age  
    }
}

class Cat extends Animal {
    constructor(name, age, sound, lives) {
        super(name, age, sound)

        this.lives = lives//specefic for cat
    }

    numberOfLives() {
        return `${this.name} has ${this.lives} lives.`
    }
}
// const dog = new Dog('dogini', 13, 'wwaawf')
// console.log(dog)
// console.log(dog.makeSound())
const cat = new Cat('catini', 1, 'maouh', 9)
console.log(cat)
console.log(cat.makeSound())
console.log(cat.numberOfLives())

