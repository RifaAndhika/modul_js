// Parent Class
class Employee {
  #salary; // encapsulation

  constructor(name, baseSalary) {
    this.name = name;
    this.#salary = baseSalary;
  }

  // Getter (read only)
  get salary() {
    return this.#salary;
  }

  // Protected method (simulasi, biasanya buat subclass pakai)
  _setSalary(amount) {
    if (amount > 0) {
      this.#salary = amount;
    } else {
      console.log("Salary must be greater than 0");
    }
  }

  // Polymorphism → akan dioverride di subclass
  calculateBonus() {
    return this.#salary * 0.05; // default bonus 5%
  }
}

// Subclass Manager
class Manager extends Employee {
  constructor(name, baseSalary, teamSize) {
    super(name, baseSalary); // inheritance
    this.teamSize = teamSize;
  }

  // Polymorphism → override method
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

  // Polymorphism → override method
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

  // Polymorphism → override method
  calculateBonus() {
    return this.salary * 0.02 * this.durationMonths;
  }
}

// -----------------------------------
// Simulasi penggunaan di perusahaan
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
