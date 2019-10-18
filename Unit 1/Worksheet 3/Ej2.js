/*Author: Pablo Torres Antúnez
The Age Calculator
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

//This function finds the age calculating the difference between the arguments birthyear and currentyear
function calculateAge(birthyear, currentyear){
	let age = currentyear - birthyear;
	let altage = age-1;
	
	alert("You are either " + altage + " or " + age);
}

//Loop for user input and screen output
for(let i=0; i<3; i++){
	let birthyear = parseInt(prompt("Introduce your birth year: "));
	let currentyear = new Date().getFullYear();

	calculateAge(birthyear, currentyear);
}


