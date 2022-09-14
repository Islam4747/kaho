// ! ========== Поверхностное копирование

// let arr = ["Hello", "Bye", "Good"];
// // let newArr = arr;
// let newArr = [...arr];
// newArr[1] = "End";
// console.log(newArr);
// console.log(arr);

// ? Spread оператор используется также для поверхностного копирования

// let obj = {
//   model: "Apple",
//   memory: 128,
//   year: 2022,
//   details: {
//     color: "Sprace Grany",
//     camera: "Full HD",
//   },
// };
// // let newObj = { ...obj };
// let newObj = JSON.parse(JSON.stringify(obj));
// // console.log(newObj);
// newObj.model = "Samsung";
// newObj.details.camera = "Retina";
// console.log(obj);
// console.log(newObj);

// ? JSON.parse() и JSON.stingify()
// * JSON.stringify() преобразует переданный элемент в строку с форматом JSON. Затем JSON.parse() преобразует его обратно в обычный формат JS(JavaScript). Это позволяет выполнять глубокое копирование и для вложенных объектов, чего не происходит с поверхностным копированием (Spread operator)

// todo Минус в глубоком копировании в том, что методы объектов теряются

// let user1 = {
//   name: "Jony",
//   age: 23,
//   sayInfo: function () {
//     console.log(`Меня зовут ${this.name}, мне${this.age} года`);
//   },
// };
// console.log(user1);
// user1.sayInfo();

// let user2 = JSON.parse(JSON.stringify(user1));
// user2.name = "Kani";
// // user2.sayInfo();
// console.log(user2);

// ! let date = Date.now();
//  ! console.log(date);

// todo console.log(window);
