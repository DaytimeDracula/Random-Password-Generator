//Global Arrays and Variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCase = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCase = ["~", "!", "@", "#", "$", "%", "%", "^", "&", "*", "(", ")", "+", "-", "<", ">", "?", "/"];
var combinedCases = [ ];
var passwordPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password generator
function generatePassword() {
    //Prompt user for character types and add to combinedCases array
    var containsUpperCase = window.confirm("Do you want uppercase characters in your password?");
    if (containsUpperCase === true) {
        combinedCases = upperCase.concat(combinedCases);
        console.log(combinedCases);
    };

    var containsLowerCase = window.confirm("Do you want lowercase characters in your password?");
    if (containsLowerCase === true) {
        combinedCases = lowerCase.concat(combinedCases);
        console.log(combinedCases);
    };

    var containsNumberCase = window.confirm("Do you want numbers in your password?");
    if (containsNumberCase === true) {
        combinedCases = numberCase.concat(combinedCases);
        console.log(combinedCases);
    };

    var containsSpecialCase = window.confirm("Do you want special characters in your password?");
    if (containsSpecialCase === true) {
        combinedCases = specialCase.concat(combinedCases);
        console.log(combinedCases);
    };
    //Prompt user for password length
    console.log(combinedCases);
    var passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters"));
    if (passwordLength <= 8) {
        alert("Password length must be greater than 8 characters");
        passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters"));
    } else if (passwordLength >= 128) {
        alert("Password length must be less than 128 characters");
        passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters"));
    }
    
    //Random number generator meeting conditions of combined characters

    for (var i = 0; i < passwordLength; i++) {

        var randomChar = combinedCases[Math.floor(Math.random() * combinedCases.length)];
        passwordPassword.push(randomChar);

    }
    return passwordPassword.join("");
}

