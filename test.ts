// soal 1
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}

  introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
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
    return `Some sound`;
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

// soal 5
class Employee {
  constructor(
    public name: string,
    public position: string,
    public salary: number,
  ) {}
}

class Manager extends Employee {
  teamSize: number;
  constructor(
    name: string,
    position: string,
    salary: number,
    teamSize: number,
  ) {
    super(name, position, salary);
    this.teamSize = teamSize;
  }
}

const manager = new Manager("Alice", "Engineering Manager", 100000000, 5);
console.log(manager.name); // Output: Alice
console.log(manager.position); // Output: Engineering Manager
console.log(manager.salary); // Output: 100000000
console.log(manager.teamSize); // Output: 5

// soal 6
class Rectangle {
  #width!: number;
  #height!: number;

  constructor(width: number, height: number) {
    this.setDimensions(width, height);
  }

  setDimensions(width: number, height: number) {
    this.#width = width;
    this.#height = height;
  }
  get area(): number {
    return this.#height * this.#width;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // Output: 200

rect.setDimensions(5, 10);
console.log(rect.area); // Output: 50

// soal 7
class Vehicle {
  constructor(public brand: string) {}
  getInfo(): string {
    return `This is a vehicle. It's a Motorcycle named ${this.brand}`;
  }
}

class Motorcycle extends Vehicle {
  constructor(public brand: string) {
    super(brand);
    super.getInfo();
  }
}

const bike = new Motorcycle("Harley Davidson");
console.log(bike.getInfo());
// Output: This is a vehicle. It's a Motorcycle named Harley Davidson

// soal 8
interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  constructor(public radius: number) {}
  draw(): void {
    console.log(`Drawing a circle with radius ${this.radius}`);
  }
}

const circle = new Circle(10);
circle.draw(); // Output: Drawing a circle with radius 10

// soal 9
class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
  ) {}
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
  }
}

const product = new Product(1, "Laptop", 15000000);
console.log(product.id); // Output: 1
console.log(product.name); // Output: Laptop
console.log(product.price); // Output: 15000000
console.log(product.getProductInfo());

// soal 10
class Shape {
  constructor(public size: number) {}
}

class Circlee extends Shape {}

class Square extends Shape {}

function identifyShape(shape: Shape) {
  if (shape instanceof Circlee) {
    console.log(`This is a Circle`);
  } else {
    console.log(`This is a Square`);
  }
}
const circlee = new Circlee(5);
const square = new Square(10);
identifyShape(circlee); // Output: This is a Circle
identifyShape(square); // Output: This is a Square

