
// Define an array of strings
// add more here: https://docs.google.com/spreadsheets/d/1w_1PJABP2-W1vukhsu3W71lppu_iYgy6PFTyBsRK3vs/edit#gid=0
const excuses = ["and I have my hamster's bar mitzvah", "so I need to check the eruv", "and my bubbie would kill me if I missed the seder", "so I need to work on my costume", "and I promised the Rabbi I would do Hagbah", "and the chulent doesn't cook itself", "and there's a minyan in the back of the hardware store, nine men waiting for one more", "and I ate too many sufganiyot", "and there's a bris milah I need to officiate", "and I'm part of the chevre kadisha"];

// Get the user input and display the random string
function generateRandomString() {
  const userInput = document.getElementById("user-input").value;
  const hebrewDate = getHebrewDate()
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  const output = `\nSorry, I can't make it to ${userInput}. It's ${hebrewDate}, ${randomExcuse}`;
  document.getElementById("output").innerHTML = output;
}