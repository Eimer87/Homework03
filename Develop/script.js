// Assignment Code
var onclickBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let complexity = document.getElementById("slider").value;
//Password values
  let values = "abcdefghijklmnopqrstuvwzy1234567890!@#$%^&*()_+";
  
  let generatePassword = "";
  passwordText.value = password;

//for loop to choose password character
  for(var i = 0; 1<= complexity; i++){ 
    password = password + values.charAt(Math.floor(math.ramdom() * Math.floor(values.length - 1)));
  }

//add password to textbox
  document.getElementById("ge").value = password;

//add password to previously generated password section
  document.getElementById("lastNum").innerHTML += password + "<br />";

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";


//function to set length based on slider position
document.getElementById("slider").oninput = function(){


    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }


}


//function to copy password to clipboard
function copyPassword(){


    document.getElementById("display").select();


    document.execCommand("Copy");


    alert("Password copied to clipboard!");


}



// Add event listener to generate button
onclickBtn.addEventListener("click", writePassword);