// soal 11
class BankAccountt {
  #accountNumber: string;
  #balance: number;
  accountHolder: string;
  constructor(accountHolder: string, accountNumber: string, balance: number) {
    this.accountHolder = accountHolder;
    this.#accountNumber = accountNumber;
    this.#balance = balance;
  }
  withdraw(amount: number) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const accountt = new BankAccountt("Alice", "123456", 1000000);
console.log(accountt.accountHolder); // Output: Alice
console.log(accountt.getBalance()); // Output: 1000000
accountt.withdraw(500000);
console.log(accountt.getBalance()); // Output: 500000
// account.balance = 999999; // Error: balance is private

// soal 12
class Animall {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  protected getInfo() {}
}

class Dogs extends Animall {
  protected getInfo(): void {}
  bark() {
    return `${this.name} is ${this.age} years old and says: Woof!`;
  }
}

const dogs = new Dogs("Buddy", 5);
console.log(dogs.bark()); // Output: Buddy is 5 years old and says: Woof!
// console.log(dog.name); // Error: name is protected

// soal 13
abstract class Shapee {
  abstract getArea(): number;
  abstract getPerimeter(): number;
  describe(): string {
    return `This is a shape`;
  }
}

class Circleee implements Shapee {
  constructor(public value: number) {}
  getPerimeter(): number {
    return 2 * (22 / 7) * this.value;
  }
  describe(): string {
    return `This is a shape`;
  }
  getArea(): number {
    return (22 / 7) * this.value ** 2;
  }
}

class Rectanglee implements Shapee {
  constructor(
    public width: number,
    public height: number,
  ) {}
  describe(): string {
    return `This is a shape`;
  }
  getArea(): number {
    return this.height * this.width;
  }
  getPerimeter(): number {
    return 2 * (this.height + this.width);
  }
}

const circleee = new Circleee(10);
console.log(circleee.getArea()); // Output: 314.16 (atau ~314)
console.log(circleee.getPerimeter()); // Output: 62.83 (atau ~63)
console.log(circleee.describe()); // Output: This is a shape

const rectt = new Rectanglee(10, 20);
console.log(rectt.getArea()); // Output: 200
console.log(rectt.getPerimeter()); // Output: 60

// soal 14
class Employees {
  constructor(
    public name: string,
    public baseSalary: number,
  ) {}
  getBonus(): number {
    return this.baseSalary * 0.1;
  }
}

class Managerr extends Employees {
  constructor(
    name: string,
    baseSalary: number,
    public bonus: number,
  ) {
    super(name, baseSalary);
  }
  override getBonus(): number {
    return this.baseSalary * 0.2;
  }
}

class Director extends Employees {
  constructor(
    name: string,
    baseSalary: number,
    public bonus: number,
  ) {
    super(name, baseSalary);
  }
  override getBonus(): number {
    return this.baseSalary * 0.3;
  }
}

function calculateBonusForEmployee(emp: Employees) {
  return emp.getBonus();
}

const emp = new Employees("Alice", 10000000);
const mgr = new Managerr("Bob", 20000000, 5);
const dir = new Director("Carol", 50000000, 3);

console.log(calculateBonusForEmployee(emp)); // Output: 1000000
console.log(calculateBonusForEmployee(mgr)); // Output: 4000000
console.log(calculateBonusForEmployee(dir)); // Output: 15000000

// soal 15
class Vehiclee {}

class Carr {
  constructor(
    public name: string,
    public wheels: number,
  ) {}
}

class Truck {
  constructor(
    public name: string,
    public capacity: number,
  ) {}
}

class Motorcyclee {
  constructor(
    public name: string,
    public engine: number,
  ) {}
}

function processVehicle(vehicle: Vehiclee) {
  if (vehicle instanceof Motorcyclee) {
    console.log(`This is a Motorcycle with ${vehicle.engine}cc engine`);
  } else if (vehicle instanceof Truck) {
    console.log(`This is a Truck with capacity ${vehicle.capacity} kg`);
  } else if (vehicle instanceof Carr) {
    console.log(`This is a Car with ${vehicle.wheels} wheels`);
  } else {
    console.log(undefined);
  }
}

const car = new Carr("Toyota", 4);
const truck = new Truck("Volvo", 6000);
const bikee = new Motorcyclee("Honda", 150);

processVehicle(car); // Output: This is a Car with 4 wheels
processVehicle(truck); // Output: This is a Truck with capacity 6000 kg
processVehicle(bikee); // Output: This is a Motorcycle with 150cc engine

// soal 16
interface Printable {
  print(): void;
}

interface Saveable {
  save(): void;
}

class Documents implements Printable, Saveable {
  constructor(
    public title: string,
    public content: string,
  ) {}
  print(): void {
    console.log(
      `Printing document: ${this.title} with content: ${this.content}`,
    );
  }
  save(): void {
    console.log(`Saving document: ${this.title}`);
  }
}

const doc = new Documents("My Document", "Hello World");
doc.print(); // Output: Printing document: My Document with content: Hello World
doc.save(); // Output: Saving document: My Document

// soal 17
class Counter {
  static count: number = 0;
  constructor(public name: string) {
    Counter.increment();
  }
  static increment() {
    this.count++;
  }
  static getCount(): number {
    return this.count;
  }
  getName() {
    return this.name;
  }
}

console.log(Counter.getCount()); // Output:
new Counter("Counter1");
console.log(Counter.getCount()); // Output: 1
new Counter("Counter2");
console.log(Counter.getCount()); // Output: 2
Counter.increment();
console.log(Counter.getCount()); // Output: 3

// soal 18
class User {
  static id: number = 0;
  constructor(
    public username: string,
    public email: string,
  ) {
    User.userCount++;
    User.id++;
  }
  static userCount: number = 0;
  static getTotalUsers(): number {
    return this.userCount;
  }
  getUserInfo(): string {
    return `User #${User.id} ${this.username} (${this.email})`;
  }
}

console.log(User.getTotalUsers()); // Output: 0

const user1 = new User("alice", "alice@example.com");
console.log(user1.getUserInfo()); // Output: User#1: alice (alice@example.com)
console.log(User.getTotalUsers()); // Output: 1

const user2 = new User("bob", "bob@example.com");
console.log(user2.getUserInfo()); // Output: User#2: bob (bob@example.com)
console.log(User.getTotalUsers()); // Output: 2

// soal 19
class ValidationError extends Error {
  constructor(public email: string) {
    super(`${email} is not a valid email`);
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.name = "ValidationError";
  }
}

class Userr {
  constructor(
    public name: string,
    public statusEmail: string,
  ) {}
  validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(this.statusEmail);
    if (!isValid) {
      throw new ValidationError(this.statusEmail);
    }
  }
}

