// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// crete generate password function
function generatePassword() {

  var array1 = [1,2,3,4,5,6,7,8,9,0];
  const small = 'abcdefghijklmnopqrstuvwxyz';
  var array2 = Array.from(small);
  console.log(array2);
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var array3 = Array.from(upper);
  console.log(array3);
  var array4 = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","`","~"];
  console.log(array4);
  var array5 =[];

  var charLength = parseInt(prompt("how many characters do you want?"));

  var question1 = confirm("Do you want upper characters?");
  var question2 = confirm("Do you want lower characters?");
  var question3 = confirm ("Do you want special characters?");
  var question4 = confirm("do you want number?");

  var myAnswerObject = {
    length: charLength,
    upperChar: question1,
    lowerChar: question2,
    specialChar: question3,
    number: question4,
  }



  if( charLength < 8 || charLength > 128) {
     alert("The character length has to be between 8 and 128!");
  }
  if(myAnswerObject.upperChar===true){
      array5 = array5.concat(array3);
    }
    else if(myAnswerObject.lowerChar===true){
      array5=array5.concat(array2);
    }
    else if(myAnswerObject.specialChar===true){
      array5=array5.concat(array4);
    }
    else(myAnswerObject.number===true){
      array5=array5.concat(array1);
    }


  for ( var i = 0; i < charLength; i++){
    var index = Math.floor(Math.random()* charLength + 1);
    var charChosen = array5[index];
    password += charChosen;
  }
    return password;

  }



  //   for (var i = ); i< charLength; i++){
  //     var index = Math.floor(Math.random() * charLength + 1);
  //     var charChosen1 = array3[index];
  //     var charChosen2 = array2[index];
  //     password += charChosen1 + charChosen2;
  //   }
  // }
  // function 


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
