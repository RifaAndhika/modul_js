// Abstract Class (tidak untuk langsung dipakai)
class Employee {
  #salary; // Encapsulation

  constructor(name, baseSalary) {
    if (new.target === Employee) {
      throw new Error("Employee is an abstract class and cannot be instantiated directly!");
    }
    this.name = name;
    this.#salary = baseSalary;
  }

  // Getter (read-only)
  get salary() {
    return this.#salary;
  }

  // Protected method (hanya untuk subclass pakai)
  _setSalary(amount) {
    if (amount > 0) {
      this.#salary = amount;
    } else {
      console.log("Salary must be greater than 0");
    }
  }

  // Abstract Method → harus dioverride
  calculateBonus() {
    throw new Error("Subclass must implement calculateBonus()");
  }
}

// Subclass Manager
class Manager extends Employee {
  constructor(name, baseSalary, teamSize) {
    super(name, baseSalary);
    this.teamSize = teamSize;
  }

  calculateBonus() {
    return this.salary * 0.1 + this.teamSize * 100000;
  }
}

// Subclass Engineer
class Engineer extends Employee {
  constructor(name, baseSalary, level) {
    super(name, baseSalary);
    this.level = level;
  }

  calculateBonus() {
    return this.salary * (this.level === "senior" ? 0.15 : 0.07);
  }
}

// Subclass Intern
class Intern extends Employee {
  constructor(name, baseSalary, durationMonths) {
    super(name, baseSalary);
    this.durationMonths = durationMonths;
  }

  calculateBonus() {
    return this.salary * 0.02 * this.durationMonths;
  }
}

// -----------------------------
// Simulasi penggunaan
const employees = [
  new Manager("Andhika", 20000000, 5),
  new Engineer("Rifa", 15000000, "senior"),
  new Engineer("Dina", 10000000, "junior"),
  new Intern("Budi", 3000000, 3),
];

employees.forEach(emp => {
  console.log(
    `${emp.name} | Salary: Rp${emp.salary} | Bonus: Rp${emp.calculateBonus()}`
  );
});

// ❌ Kalau coba langsung
// const e = new Employee("Test", 1000000); // Error!
