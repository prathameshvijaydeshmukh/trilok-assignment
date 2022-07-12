// document.write("trilok");

// 1.. multiply all ele with 5.
const rty = [1, 2, 3, 4, 5];
console.log("aaa");

// const multiarr = array.map((num) => {
//   //   console.log("num=", num * 5);
//   return num / 5;
// });

// // const multiarr = array.map((num) => num * 5);
// console.log(multiarr);

// const newarray = array.map((num) => {
//   if (num >= 3) {
//     return num * 2;
//   } else {
//     return num;
//   }
// });
// console.log(newarray);

// const newarray = rty.map((num) => {
//   if (num % 2 === 0) {
//     if (num > 2) {
//       return num * 20;
//     } else {
//       return num + 1;
//     }
//   } else {
//     return num;
//   }
// });
// console.log(newarray);

// const arr = ["trilok", 29, [1, 2], { name: "pratha", surname: "deshmukh" }];

// console.log("text", arr[3].surname);

// console.log("array=", arr[2].push(3));

// const newarray = [3, 4];

// const pushnumber = arr[2].push(...newarray);
// console.log("array=", arr);

// ]

// const array = [10, 20, 30, 40, 50];
// const multiarr = array.map((num) => {
//   return num * 10;
// });

// console.log(multiarr);

// filter function

// var ages = [10, 20, 30, 40, 50, 60];

// document.write(ages + "");

// var b = ages.filter(checkadult);
// document.write(b + "");

// function checkadult(age) {
//   return age >= 18;
// }

//object example keys values entries

// var person = {
//   name: "prathamesh",
//   age: 27,
//   address: "chennai",
//   phone: 88888888,
// };

// // console.log(person.name);
// console.log(Object.keys(person));
// console.log(Object.values(person));

// var a = {
//   fname: "yahoo",
//   lname: "baba",
//   age: 25,
//   email: "hello@gmail.com",
//   FavMovies: ["dhoom", "blubmaster", "sholay"],
//   living: {
//     city: "chandigrah",
//     country: "india",
//   },
//   salary: function () {
//     return 25000;
//   },
//   fullname: function () {
//     return this.fname + "" + this.lname;
//   },
// };

// // document.write(a);
// console.log(a);
// document.write(a.living.city);
// console.log(a.salary);

// var student = [
//   {
//     name: "ram",
//     age: 30,
//   },
//   {
//     name: "yogesh",
//     age: 34,
//   },

//   {
//     name: "prathamesh",
//     age: 20,
//   },
// ];

// console.log(student);

// // for(var a = 0)

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //check if the number is even
// if (number % 2 == 0) {
//   console.log("The number is even.");
// }

// // if the number is odd
// else {
//   console.log("The number is odd.");
// }

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isEven = (value) => value % 2 === 0;
// const isOdd = (value) => !isEven(value);
// const isPrime = (value) => {
//   for (let i = 2, s = Math.sqrt(value); i <= s; i++) {
//     if (value % i === 0) return false;
//   }

//   return value > 1;
// };

// const even = input.filter(isEven);
// const odd = input.filter(isOdd);
// const prime = input.filter(isPrime);

// console.log({ input, even, odd, prime });
// // /* result:
// // {
// //   input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   even: [2, 4, 6, 8, 10],
// //   odd: [1, 3, 5, 7, 9],
// //   prime: [2, 3, 5, 7],
// // }

// function sum(math, eng, sc) {
//   var s = math + eng + sc;

//   return s;
// }

// var total = sum(55, 65, 75);
// // document.write(total)
// console.log(total);

// array example

// var ary = [10, 20, 30, 40, 50];
// var sum = 0;
// document.write("<ul>");
// for (var a = 0; a <= 4; a++) {
//   document.write("<li>" + ary[a] + "</li>");
//   sum = sum + ary[a];
// }

// document.write("</ul>");
// document.write("Total sum : " + sum);

//second

// var ary = new Array();

// ary[0] = 10;
// ary[1] = "harry";
// ary[3] = true;

// document.write("<ul>");
// for (var a = 0; a < 5; a++) {
//   document.write("<li>" + ary[a] + "</li>");
// }
// // document.write("</ul>");

//prompt box example

// var ary = new Array(3);

// for (var g = 0; g < 3; g++) {
//   ary[g] = prompt("Enter the value :");
// }

// document.write("<ul>");
// for (var a = 0; a < 3; a++) {
//   document.write("<li>" + ary[a] + "</li>");
// }

//document.write("</ul>");

//concat example

var a = ["sanjay", "prathames", "varad"];
var b = ["rahul", "karan"];
// var d = ["Neha", "mahima"];

var c = a.concat(b);
document.write(c + "<br><br>");

var d = c.join("-");
document.write(d);
