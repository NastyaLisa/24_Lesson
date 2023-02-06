// Task 1
console.log("/////Task 1");
class User1 {
  #name1;
  constructor(name1, login1, age1) {
    this.#name1 = name1;
    this.login1 = login1;
    this.age1 = age1;
  }
}
let user11 = new User1("Mike", "MK_18", 18);
let user12 = new User1("", "NRG", 22);

console.log(user11.login1);
console.log(user11.age1);
console.log(user12.login1);
console.log(user12.age1);
