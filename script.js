// var greeting = "Hello";

// var num = 12342.234;

// var areYouAtHome = true;

// var dontKnow;

// var greetings = ["Hi", "Hello", "Good Morning"];
// var numArray = [1, 3, 5, 6, 7];
// //object JSON

// var sachinInfo = {
//   name: "Sachin",
//   age: 47,
//   bestScore: 210,
//   isActive: false,
//   topFiveRuns: [210, 186, 180, 145, 120],
//   debut: {
//     place: "wankhede",
//     score: 80,
//   },
// };

// var viratInfo = {
//   name: "Virat",
//   age: 30,
//   bestScore: 180,
// };

// var cricketers = [sachinInfo, viratInfo];

// console.log(cricketers);

// function sum(a, b) {
//   var res = a + b;
//   return res;
// }

// function mul(a, b) {
//   var res = a * b;
//   return res;
// }

// function calculation(opFun, a, b) {
//   return opFun(a, b);
// }

// var result = calculation(mul, 20, 50);
// console.log(result);

// function sumScores(runs) {
//   return runs.reduce(function (a, b) {
//     return a + b;
//   }, 0);
// }

// class Cricketer {
//   constructor(name, age, topScores) {
//     this.name = name;
//     this.age = age;
//     this.topFiveScores = topScores;
//   }

//   getAverage() {
//     var sum = sumScores(this.topFiveScores);
//     return sum / 5;
//   }
// }

// var sachin = new Cricketer("Sachin", 47, [210, 186, 180, 145, 120]);
// var msDhoni = new Cricketer("MS", 38, [183, 150, 180, 145, 120]);

// console.log(sachin.getAverage());

//document.write("Good Morning");

// var divElement = document.getElementById("root");
// var textNode = document.createTextNode("Good Morning!");

// divElement.appendChild(textNode);

// function addTodo() {
//   var todoTextBox = document.getElementById("todoTextBox");

//   var list = document.getElementById("todoList");

//   var liEle = document.createElement("li");
//   var textNode = document.createTextNode(todoTextBox.value);

//   liEle.appendChild(textNode);

//   list.appendChild(liEle);

//   todoTextBox.value = "";
// }
