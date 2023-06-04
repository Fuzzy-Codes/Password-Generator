// Assignment code here



function generatePassword() {
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseLetters = 'ABCDEFGHIJKELMNOPQRSTUVWXYZ';
  var specialCharacters = "!#$%&()*+";
  var numberCharacters = '1234567890';
  var passwordArray = ""
  var finalPassword = ""
  var passwordLength = ""

  while (isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = prompt("Password length needs to be between 8-128 characters")

  }

  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var specCharacters = confirm("Would you like to include special characters?");
  var numbers = confirm("Would you like to include numbers?");
  if (lowerCase) {
    passwordArray += lowercaseLetters;
    
  }
  if (upperCase) {
    passwordArray += uppercaseLetters;
    
  }
  if (specCharacters) {
    passwordArray += specialCharacters;
    
  }
  if (numbers) {
    passwordArray += numberCharacters;
    
  }
  if (!lowerCase && !upperCase && !specCharacters && !numbers)
    alert("You must choose at least one option")




  //for loop to iterate through the password array that has been concat with selected characters
  for (var i = 0; i < passwordLength; i++) {
    
    var index = Math.floor(Math.random() * passwordArray.length);
    
    
    finalPassword += passwordArray[index];
    
  }
  console.log(finalPassword);
  return finalPassword;

  

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

