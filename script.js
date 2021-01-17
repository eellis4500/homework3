
const generateBtn = document.querySelector("#generate");
const form = document.getElementById('passwordGeneratorForm');
const textarea = document.getElementById('password');
var lowercase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var uppercase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var numbers = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];
var spcharacters = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "=",
  "<",
  ">",
  "@",
  "?",
  "/",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "["
];

function writePassword() {
  var password = parseInt(prompt('How long would you like your password to be?'));
  console.log(password)
  if (isNaN(password) === true) {
    alert('Length of password must be provided as a number');
    return;
  }
  if (password < 8) {
    alert('Password must have minimum length of 8');
    return;
  }
  if (password > 128 ) {
    alert('Password can not be longer than 128 characters');
    return;
  }
  var hasLowercase = confirm(
    'Click OK to confirm you want lowercase letters in your password.'
  );
  var hasUppercase = confirm(
    'Click OK to confirm you want uppercase letters in your password.'
  );
  var hasNumber = confirm(
    'Click OK to confirm you want numbers in your password.'
  );
  var hasSpecialcharacters = confirm(
    'Click OK to confirm you want special characters in your password.'
  );

  if (hasLowercase === false && hasUppercase === false && hasNumber === false && hasSpecialcharacters === false) {
    alert('Your password must contain at least one type of character');
    return;
  }
  var passwordCharacters = {
    password: password,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumber: hasNumber,
    hasSpecialcharacters: hasSpecialcharacters,
  };
  var finalPassword = makePassword(passwordCharacters);
  textarea.value = finalPassword;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function makePassword(passwordCharacters) {
  console.log(passwordCharacters)
  var finalPassword = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (passwordCharacters.hasLowercase) {
    const randomLower = getRandom(lowercase);
    console.log(randomLower)
    guaranteedCharacters.push(randomLower);
    possibleCharacters = possibleCharacters.concat(lowercase);
    console.log(possibleCharacters)
  }

  if (passwordCharacters.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  if (passwordCharacters.hasNumber) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (passwordCharacters.hasSpecialcharacters) {
    possibleCharacters = possibleCharacters.concat(spcharacters);
    guaranteedCharacters.push(getRandom(spcharacters));
  }

  console.log('possibleCharacters', possibleCharacters);

  console.log('passwordCharacters', passwordCharacters);

  for (var i = 0; i < passwordCharacters.password; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    console.log(possibleCharacter);
    finalPassword.push(possibleCharacter);
  }

  console.log('finalPassword', finalPassword);

  console.log('guaranteedCharacters', guaranteedCharacters);

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    finalPassword[i] = guaranteedCharacters[i];
  }
  return finalPassword.join('');
}

var makePassBtn = document.querySelector('#generate');
function writePass() {
  var pass = makePass();
  var passText = document.querySelector('#password')
  passText.value = "Your password is " + pass + " , enjoy!";
}

generateBtn.addEventListener("click", writePassword);