# UJIAN AKHIR KELULUSAN
## Mata Kuliah: TypeScript Object Oriented Programming
### Dosen: Eko Kurniawan Khannedy
**Nama Peserta:** Jordan Theovandy  
**Tanggal:** 29 Januari 2026
**Waktu:** 150 Menit  
**Passing Grade:** 70%

---

## BAGIAN I: EASY TO MEDIUM (10 Soal)
**Bobot: 30 Poin (3 poin per soal)**

### Soal 1: Membuat Class Dasar dengan Constructor
**Kesulitan:** Easy (3 poin)

Buatlah sebuah class `Person` dengan constructor yang menerima parameter `name` (string) dan `age` (number). Class ini harus memiliki method `introduce()` yang menampilkan: `"Hello, my name is [name] and I am [age] years old."`.

**Test Case:**
```typescript
const person = new Person("Alice", 25);
console.log(person.introduce());
// Output: Hello, my name is Alice and I am 25 years old.

const person2 = new Person("Bob", 30);
console.log(person2.introduce());
// Output: Hello, my name is Bob and I am 30 years old.
```

**Poin:** 3

---

### Soal 2: Properties dan Method Dasar
**Kesulitan:** Easy (3 poin)

Buatlah class `Car` dengan properties:
- `brand` (string, mandatory)
- `year` (number, mandatory)
- `color` (string, optional)

Tambahkan method `getCarInfo()` yang menampilkan informasi mobil dalam format: `"[year] [brand] ([color])"` atau `"[year] [brand] (color not specified)"` jika color tidak ada.

**Test Case:**
```typescript
const car1 = new Car("Toyota", 2020, "Red");
console.log(car1.getCarInfo());
// Output: 2020 Toyota (Red)

const car2 = new Car("Honda", 2022);
console.log(car2.getCarInfo());
// Output: 2022 Honda (color not specified)
```

**Poin:** 3

---

### Soal 3: Properties dengan Default Value
**Kesulitan:** Easy (3 poin)

Buatlah class `BankAccount` dengan properties:
- `accountHolder` (string, mandatory)
- `balance` (number, default value: 0)

Tambahkan method `deposit(amount: number)` yang menambah balance dan method `getBalance()` yang menampilkan saldo.

**Test Case:**
```typescript
const account = new BankAccount("Alice");
console.log(account.getBalance());  // Output: 0

account.deposit(1000000);
console.log(account.getBalance());  // Output: 1000000

account.deposit(500000);
console.log(account.getBalance());  // Output: 1500000
```

**Poin:** 3

---

### Soal 4: Inheritance Dasar
**Kesulitan:** Medium (3 poin)

Buatlah class `Animal` dengan properties `name` dan method `makeSound()` yang return `"Some sound"`.

Buatlah class `Dog` yang extends `Animal` dan override method `makeSound()` untuk return `"Woof! Woof!"`.

**Test Case:**
```typescript
const dog = new Dog("Buddy");
console.log(dog.name);          // Output: Buddy
console.log(dog.makeSound());   // Output: Woof! Woof!

const animal = new Animal("Generic");
console.log(animal.makeSound()); // Output: Some sound
```

**Poin:** 3

---

### Soal 5: Constructor dengan Super
**Kesulitan:** Medium (3 poin)

Buatlah class `Employee` dengan constructor menerima `name` (string), `position` (string), dan `salary` (number).

Buatlah class `Manager` yang extends `Employee` dan tambahkan property `teamSize` (number). Constructor `Manager` harus memanggil super constructor dan initialize `teamSize`.

**Test Case:**
```typescript
const manager = new Manager("Alice", "Engineering Manager", 100000000, 5);
console.log(manager.name);       // Output: Alice
console.log(manager.position);   // Output: Engineering Manager
console.log(manager.salary);     // Output: 100000000
console.log(manager.teamSize);   // Output: 5
```

**Poin:** 3

---

### Soal 6: Getter dan Setter Dasar
**Kesulitan:** Medium (3 poin)

