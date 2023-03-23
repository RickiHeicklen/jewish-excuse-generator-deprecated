
// Define an array of strings
// add more here: https://docs.google.com/spreadsheets/d/1w_1PJABP2-W1vukhsu3W71lppu_iYgy6PFTyBsRK3vs/edit#gid=0
const excuses = ["I have my hamster's bar mitzvah", "I need to check the eruv", "my bubbie would kill me if I missed the seder", "I need to work on my costume", "I promised the Rabbi I would do Hagbah", "the chulent doesn't cook itself", "there's a minyan in the back of the hardware store, nine men waiting for one more", "I ate too many sufganiyot", "there's a bris milah I need to officiate", "I'm part of the chevre kadisha"];

// Get the user input and display the random string
function generateRandomString() {
  const userInput = document.getElementById("user-input").value;
  const hebrewDate = getHebrewDate()
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  const output = `\nSorry, I can't make it to ${userInput}. It's ${hebrewDate}, and ${randomExcuse}`;
  document.getElementById("output").innerHTML = output;
}



// SCRAP
//
// const generateBtn = document.getElementById('generate-btn');
// const output = document.getElementById('output');
// const userInput = document.getElementById('user-input');
// const submitBtn = document.getElementById('submit-btn');
// const userOutput = document.getElementById('user-output');

// const strings = ['hello', 'world', 'how', 'are', 'you'];

// generateBtn.addEventListener('click', () =>

