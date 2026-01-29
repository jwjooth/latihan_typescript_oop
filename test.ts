// soal 1
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}

  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person = new Person("Alice", 25);
console.log(person.introduce());
// Output: Hello, my name is Alice and I am 25 years old.

const person2 = new Person("Bob", 30);
console.log(person2.introduce());
// Output: Hello, my name is Bob and I am 30 years old.

// soal 2
class Car {
  brand: string;
  year: number;
  color?: string;

  constructor(brand: string, year: number, color?: string) {
    this.brand = brand;
    this.year = year;
    this.color = color ?? "color not specified";
  }

  getCarInfo(): string {
    return `${this.year} ${this.brand} (${this.color})`;
  }
}

const car1 = new Car("Toyota", 2020, "Red");
console.log(car1.getCarInfo());
// Output: 2020 Toyota (Red)

const car2 = new Car("Honda", 2022);
console.log(car2.getCarInfo());
// Output: 2022 Honda (color not specified)

// soal 3
class BankAccount {
  accountHolder: string;
  balance: number;

  constructor(accountHolder: string, balance?: number) {
    this.accountHolder = accountHolder;
    this.balance = balance ?? 0;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Alice");
console.log(account.getBalance()); // Output: 0

account.deposit(1000000);
console.log(account.getBalance()); // Output: 1000000

account.deposit(500000);
console.log(account.getBalance()); // Output: 1500000

// soal 4
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return `Some Sound`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return `Woof! Woof!`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.name); // Output: Buddy
console.log(dog.makeSound()); // Output: Woof! Woof!

const animal = new Animal("Generic");
console.log(animal.makeSound()); // Output: Some sound
