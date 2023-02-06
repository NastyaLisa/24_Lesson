//Task 5
console.log("/////Task 5");
class User5 {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }
  getPhone2(isAdmin) {
    let hiddenPhone2 = this.#phone.split("").fill("*", 4, 10).join("");
    return isAdmin ? this.#phone : hiddenPhone2;
  }

  getPhone(isAdmin) {
    const phoneChange = this.#phone.split("-");
    const newPhone = [];

    for (let i = 0; i < phoneChange.length; i += 1) {
      if (i === 1) {
        newPhone.push("***");
      } else if (i === 2) {
        newPhone.push("**");
      } else {
        newPhone.push(phoneChange[i]);
      }
    }
    const hiddenPhone = newPhone.join("-");

    return isAdmin ? this.#phone : hiddenPhone;
  }
}

let user15 = new User5("Mike", "067-888-88-99");
let user25 = new User5("Tom", "099-555-55-77");

console.log(user15.getPhone(false));
console.log(user15.getPhone(true));
console.log(user25.getPhone(false));
console.log(user25.getPhone(true));

console.log(user15.getPhone2(false));
console.log(user15.getPhone2(true));
console.log(user25.getPhone2(false));
console.log(user25.getPhone2(true));
