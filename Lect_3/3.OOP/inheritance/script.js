/* ----Inheritance-----enkel */

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }}
class Dog extends Animal {      //:=extends
    constructor(name, age, forHunting) {
        super(name, age)   //måste i subclass
        this.forHunting = forHunting//++speciel
    }}
class Cat extends Animal {
    constructor(name, age) {
        super(name,age)
    }}


const dog = new Dog('Flexi', 23, true)
const cat = new Cat('Deexi', 12)

console.log(dog.name, dog.forHunting)
console.log(cat.name, cat.age, cat.forHunting)