//encapsulation menggunakan # di dalam class 

class BankAccount {
  #balance;
  constructor(name, balance) {
    this.name = name;
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log("Deposit harus lebih dari 0");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Saldo tidak cukup");
    }
  }
}

const account = new BankAccount("Rifa Andhika", 1000);

account.deposit(500); // ✅ tambah saldo
console.log(account.balance); // 1500

account.withdraw(500); // ✅ tarik saldo
console.log(account.balance); // 1300

// account.balance = 99999; ❌ tidak ada setter, jadi tidak bisa langsung ubah
