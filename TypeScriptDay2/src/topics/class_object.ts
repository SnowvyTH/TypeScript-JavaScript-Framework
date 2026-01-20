export const classObject = () => {
    class Person {
        name: string

        constructor(name: string) {
            this.name = name
        }

        greet(): string {
            return `hello, my name is ${this.name}`
        }
    }

    // สร้าง object จาก class Person
    const person1 = new Person('John')
    console.log(person1.greet())

    class Car {
        private speed: number = 0

        constructor(public brand: string) {}

        accelrate(amount: number): void {
            this.speed += amount
            console.log(`${this.brand} speed: ${this.speed} km/h`)
        }

    }

    const myCar = new Car("Toyota")
    myCar.accelrate(20)
   // myCar.speed = 50 // Error เพราะ speed เป็น private

   class Animal {
        protected name: string
        
        constructor(name: string) {
            this.name = name
        }

        makeSound(): void {
            console.log("Some sound")
        }
   }

   class Dog extends Animal {
        private age: number
        
        constructor(name: string, age: number){
            super(name)
            this.age = age
        }

        makeSound(): void {
            console.log("Woof!")
        }

        getInfo(): string {
            return `${this.name} is ${this.age} years old`
        }
   }

   const dog = new Dog("Buddy", 3)
   dog.makeSound()
   console.log(dog.getInfo())

   // Multiple Inheritance
   interface CanFly {
        fly(): void
   }

   interface CanSwim {
        swim(): void
   }

   class Bird implements CanFly {
        fly(): void {
            console.log("Flying")
        }
   }

   class Fish implements CanSwim {
        swim(): void {
            console.log("Swimming")
        }
   }

   class Duck implements CanFly, CanSwim {
        fly(): void {
            console.log("Duck is flying")
        }

        swim(): void {
            console.log("Duck is swimming")
        }
   }

   const bird = new Bird()
   bird.fly()

   const fish = new Fish()
   fish.swim()

   const duck = new Duck()
   duck.fly()
   duck.swim()
}