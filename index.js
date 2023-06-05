class Cat { 
    constructor (name,age){
        this.name = name 
        this.age = age ;
       }
       speak() {
            return `${this.name} says meow!`
        }
    }

class Dog {
    constructor (name,age){
        this.name = name 
        this.age = age 
    } speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor (name,sex){
        this.name = name 
        this.sex = sex
    }
    speak(){
      if (this.sex === 'male'){return `It's me! ${this.name}, the parrot!`}
      else return `${this.name} says squawk!`}}
       
let cat = new Cat("kitty","female")
let dog = new Dog("Rambo","male")
let bird1 = new Bird("King", "male")
let bird2 = new Bird("Jogg", "female")
console.log(bird2.speak())