try {
  const user = new Userr("alice", "invalid-email");
  user.validate();
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`Error: email is ${e.email} - Email format is not valid`);
    // Output: Error: email is invalid - Email format is not valid
  }
}

try {
  const user = new Userr("bob", "bob@example.com");
  user.validate();
  console.log("User is valid"); // Output: User is valid
} catch (e) {}

// soal 20
class Personn {
  constructor(public name: string) {}
  getName() {
    return `Hello, ${this.name}`;
  }
}

class Robot {
  constructor(public name: string) {}
  getName() {
    return `Hello, ${this.name}`;
  }
}

function greetSomeone(entity: { name: string; getName(): string }) {
  if (entity instanceof Personn) {
    return entity.getName();
  } else if (entity instanceof Robot) {
    return entity.getName();
  }
}

const personn = new Personn("Alice");
const robot = new Robot("R2D2");

console.log(greetSomeone(personn)); // Output: Hello, Alice
console.log(greetSomeone(robot)); // Output: Hello, R2D2

// soal 21
class Temperature {
  private _celcius: number = 0;
  constructor(celcius: number) {
    this.celcius = celcius;
  }

  get celcius(): number {
    return this._celcius;
  }

  set celcius(celcius: number) {
    if (celcius <= -273.15) {
      throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
    }
    this._celcius = celcius;
  }

  get fahrenheit(): number {
    return (this._celcius * 9) / 5 + 32;
  }

  set fahrenheit(fahrenheit: number) {
    if (fahrenheit <= -459.67) {
      throw new Error("Temperature cannot be below absolute zero (-459.67°F)");
    }
    this._celcius = ((fahrenheit - 32) * 5) / 9;
  }
}

const temp = new Temperature(0);
console.log(temp.celcius); // Output: 0
console.log(temp.fahrenheit); // Output: 32

temp.celcius = 100;
console.log(temp.fahrenheit); // Output: 212

try {
  temp.celcius = -300; // Akan throw error
} catch (e: any) {
  console.error(e.message); // Output: Temperature cannot be below absolute zero
}

// soal 22
class Vehicleee {
  constructor(
    public vehicle: string,
    public model: string,
    public battery: string,
  ) {}
  getDetails(): string {
    return `Vehicle: ${this.vehicle}, Type: ${LandVehicle.name}, Model: ${this.model}, Battery: ${this.battery} kWh`;
  }
}

