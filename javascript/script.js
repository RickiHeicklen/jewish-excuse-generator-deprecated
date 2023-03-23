// const generateBtn = document.getElementById('generate-btn');
// const output = document.getElementById('output');
// const userInput = document.getElementById('user-input');
// const submitBtn = document.getElementById('submit-btn');
// const userOutput = document.getElementById('user-output');

// const strings = ['hello', 'world', 'how', 'are', 'you'];

// generateBtn.addEventListener('click', () =>


// Define an array of strings
const strings = ["String 1", "String 2", "String 3", "String 4"];

// Get the user input and display the random string
function generateRandomString() {
  const userInput = document.getElementById("user-input").value;
  const randomString = strings[Math.floor(Math.random() * strings.length)];
  const output = `You typed: ${userInput}. The random string is: ${randomString}.`;
  document.getElementById("output").innerHTML = output;
}
