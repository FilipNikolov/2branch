// const people = [{
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]

// const FindOldest = (arr) => {
//     var OldestPerson;
//     var OldestAgeChange = 0;


//     for (var i = 0; i < arr.length; i++) {
//         var personAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
//         console.log(personAge)
//         if (personAge >= OldestAgeChange) {
//             OldestAgeChange = personAge;
//             OldestPerson = `The oldest person is ${arr[i].name} with ${personAge} years.`

//         };
//     }
//     return OldestPerson;

// }
// console.log(FindOldest(people))


// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;


// console.log(array1.reduce(reducer));

// const numbers = [-5, 12, 0, 4, -28, 78, -3, 17];

// const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
//     if (currentValue >= 0) {
//         const doubled = currentValue * 2;
//         previousValue.push(doubled);
//     }
//     return previousValue;
// }, []);

// console.log(doubledPositiveNumbers);

// class Car {
//     constructor(name, year, color) {
//         this.name = name;
//         this.year = year;
//         this.color = color
//     }
//     GetName() {
//         return `This is ${this.name}`
//     }
// }

// class Model extends Car {
//     constructor(name, model, year, color) {
//         super(name, year, color)
//         this.model = model
//     }
//     GetModel() {
//         return `This ${this.name} ${this.model} is realised in ${this.year} in ${this.color} color.`
//     }
// }
// class Engine extends Model {
//     constructor(name, model, year, engine, color) {
//         super(name, model, year, color)
//         this.engine = engine;
//     }
//     GetEngine() {
//         return `This ${this.name} ${this.model} is realised in ${this.year} year, with ${this.engine} engine, in ${this.color} color.`
//     }
// }

// const CarOne = new Engine("Merc", "E220", 2019, "2.1L 200hp", "Black");
// const CarTwo = new Model("Toyota", "Hilux", 2010, "Grey");
// const CarThree = new Car("Ford", 2005, "Blue");
// const CarFour = new Model("Dodge", "Challenger", 2000, "Red");

// console.log(CarTwo.GetModel());
// console.log(CarOne.GetEngine())



// let newDiv = document.createElement("div")
// console.log(newDiv);

// let newPar = document.createElement("p");

// newDiv.appendChild(newPar)
// let example = document.getElementById("example")
// console.log(example);
// let input = document.getElementById("idexample");
// // console.log(input)

// let examples = document.querySelectorAll(".examples");
// console.log(examples);

// let example = document.querySelectorAll(".example");
// console.log(example)
// "var res = 3.14;
// 1btn = ‘Javascript’;

// calc = 3 + 21;
// console.log(calc)
for (var i < 10);
console.log(i)