Buatlah class `Rectangle` dengan properties `width` dan `height` (private). Buatlah getter untuk `area` yang menghitung luas (width * height), dan setter untuk mengubah `width` dan `height`.

**Test Case:**
```typescript
const rect = new Rectangle(10, 20);
console.log(rect.area);  // Output: 200

rect.setDimensions(5, 10);
console.log(rect.area);  // Output: 50
```

**Poin:** 3

---

### Soal 7: Method Overriding dengan Super Method
**Kesulitan:** Medium (3 poin)

Buatlah class `Vehicle` dengan method `getInfo()` yang return `"This is a vehicle"`.

Buatlah class `Motorcycle` yang extends `Vehicle` dan override method `getInfo()` untuk menambahkan informasi spesifik. Gunakan `super.getInfo()` untuk memanggil method parent.

**Test Case:**
```typescript
const bike = new Motorcycle("Harley Davidson");
console.log(bike.getInfo());
// Output: This is a vehicle. It's a Motorcycle named Harley Davidson
```

**Poin:** 3

---

### Soal 8: Interface Implementation
**Kesulitan:** Medium (3 poin)

Buatlah interface `Drawable` dengan method `draw(): void`.

Buatlah class `Circle` yang implements `Drawable` dengan properties `radius` dan method `draw()` yang menampilkan: `"Drawing a circle with radius [radius]"`.

**Test Case:**
```typescript
const circle = new Circle(10);
circle.draw();  // Output: Drawing a circle with radius 10
```

**Poin:** 3

---

### Soal 9: Parameter Properties
**Kesulitan:** Medium (3 poin)

Buatlah class `Product` menggunakan Parameter Properties untuk constructor yang menerima `id` (number), `name` (string), dan `price` (number). Tambahkan method `getProductInfo()`.

**Test Case:**
```typescript
const product = new Product(1, "Laptop", 15000000);
console.log(product.id);      // Output: 1
console.log(product.name);    // Output: Laptop
console.log(product.price);   // Output: 15000000
```

**Poin:** 3

---

### Soal 10: Operator instanceof
**Kesulitan:** Medium (3 poin)

Buatlah class `Shape`, `Circle` extends `Shape`, dan `Square` extends `Shape`.

Buatlah function `identifyShape(shape: Shape)` yang menggunakan `instanceof` untuk mengidentifikasi tipe shape dan menampilkan pesan yang sesuai.

**Test Case:**
```typescript
const circle = new Circle(5);
const square = new Square(10);

identifyShape(circle); // Output: This is a Circle
identifyShape(square); // Output: This is a Square
```

**Poin:** 3

---

## BAGIAN II: MEDIUM TO HARD (10 Soal)
**Bobot: 35 Poin (3.5 poin per soal)**

### Soal 11: Visibility Modifier (public, private, protected)
**Kesulitan:** Medium (3.5 poin)

Buatlah class `BankAccount` dengan:
- `accountNumber` (private)
- `balance` (private)
- `accountHolder` (public)
- Method `withdraw(amount: number)` (public) yang validasi balance sebelum withdraw
- Method `getBalance()` (public) yang return balance

Pastikan private properties tidak bisa diakses langsung dari luar.

**Test Case:**
```typescript
const account = new BankAccount("Alice", "123456", 1000000);
console.log(account.accountHolder);  // Output: Alice
console.log(account.getBalance());   // Output: 1000000

account.withdraw(500000);
console.log(account.getBalance());   // Output: 500000

// account.balance = 999999; // Error: balance is private
```

**Poin:** 3.5

---

### Soal 12: Protected Member dan Child Class Access
**Kesulitan:** Medium (3.5 poin)

Buatlah class `Animal` dengan:
- `name` (protected)
- `age` (protected)
- Method `getInfo()` (protected) yang return informasi

Buatlah class `Dog` extends `Animal` yang bisa mengakses protected members dari parent dan tambahkan method `bark()`.

