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


клас адмін має приймати юзера, у якого викликається метод який повертає ім"я

class Admin extends User{

  #isAdmin

  constructor(name, login, age){

    super(name, login, age)

    this.#isAdmin = true

  }

  getUserName(user){

    user.getName(this.#isAdmin)

  }

}

let admin = new Admin('Bob', 'God', 35);

admin.getUserName(user1);
