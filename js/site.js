//Get string from the page
//Controller Function
function getValues() {
   document.getElementById("alert").classList.add("invisible");

   //Get user input and convert it to lowercase
   let userString = document.getElementById("userString").value;
   userString = userString.toLowerCase();

   //Remove special characters, spaces, and numbers
   userString = userString.replace(/[^a-zA-Z]/g, '');
 
   //Call reverse string function
   let revString = reverseString(userString);

   //Initialize message title an empty string
   let messageTitle = "";

   //Compare reverse string to "cleaned up" user string and assign appropriate message to messageTitle variable
   if (userString == revString) {
      messageTitle = "Well done! You entered a palindrome!";
   } else {
      messageTitle = "That is not a palindrome. Try again."
   }
   //Call display string function and pass it revString and messageTile parameters
   displayString(revString, messageTitle);
}
//Logic Function
function reverseString(userString) {
   //Initialize empty array
   let revString = [];

   //Reverse string using a for loop
   for (let index = userString.length - 1; index >= 0; index--) {
       revString += userString[index];
   }
   return revString;
}
//Display the reverse string to the user
function displayString(revString, messageTitle) {
   //Write the message title to the screen
   document.getElementById("msgTitle").innerHTML = messageTitle;

   //Write the reverse string to the screen
   document.getElementById("msg").innerHTML = `Your reversed string is:<strong>  ${revString}</strong>`;
   
   //Show the alert box
   document.getElementById("alert").classList.remove("invisible");
}