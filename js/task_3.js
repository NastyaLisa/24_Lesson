// Task 3
console.log('/////Task 3')
class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  
  changeName(newName, password) {
  if (password === '123') {
    name = newName;
    return `Name changed from ${user1.#name} to ${newName}`;
  } else {
    return 'Permission denied';
  }
 };
};

let user1 = new User('Mike', 'MK_18', 18);

console.log(user1.changeName('Bill', '123'));
console.log(user1.changeName('Bill', '567'));