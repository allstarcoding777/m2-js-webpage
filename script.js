// Step 1: Ask for User's First Name and Display Welcome Message

// Prompt the user to enter their first name and store it in the variable Fname
let Fname = prompt("What is your first name?");

// Display a welcome message using the entered name
alert(`Hello ${Fname}, welcome to our JavaScript program!`);

// Step 2: Create Constant for Pi to 7 Significant Digits

// Create a constant variable piValue to store the value of Pi with 7 significant digits
const piValue = 3.1415926;

// Step 3: Ask User for Favorite Number

// Prompt the user to enter their favorite number and store it in the variable myFavNum
let myFavNum = prompt("What is your favorite number?");

// Step 4: Calculate Area of a Circle Using User's Favorite Number as Radius

// Calculate the area of a circle using the formula A = π * r^2
// where r is the user's favorite number (radius) and piValue is the constant for Pi
let myArea = piValue * Math.pow(myFavNum, 2);

// Step 5: Display Variables and Calculated Area to the Webpage

// Select the output element in your HTML where you want to display the results
let outputElement = document.getElementById("output");

// Create a message to display using innerHTML
let message = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. `;
message += `If that was the radius of a circle, the circle's area would be ${myArea.toFixed(2)}.`;

// Update the content of the output element with the message
outputElement.innerHTML = message;