**Test Case:**
```typescript
const dog = new Dog("Buddy", 5);
console.log(dog.bark());  // Output: Buddy is 5 years old and says: Woof!
// console.log(dog.name); // Error: name is protected
```

**Poin:** 3.5

---

### Soal 13: Abstract Class dan Implementation
**Kesulitan:** Hard (3.5 poin)

Buatlah abstract class `Shape` dengan:
- Abstract method `getArea(): number`
- Abstract method `getPerimeter(): number`
- Concrete method `describe()` yang menampilkan: `"This is a shape"`

Buatlah class `Circle` dan `Rectangle` yang mengimplement abstract methods tersebut.

**Test Case:**
```typescript
const circle = new Circle(10);
console.log(circle.getArea());      // Output: 314.16 (atau ~314)
console.log(circle.getPerimeter()); // Output: 62.83 (atau ~63)
console.log(circle.describe());     // Output: This is a shape

const rect = new Rectangle(10, 20);
console.log(rect.getArea());        // Output: 200
console.log(rect.getPerimeter());   // Output: 60
```

**Poin:** 3.5

---

### Soal 14: Polymorphism - Method dengan Parent Class Parameter
**Kesulitan:** Hard (3.5 poin)

Buatlah class `Employee` dengan method `getBonus(): number` yang return `baseSalary * 0.1`.

Buatlah class `Manager` dan `Director` yang extends `Employee` dan override method `getBonus()` dengan logika berbeda (Manager: 0.2, Director: 0.3).

Buatlah function `calculateBonusForEmployee(emp: Employee)` yang bisa menerima berbagai tipe employee dan hitung bonus mereka.

**Test Case:**
```typescript
const emp = new Employee("Alice", 10000000);
const mgr = new Manager("Bob", 20000000, 5);
const dir = new Director("Carol", 50000000, 3);

console.log(calculateBonusForEmployee(emp));   // Output: 1000000
console.log(calculateBonusForEmployee(mgr));   // Output: 4000000
console.log(calculateBonusForEmployee(dir));   // Output: 15000000
```

**Poin:** 3.5

---

### Soal 15: Type Cast dan instanceof
**Kesulitan:** Hard (3.5 poin)

Buatlah class `Vehicle`, `Car`, `Truck`, dan `Motorcycle` dengan inheritance yang sesuai.

Buatlah function `processVehicle(vehicle: Vehicle)` yang menggunakan `instanceof` dan type cast untuk menampilkan informasi spesifik untuk setiap jenis vehicle.

**Test Case:**
```typescript
const car = new Car("Toyota", 4);
const truck = new Truck("Volvo", 6000);
const bike = new Motorcycle("Honda", 150);

processVehicle(car);   // Output: This is a Car with 4 wheels
processVehicle(truck); // Output: This is a Truck with capacity 6000 kg
processVehicle(bike);  // Output: This is a Motorcycle with 150cc engine
```

**Poin:** 3.5

---

### Soal 16: Multiple Interface Implementation
**Kesulitan:** Hard (3.5 poin)

Buatlah interface `Printable` dengan method `print(): void`.
Buatlah interface `Saveable` dengan method `save(): void`.

Buatlah class `Document` yang implements kedua interface tersebut dan tambahkan properties `title` dan `content`.

**Test Case:**
```typescript
const doc = new Document("My Document", "Hello World");
doc.print();  // Output: Printing document: My Document with content: Hello World
doc.save();   // Output: Saving document: My Document
```

**Poin:** 3.5

---

### Soal 17: Static Member Properties dan Methods
**Kesulitan:** Hard (3.5 poin)

Buatlah class `Counter` dengan:
- Static property `count: number` (default: 0)
- Static method `increment()` yang menambah count
- Static method `getCount()` yang return count
- Instance method `getName()` yang return nama counter

**Test Case:**
```typescript
console.log(Counter.getCount());  // Output: 0

new Counter("Counter1");
console.log(Counter.getCount());  // Output: 1

new Counter("Counter2");
console.log(Counter.getCount());  // Output: 2

Counter.increment();
console.log(Counter.getCount());  // Output: 3
```

