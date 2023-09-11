const prompt = require("prompt-sync")(); // with this i have the possibility to write in the console

console.log("Welcome to the computer hardware quiz!");

const answer1 = prompt("What is the brain of the computer? "); // so in the console i can write
const correct_answer1 = "CPU";

if (answer1 === correct_answer1) {
  console.log("you got it correct!");
}
