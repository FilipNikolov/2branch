// var day = prompt("What is the day today?");
// if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
//     console.log(`${day} is a working day.`);
// } else if (day === "Saturday" || day === "Sunday") {
//     console.log(`${day} is a weekend day.`);
// } else {
//     console.log(`${day} is an unknown day.`);
// }




// var day = prompt("What is the day today?")


// if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
//     console.log(`${day} is working day `);
// } else if (day === "Saturday" || day === "Nedelja") {
//     console.log(`${day} is weekend.`);
// }

// var weather = prompt("How is the weather today?");

// switch (weather) {
//     case "Cloudy":
//         console.log("Wear something that you warm you ")
//         break;
//     case "Rainy":
//         console.log("Dont forget to bring an umbrella ")
//         break;
//     case "Sunny":
//         console.log("Wear something light")
//         break;
// }



// var points = prompt("How many points you have?")

// if (points >= 0 && points <= 20) {
//     console.log(`${points} points is F`);
// } else if (points >= 21 && points <= 40) {
//     console.log(`${points} points is D`);
// } else if (points >= 41 && points <= 60) {
//     console.log(`${points} points is C`);
// } else if (points >= 61 && points <= 80) {
//     console.log(`${points} points is B`);
// } else if (points >= 81 && points <= 100) {
//     console.log(`${points} points is A`);
// }


// var number = prompt("Is a posotive or negative number?")
// switch (true) {
//     case number < 0:
//         console.log(`${number} is negative number.`)
//         break;

//     case number === 0:
//         console.log(`${number} is zero.`)
//         break;
//     case number > 0:
//         console.log(`${number} is positive number.`)
//         break;
//     default:
//         console.log("Invalid number")
//         break;


// }
var height = prompt("Height");
var allowed_height = 180;

if (height >= allowed_height) {
    console.log(`${height} is allow.`)
} else if (height < allowed_height) {
    console.log(`${height} is not allowed.`)
}