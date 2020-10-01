// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function thats generates a random password based on criteria the user selected
function generatePassword() {
  
  // List of lowercase, uppercase, numeric and special characters
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numberChar = "1234567890";

  // List of special character listed from https://owasp.org/www-community/password-special-characters
  // used a backslash (\) escape character infront of " and \ 
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  // If the user inputs a non numeric text it should give NaN (Not a Number)
  var pwLength = parseInt( prompt("Choose the length of the password:") );

  // Validate if the input is a number and inside of the range (8-128)
  // Ask for new input until the input is a number in the range
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = parseInt( prompt("Invalid input. Please input a number between 8 and 128") );
  }
  // The user can still input decimals/text after the number eg 12asdf turns into 12 !! 

  // console.log(pwLength);

  // variable to store all the characters that match the chosen criteria
  var chosenChar = "";

  // While loop to ensure that atleast one type of character is chosen
  while (chosenChar === "") {
    var choice = confirm("Do you want lowercase characters?");
    if (choice) {
      chosenChar += lowerChar;
    }
    choice = confirm("Do you want uppercase characters?");
    if (choice) {
      chosenChar += upperChar;
    }
    choice = confirm("Do you want numeric characters?");
    if (choice) {
      chosenChar += numberChar;
    }
    choice = confirm("Do you want special characters?");
    if (choice) {
      chosenChar += specialChar;
    }

    if (chosenChar === "") {
      alert("You have to choose atleast 1 type of characters");
    }
  }

  // console.log(chosenChar + " " + chosenChar.length);

  var pwRandom = "";

  // Repeat for the length of the password
  for (let i = 0; i < pwLength; i++) {
    // Generate a random index and take the character in that index from the pool of chosen characters
    var randomIndex = Math.floor(Math.random() * chosenChar.length);
    pwRandom += chosenChar[randomIndex];
  }

  // console.log(pwRandom);
  
  return pwRandom;
}