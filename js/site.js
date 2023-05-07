//Get string from the page
//Controller Function
function getValues() {
   document.getElementById("alert").classList.add("invisible");

   let userString = document.getElementById("userString").value;
   let revString = reverseString(userString);
   displayString(revString);
}

// Reverse the string
//Logic Function
function reverseString(userString) {
   //Initialize empty array
   let revString = [];

   //let name = Bobby;
   //name[0] = "B";
   //name[4] = "y";
   //last position in an array name.length - 1
   
   //Reverse string using a for loop
   for (let index = userString.length - 1; index >= 0; index--) {
       revString += userString[index];
   }
   return revString;
}

//Display the reverse string to the user
//View Function
function displayString(revString) {
   //Write the mssage t the page
   document.getElementById("msg").innerHTML = `Your reversed string is: ${revString}`;

   //Show the alert box
   document.getElementById("alert").classList.remove("invisible");
}