class Animal {
    constructor(name, age, sound = 'generic sound') {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.age = age      
        this.sound = sound      
    }

    makeSound() {
        return `${this.name} says ${this.sound}!`
    }
}

class Dog extends Animal {
    constructor(name, age, sound) {
        super(name, age, sound)
    }
}

class Cat extends Animal {
    constructor(name, age, sound, lives) {
        super(name, age, sound)

        this.lives = lives
    }

    numberOfLives() {
        return `${this.name} has ${this.lives} lives.`
    }
}

const cat = new Cat('catini', 1, 'maouh', 9)
console.log(cat)
console.log(cat.makeSound())