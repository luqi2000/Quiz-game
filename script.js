const prompt = require("prompt-sync")(); // with this i have the possibility to write in the console

console.log("Welcome to the computer hardware quiz!");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the brain of the computer? "); // so in the console i can write
const correctAnswer1 = "CPU";

if (answer1.toUpperCase() === correctAnswer1) {
  console.log("you got it correct!");
  correctAnswers++;
} else {
  console.log("you got it wrong!");
}

//-------------------------------------

const answer2 = prompt("What is better a 3090ti or a 4060? "); // so in the console i can write
const correctAnswer2 = "3090ti";

if (answer2.toLowerCase() === correctAnswer2) {
  console.log("you got it correct!");
  correctAnswers++;
} else {
  console.log("you got it wrong!");
}

//-------------------------------------

const answer3 = prompt("What is the reccomend amount of Ram in 2023? "); // so in the console i can write
const correctAnswer3 = "16GB";

if (answer3.toUpperCase() === correctAnswer3) {
  console.log("you got it correct!");
  correctAnswers++;
} else {
  console.log("you got it wrong!");
}

console.log("You got", correctAnswers, "questions correct!");

const percent = Math.round((correctAnswers / totalQuestions) * 100);
console.log("Your score", percent.toString + "%");
