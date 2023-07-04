/* 
STEP 1
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
*/

function lengthOfPassword(){
  
  var length;
  var i = 0;
  
  length = prompt("choose a length of at least 8 characters and no more than 128 characters");
  
  while(i<1) {
    
    if (length < 8 || length > 128) {
      length = prompt("Password must be atleast 8 characters and no more than 128.");
    } else if (length >= 8 || length <= 128){
      i = 1;
    } else {
      length = prompt("Password must be atleast 8 characters and no more than 128.");
    }
  }

  length = Math.floor(length);
  return length;
}

/*
STEP 2 and 3
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
*/

function whatCharactersIncluded() {
  
  var lowerCh = false, upperCh = false, numCh = false, speCh = false;
  var differentCharacters = [lowerCh, upperCh, numCh, speCh];
  var includeCharacters = ["lowercase", "uppercase", "numbers", "special"];
  var i = 0;
  
  while(i<4) {
    
    var text = "Include " + includeCharacters[i]+ " characters in your password?";
    
    if (confirm(text) == true) {
      text = includeCharacters[i] + " characters included in password";
      differentCharacters[i] = true;
      i +=1;
    } else {
      text = includeCharacters[i] + " characters not included in password";
      
      if (lowerCh == false && i > 3) {
      
        if (upperCh == false && numCh == false) {
      
          if(speCh == false) {
            alert("Must include atleast one type of character.");
            i = 0;
          }
        }
      } else {
        i+=1;
      }
    }
  }
  return differentCharacters;
}

/*
STEP 3
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
*/

function generatePassword() {
  
  var numberOfCharacters;
  var characterTypes;

  numberOfCharacters = lengthOfPassword();

// true = include false = exclude
// characterTypes[0] = lowercase
// characterTypes[1] = uppercase
// characterTypes[2] = numbers
// characterTypes[3] = special

  characterTypes = whatCharactersIncluded();

  var characters = "";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numberCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()-_=+,<.>/?[]{}`~";
  
  if (characterTypes[0] == true) {
    characters += lowercaseCharacters;
  }
  
  if (characterTypes[1] == true) {
    characters += uppercaseCharacters;
  }
  
  if (characterTypes[2] == true) {
    characters += numberCharacters;
  }
  
  if (characterTypes[3] == true) {
    characters += specialCharacters;
  }

  var result = "";

  for (var i = 0; i < numberOfCharacters; i++){
    result = result + characters.charAt(Math.floor(Math.random() * numberOfCharacters));
  }
  // PASSWORD FINAL
  return result;
}

/*
STEP 4
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// final password
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);