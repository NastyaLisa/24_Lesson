//Task 5
console.log('/////Task 5')
class User5 {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
   
  }
  getPhone(isAdmin) {
  const phoneChange =this.#phone.split('-');
const newPhone = [];

for (let i = 0; i < phoneChange.length; i+=1) {
  //  console.log(phoneChange[i])
  if (i === 1) {

    newPhone.push('***');
    
  }
else if (i === 2) {
    newPhone.push('**');
}
else {
    newPhone.push(phoneChange[i]);
    }
  }
 let hiddenPhone = newPhone.join('-');

      return isAdmin ? this.#phone : hiddenPhone;
    }

};

let user15 = new User5('Mike', '067-888-88-99');
let user25 = new User5('Tom', '099-555-55-77');

console.log(user15.getPhone(false));
console.log(user15.getPhone(true));
console.log(user25.getPhone(false));
console.log(user25.getPhone(true));