**Poin:** 3.5

---

### Soal 18: Static Method dan Instance Method Interaction
**Kesulitan:** Hard (3.5 poin)

Buatlah class `User` dengan:
- Static property `userCount: number` (default: 0)
- Static method `getTotalUsers(): number`
- Property `id`, `username`, `email`
- Constructor yang auto-increment static userCount
- Instance method `getUserInfo(): string`

**Test Case:**
```typescript
console.log(User.getTotalUsers());  // Output: 0

const user1 = new User("alice", "alice@example.com");
console.log(user1.getUserInfo());   // Output: User#1: alice (alice@example.com)
console.log(User.getTotalUsers());  // Output: 1

const user2 = new User("bob", "bob@example.com");
console.log(user2.getUserInfo());   // Output: User#2: bob (bob@example.com)
console.log(User.getTotalUsers());  // Output: 2
```

**Poin:** 3.5

---

### Soal 19: Error Handling dengan Custom Error Class
**Kesulitan:** Hard (3.5 poin)

Buatlah class `ValidationError` yang extends `Error` dengan property `fieldName: string`.

Buatlah class `User` dengan method `validate()` yang throw `ValidationError` jika email format tidak valid. Implementasikan try-catch untuk menangani error tersebut.

**Test Case:**
```typescript
try {
  const user = new User("alice", "invalid-email");
  user.validate();
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`Error: ${e.fieldName} is invalid - ${e.message}`);
    // Output: Error: email is invalid - Email format is not valid
  }
}

try {
  const user = new User("bob", "bob@example.com");
  user.validate();
  console.log("User is valid");  // Output: User is valid
} catch (e) {
  // No error
}
```

**Poin:** 3.5

---

### Soal 20: Structural Typing / Duck Typing
**Kesulitan:** Hard (3.5 poin)

Buatlah class `Person` dengan properties `name` dan method `getName()`.
Buatlah class `Robot` dengan properties `name` dan method `getName()` (struktur sama).

Buat function `greetSomeone(entity: { name: string; getName(): string })` yang bisa menerima instance dari class manapun asalkan struktur sama.

**Test Case:**
```typescript
const person = new Person("Alice");
const robot = new Robot("R2D2");

console.log(greetSomeone(person));  // Output: Hello, Alice
console.log(greetSomeone(robot));   // Output: Hello, R2D2
```

**Poin:** 3.5

---

## BAGIAN III: HARD TO ADVANCED (10 Soal)
**Bobot: 35 Poin (3.5 poin per soal)**

### Soal 21: Getter dan Setter dengan Validasi Kompleks
**Kesulitan:** Hard (3.5 poin)

Buatlah class `Temperature` dengan:
- Private property `_celsius`
- Getter `celsius` yang return nilai
- Setter `celsius` yang validasi nilai harus >= -273.15 (absolute zero)
- Getter `fahrenheit` yang convert ke Fahrenheit
- Setter `fahrenheit` yang validasi dan convert ke Celsius

**Test Case:**
```typescript
const temp = new Temperature(0);
console.log(temp.celsius);          // Output: 0
console.log(temp.fahrenheit);       // Output: 32

temp.celsius = 100;
console.log(temp.fahrenheit);       // Output: 212

try {
  temp.celsius = -300;  // Akan throw error
} catch (e) {
  console.log(e.message);  // Output: Temperature cannot be below absolute zero
}
```

**Poin:** 3.5

---

### Soal 22: Complex Inheritance dengan Multiple Levels
**Kesulitan:** Hard (3.5 poin)

Buatlah hierarchy class:
- `Vehicle` (base class)
- `LandVehicle` extends `Vehicle`
- `Car` extends `LandVehicle`
- `ElectricCar` extends `Car`

Setiap class harus memiliki method `getDetails()` yang menampilkan informasi spesifik dan menggunakan `super.getDetails()`.

