// // Task 4 (не работает)
console.log("/////Task 4");

class User4 {
  constructor(name, login, age) {
    this.name = name;
    this.login = login;
    this.age = age;
  }
}

class Admin extends User4 {
  #isAdmin;
  constructor(name, login, age, isAdmin) {
    super(name, login, age);

    this.#isAdmin = isAdmin;
  }
  getUserName() {
    return this.name;
  }
}

let admin = new Admin("Mike", "MK_18", 18, true);

console.log(admin.getUserName(admin));

