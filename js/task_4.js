// // Task 4 (не работает)
console.log('/////Task 4')

class User4 {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getUserName() {
return this.#name
}
  
};

class Admin extends User4 {
  #isAdmin;
  constructor(name, login, age, isAdmin) {
    super(name, login, age);
    
    this.#isAdmin = isAdmin;
  }

  getUserName() {
  return this.name
}
  

};

let user14 = new Admin('Mike', 'MK_18', 18, true);

console.log(user14)

console.log(admin.getUserName(user14));