**Test Case:**
```typescript
const eCar = new ElectricCar("Tesla", "S", "50 kWh");
console.log(eCar.getDetails());
// Output: Vehicle: Tesla, Type: LandVehicle, Model: S, Battery: 50 kWh
```

**Poin:** 3.5

---

### Soal 23: Advanced Polymorphism dengan Array Processing
**Kesulitan:** Hard (3.5 poin)

Buatlah interface `Taxable` dengan method `calculateTax(): number`.

Buatlah class `Employee`, `Freelancer`, dan `Corporation` yang implements `Taxable` dengan logic pajak berbeda.

Buatlah function `calculateTotalTax(entities: Taxable[])` yang menghitung total pajak dari array yang berisi tipe-tipe berbeda.

**Test Case:**
```typescript
const entities: Taxable[] = [
  new Employee("Alice", 100000000),      // Tax: 10%
  new Freelancer("Bob", 50000000),       // Tax: 15%
  new Corporation("PT Tech", 500000000)  // Tax: 25%
];

console.log(calculateTotalTax(entities));
// Output: 150000000 (10M + 7.5M + 125M)
```

**Poin:** 3.5

---

### Soal 24: Abstract Class dengan Template Method Pattern
**Kesulitan:** Hard (3.5 poin)

Buatlah abstract class `DataProcessor` dengan:
- Abstract method `parse(): void`
- Abstract method `transform(): void`
- Abstract method `validate(): void`
- Concrete method `process()` yang memanggil ketiga method di atas dalam urutan tertentu

Buatlah class `CSVProcessor` dan `JSONProcessor` yang mengimplementasikan setiap abstract method.

**Test Case:**
```typescript
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
```

**Poin:** 3.5

---

### Soal 25: Visibility dengan Abstract Class dan Inheritance
**Kesulitan:** Hard (3.5 poin)

Buatlah abstract class `Repository` dengan:
- Protected method `validateId(id: number): boolean` yang validasi id > 0
- Abstract method `getById(id: number): object`
- Public method `find(id: number): object | null` yang gunakan protected method

Buatlah class `UserRepository` yang extends `Repository` dan implementasikan abstract method.

**Test Case:**
```typescript
const repo = new UserRepository();

const user = repo.find(1);
console.log(user);  // Output: { id: 1, name: "User1" }

const invalid = repo.find(-1);
console.log(invalid);  // Output: null

// repo.validateId(1); // Error: validateId is protected
```

**Poin:** 3.5

---

### Soal 26: Static Method dengan Factory Pattern
**Kesulitan:** Hard (3.5 poin)

Buatlah class `Shape` dengan static method `create(type: string, ...args)` yang berfungsi sebagai factory untuk membuat berbagai jenis shape (Circle, Square, Triangle).

Setiap shape harus memiliki method `getArea()`.

**Test Case:**
```typescript
const circle = Shape.create("circle", 10);
console.log(circle.getArea());  // Output: 314.16 (atau ~314)

const square = Shape.create("square", 5);
console.log(square.getArea());  // Output: 25

const triangle = Shape.create("triangle", 10, 8);
console.log(triangle.getArea()); // Output: 40
```

**Poin:** 3.5

---

### Soal 27: Namespace dan Code Organization
**Kesulitan:** Hard (3.5 poin)

Buatlah namespace `Models` yang berisi class `User` dan `Product`.
Buatlah namespace `Services` yang berisi class `UserService` dan `ProductService` yang menggunakan class dari `Models`.

**Test Case:**
```typescript
const user = new Models.User("Alice", "alice@example.com");
const userService = new Services.UserService();

userService.registerUser(user);
console.log(userService.getUser(1));  // Output: User{name: Alice, email: alice@example.com}

const product = new Models.Product("Laptop", 15000000);
const productService = new Services.ProductService();

productService.addProduct(product);
console.log(productService.listProducts());  // Output: [Product{ name: Laptop, price: 15000000 }]
```