class LandVehicle extends Vehicleee {
  constructor(vehicle: string, model: string, battery: string) {
    super(vehicle, model, battery);
  }
  getDetails(): string {
    return super.getDetails();
  }
}

class Carrr extends LandVehicle {
  constructor(vehicle: string, model: string, battery: string) {
    super(vehicle, model, battery);
  }
  getDetails(): string {
    return super.getDetails();
  }
}

class ElectricCar extends Carrr {
  constructor(vehicle: string, model: string, battery: string) {
    super(vehicle, model, battery);
  }
  getDetails(): string {
    return super.getDetails();
  }
}

const eCar = new ElectricCar("Tesla", "S", "50 kWh");
console.log(eCar.getDetails());
// Output: Vehicle: Tesla, Type: LandVehicle, Model: S, Battery: 50 kWh

// soal 23
interface Taxable {
  calculateTax(): number;
}

class Employeess implements Taxable {
  constructor(
    public name: string,
    public income: number,
  ) {}
  calculateTax(): number {
    return this.income * 0.1;
  }
}

class Freelancer implements Taxable {
  constructor(
    public name: string,
    public income: number,
  ) {}
  calculateTax(): number {
    return this.income * 0.15;
  }
}

class Corporation implements Taxable {
  constructor(
    public name: string,
    public income: number,
  ) {}
  calculateTax(): number {
    return this.income * 0.25;
  }
}

function calculateTotalTax(entities: Taxable[]): number {
  let total_tax = 0;
  for (let i = 0; i < entities.length; i++) {
    total_tax += entities[i].calculateTax();
  }
  return total_tax;
}

const entities: Taxable[] = [
  new Employeess("Alice", 100000000), // Tax: 10%
  new Freelancer("Bob", 50000000), // Tax: 15%
  new Corporation("PT Tech", 500000000), // Tax: 25%
];

console.log(calculateTotalTax(entities));
// Output: 142500000 (10M + 7.5M + 125M)

// soal 24
abstract class DataProcessor {
  abstract parse(): void;
  abstract transform(): void;
  abstract validate(): void;
  process(): void {
    (this.parse, this.transform, this.validate);
  }
}

class CSVProcessor extends DataProcessor {
  parse(): void {
    console.log("Parsing CSV file...");
  }
  transform(): void {
    console.log("Transforming CSV data...");
  }
  validate(): void {
    console.log("Validating CSV data...");
  }
  process(): void {
    (this.parse(), this.transform(), this.validate());
  }
}

class JSONProcessor extends DataProcessor {
  parse(): void {
    console.log("Parsing JSON file...");
  }
  transform(): void {
    console.log("Transforming JSON data...");
  }
  validate(): void {
    console.log("Validating JSON data...");
  }
  process(): void {
    (this.parse(), this.transform(), this.validate());
  }
}

const csvProcessor = new CSVProcessor();
csvProcessor.process();
// Output:
// Parsing CSV file...
// Transforming CSV data...
// Validating CSV data...

const jsonProcessor = new JSONProcessor();
jsonProcessor.process();
// Output:
// Parsing JSON file...
// Transforming JSON data...
// Validating JSON data...

// soal 25
abstract class Repository {
  protected validateId(id: number): boolean {
    if (id > 0) {
      return true;
    } else {
      return false;
    }
  }
  abstract getById(id: number): object;
  find(id: number): object | null{
    return {}
  }
}

class UserRepository extends Repository {
  protected validateId(id: number): boolean {
    
  }
  getById(id: number): object {
    
  }
  find(id: number): object | null {
    
  }
}

const repo = new UserRepository();

const user = repo.find(1);
console.log(user);  // Output: { id: 1, name: "User1" }

const invalid = repo.find(-1);
console.log(invalid);  // Output: null

// repo.validateId(1); // Error: validateId is protected