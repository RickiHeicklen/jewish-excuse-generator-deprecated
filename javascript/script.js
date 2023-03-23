// const generateBtn = document.getElementById('generate-btn');
// const output = document.getElementById('output');
// const userInput = document.getElementById('user-input');
// const submitBtn = document.getElementById('submit-btn');
// const userOutput = document.getElementById('user-output');

// const strings = ['hello', 'world', 'how', 'are', 'you'];

// generateBtn.addEventListener('click', () =>


// Define an array of strings
const dates = ["day 1", "day 2", "day 3", "day 4"];
const excuses = ["String 1", "String 2", "String 3", "String 4"];

// Get the user input and display the random string
function generateRandomString() {
  const userInput = document.getElementById("user-input").value;
  const hebrewDate = dates[Math.floor(Math.random() * dates.length)];

  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  const output = `Sorry, I can't make it to ${userInput}. It's ${hebrewDate}, and ${randomExcuse}`;
  document.getElementById("output").innerHTML = output;
}