**Poin:** 3.5

---

### Soal 28: Chaining Method Pattern
**Kesulitan:** Hard (3.5 poin)

Buatlah class `QueryBuilder` yang implements method chaining untuk membuat query:
- Method `select(...fields: string[]): this`
- Method `where(condition: string): this`
- Method `orderBy(field: string, direction: "asc" | "desc"): this`
- Method `limit(n: number): this`
- Method `build(): string`

**Test Case:**
```typescript
const query = new QueryBuilder()
  .select("id", "name", "email")
  .where("age > 18")
  .orderBy("name", "asc")
  .limit(10)
  .build();

console.log(query);
// Output: SELECT id, name, email WHERE age > 18 ORDER BY name asc LIMIT 10
```

**Poin:** 3.5

---

### Soal 29: Generic-like Pattern dengan Polymorphism (Advanced)
**Kesulitan:** Advanced (3.5 poin)

Buatlah class `Repository<T>` (generic-like pattern tanpa syntax generic) yang dapat:
- Menyimpan item dalam array internal
- Method `add(item: any): void`
- Method `getAll(): any[]`
- Method `getById(id: number): any`
- Method `update(id: number, item: any): void`
- Method `delete(id: number): void`

Gunakan polymorphism untuk test dengan User dan Product.

**Test Case:**
```typescript
const userRepo = new Repository();
userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });

console.log(userRepo.getAll().length);  // Output: 2
console.log(userRepo.getById(1));       // Output: { id: 1, name: "Alice" }

userRepo.update(1, { id: 1, name: "Alice Updated" });
console.log(userRepo.getById(1));       // Output: { id: 1, name: "Alice Updated" }

userRepo.delete(2);
console.log(userRepo.getAll().length);  // Output: 1
```

**Poin:** 3.5

---

### Soal 30: BONUS COMPREHENSIVE - Complete OOP System
**Kesulitan:** Advanced (3.5 poin)

**FINAL COMPREHENSIVE EXAM**

Buatlah sebuah sistem manajemen perusahaan dengan requirement:

1. **Abstract Base Class `Person`** dengan:
   - Protected properties: `id`, `name`, `email`
   - Abstract method `getRole(): string`
   - Concrete method `getInfo(): string`

2. **Class `Employee` extends `Person`** dengan:
   - Properties: `salary`, `department`
   - Method `getRole()` return "Employee"
   - Method `calculateBonus(): number` (10% of salary)
   - Method `getDetails()`: return info lengkap

3. **Class `Manager` extends `Employee`** dengan:
   - Property: `teamSize`
   - Override `calculateBonus()` (20% of salary)
   - Override `getRole()` return "Manager"
   - Method `getTeamInfo()`: return info tim

4. **Class `Director` extends `Manager`** dengan:
   - Property: `budget`
   - Override `calculateBonus()` (30% of salary)
   - Override `getRole()` return "Director"

5. **Interface `Manageable`** dengan method:
   - `addMember(person: Person): void`
   - `removeMember(id: number): void`
   - `getMembers(): Person[]`

6. **Class `Department` implements `Manageable`** dengan:
   - Properties: `name`, `members`
   - Implementasi semua method dari interface
   - Method `getTotalBonus()`: sum bonus semua member
   - Method `getDepartmentInfo()`: info detail department

7. **Namespace `Company`** dengan:
   - Class dan interface di dalam namespace
   - Static utility class dengan method untuk create dan manage

