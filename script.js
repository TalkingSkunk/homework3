
// password content arrays
var array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const small = 'abcdefghijklmnopqrstuvwxyz';
var array2 = Array.from(small);

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var array3 = Array.from(upper);

var array4 = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "`", "~"];

// the questions for User
function getOptions() {
  var charLength = parseInt(prompt("how many characters do you want? Choose from 8~128."));
  if (charLength < 8 || charLength > 128 || !isNaN(length) === false) {
    alert("The character length has to be between 8 and 128!");
    return;
  }
  var question1 = confirm("Do you want upper characters?");
  var question2 = confirm("Do you want lower characters?");
  var question3 = confirm("Do you want special characters?");
  var question4 = confirm("do you want number?");

  if (
    question1 === false &&
    question2 === false &&
    question3 === false &&
    question4 === false) {
    alert('It looks like you don\'t want a password.');
    return;
  }
  var myAnswerObject = {
    length: charLength,
    upperChar: question1,
    lowerChar: question2,
    specialChar: question3,
    nuM: question4,
  }
  return myAnswerObject;

}

// generate password function
function generatePassword() {

  var userAnswers = getOptions();
  var password = [];

  var array5 = [];
  console.log(userAnswers);

  if (userAnswers.nuM) {
    array5 = array5.concat(array1);
    console.log(array5);
  }
  if (userAnswers.upperChar) {
    array5 = array5.concat(array3);
    console.log(array5);
  }
  if (userAnswers.lowerChar) {
    array5 = array5.concat(array2);
    console.log(array5);
  }

  if (userAnswers.specialChar) {
    array5 = array5.concat(array4);
    console.log(array5);
  }




  // fill up the password up to the length requested by User

  for (var i = 0; i < userAnswers.length; i++) {
    var randIndex = Math.floor(Math.random() * array5.length);
    var charChosen = array5[randIndex];

    password.push(charChosen);
    console.log(password);
  }
  return password.join('');


}


// Add event listener to generate button

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);