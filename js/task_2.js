// Task 2
console.log("/////Task 2");
class User2 {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getName(isAdmin) {
    if (this.#name.length >= 1) {
      return isAdmin ? this.#name : "Permission denied";
    } else {
      return isAdmin ? this.login : "Permission denied";
    }
  }
}

let user21 = new User2("Mike", "MK_18", 18);
let user22 = new User2("", "NRG", 22);

console.log(user21.getName(false));
console.log(user21.getName(true));
console.log(user22.getName(false));
console.log(user22.getName(true));