**Test Case:**
```typescript
// Create objects
const emp1 = new Company.Employee(1, "Alice", "alice@company.com", 50000000, "Engineering");
const emp2 = new Company.Employee(2, "Bob", "bob@company.com", 40000000, "Engineering");
const mgr = new Company.Manager(3, "Carol", "carol@company.com", 100000000, "Engineering", 5);
const dir = new Company.Director(4, "David", "david@company.com", 200000000, "Engineering", 20, 1000000000);

// Create department
const engDept = new Company.Department("Engineering");
engDept.addMember(emp1);
engDept.addMember(emp2);
engDept.addMember(mgr);
engDept.addMember(dir);

// Test polymorphism
const people: Company.Person[] = [emp1, emp2, mgr, dir];
people.forEach(p => {
  console.log(`${p.getInfo()} - Role: ${p.getRole()}`);
});

// Test department
console.log(engDept.getDepartmentInfo());
// Output: Engineering Department has 4 members

console.log(`Total Bonus: Rp${engDept.getTotalBonus()}`);
// Output: Total Bonus: Rp125000000 (5M + 4M + 20M + 60M)

// Test instanceof
people.forEach(p => {
  if (p instanceof Company.Director) {
    console.log(`${p.name} is a Director with budget: ${p.budget}`);
  } else if (p instanceof Company.Manager) {
    console.log(`${p.name} is a Manager with team of ${p.teamSize}`);
  } else {
    console.log(`${p.name} is an Employee`);
  }
});

// Test error handling
try {
  const invalidEmp = new Company.Employee(0, "Invalid", "invalid@company.com", 0, "");
  // Should validate that id > 0, salary > 0, etc.
} catch (e) {
  console.log(`Error: ${e.message}`);
}
```

**Requirement Detail:**
- Gunakan visibility modifier dengan tepat (private, protected, public)
- Implement inheritance dengan benar (extends dan implements)
- Gunakan polymorphism dengan method overriding
- Gunakan instanceof dan type casting di mana diperlukan
- Implement error handling untuk validasi input
- Gunakan namespace untuk code organization
- Semua method harus return nilai atau void yang sesuai
- Constructor validation untuk semua class

**Poin:** 3.5

---

## KRITERIA PENILAIAN

| Rentang Nilai | Grade | Keterangan |
|--------------|-------|-----------|
| 90 - 100 | A | Excellent - Siap ke TypeScript Generic |
| 80 - 89 | B+ | Very Good - Siap ke TypeScript Generic |
| 70 - 79 | B | Good - Siap ke TypeScript Generic |
| 60 - 69 | C+ | Satisfactory - Review beberapa materi |
| 50 - 59 | C | Fair - Butuh review lebih mendalam |
| < 50 | D | Poor - Butuh remedial |

---

## CATATAN PENTING UNTUK PESERTA

1. **Inheritance:** Pastikan extends dan super digunakan dengan benar
2. **Visibility:** Pahami perbedaan public, private, dan protected
3. **Abstract Class:** Jangan lupa bahwa abstract class tidak bisa di-instantiate
4. **Polymorphism:** Manfaatkan inheritance untuk mengurangi code duplication
5. **Error Handling:** Implementasikan try-catch untuk error scenarios
6. **Type Safety:** Gunakan instanceof sebelum type casting
7. **Code Organization:** Gunakan namespace untuk organize class yang banyak

---

## DAFTAR MATERI YANG DIUJI

✅ Membuat Class dengan Constructor  
✅ Properties dan Method  
✅ Properties dengan Default Value  
✅ Inheritance (Class extends Class)  
✅ Constructor dengan super()  
✅ Method Overriding  
✅ Super Method Call  
✅ Getter dan Setter  
✅ Visibility Modifier (public, private, protected)  
✅ Parameter Properties  
✅ Operator instanceof  
✅ Interface Implementation (implements)  
✅ Multiple Interface Implementation  
✅ Polymorphism dan Casting  
✅ Abstract Class dan Abstract Method  
✅ Static Properties dan Static Method  
✅ Error Handling dengan Custom Error  
✅ Namespace dan Code Organization  
✅ Method Chaining Pattern  
✅ Factory Pattern  
✅ Structural Typing (Duck Typing)  
✅ Complex Getter/Setter dengan Validasi  
✅ Multiple Level Inheritance  
✅ Template Method Pattern  

---

**Selamat mengerjakan! Semoga berhasil dan siap untuk mempelajari TypeScript Generic!** 🚀