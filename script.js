const prompt = require("prompt-sync")(); // with this i have the possibility to write in the console

console.log("Welcome to the computer hardware quiz!");

const answer1 = prompt("What is the brain of the computer? "); // so in the console i can write
const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
  console.log("you got it correct!");
} else {
  console.log("you got it wrong!");
}

//-------------------------------------

const answer2 = prompt("What is better a 3090ti or a 4060? "); // so in the console i can write
const correct_answer2 = "3090ti";

if (answer2.toLowerCase() === correct_answer2) {
  console.log("you got it correct!");
} else {
  console.log("you got it wrong!");
}

//-------------------------------------

const answer3 = prompt("What is the reccomend amount of Ram in 2023? "); // so in the console i can write
const correct_answer3 = "16GB";

if (answer3.toUpperCase() === correct_answer3) {
  console.log("you got it correct!");
} else {
  console.log("you got it wrong!");
}
