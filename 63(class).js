// function user(name, age) {
//   // console.log(name, age);
//   const getFullinfo = () => `${name} - ${age}`;

//   return { name, age, getFullinfo };
// }

// const user1 = user("dgdfd", 12);
// const user2 = user("jkgjkb", 12);

// // console.log(user1.getFullinfo());

class User {
  /* перменные или более правильно свойства класса */
  name = null;
  age = null;

  /* работает как и user */
  constructor(name, age) {
    // console.log('t', this); //  this видит сам класс и выводит его полностью и конечно же у this есть доступ к переменным и через него мы можем обращаться к ним и изменять

    this.name = name;
    this.age = age;
  }
  //функция или правильно говорить метод класса
  getFullinfo = () => `${this.name} - ${this.age}`;
}

const userNew1 = new User("dgdfd", 15); // User { name: 'dgdfd', age: 15 } // экземпляр класса User
const userNew2 = new User("jkgjkb", 15); // User { name: 'jkgjkb', age: 15 } //экземпляр класса User

console.log(userNew1);

// /* console.log(
//   userNew1
// ); /* если вызвать User с одним constructor и больши ничего в нем не будет то будет пустой объект*/

// class Product {
//   name = null;
//   price = null;

//   constructor({ itemName, itemPrice }) {   // здесь можно упростить передав только (data)
//     this.name = itemName; // соответственно будет data.itemName (через деструктуризацию)
//     this.price = itemPrice; // соответственно будет data.itemPrice
//   }

//   getFull = () => `${this.name} стоит: ${this.price} Руб.`;
// }

// const banana = new Product({ itemName: "Банан", itemPrice: 100 }); //если по отдельности передаем свойства то они должны совпадать с параметрами в конструкторе

// console.log(banana.getFull());

//***************
//  наследование
//***************

//наследует свойства класса User
//так же можно добавлять функции которые нужны только классу админ(например функция блокировки пользователя blockUser)
class Admin extends User {
  //появляется проблема: как теперь использовать конструктор(например нужно идентифицировать айдишник админа) ?
  idAdmin = null;
  // нам пирходит на помощь такой метод как super()
  // вызывая супер по сути мы вызываем конструктор родителя
  constructor(name, age, id) {
    super(name, age);
    this.idAdmin = id;
  }

  blockUser = (id) => {};
}

console.log(new Admin("dfdf", 20, 3));

//**********************************************************************************

class Ball {
  ballType = null;

  constructor(type) {
    type === undefined ? (this.ballType = "regular") : (this.ballType = type);
  }
}
const a = new Ball();


console.log(a.ballType);
