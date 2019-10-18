/*Author: Pablo Torres Antúnez
The fortune teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

//This function shows a phrase including all the arguments in it
function tellFortune(nchildren, partnername, geolocation, jobtitle){
	alert("You will be a " + jobtitle + " in " + geolocation + ", and married to " + partnername + " with " + nchildren + " kids.");
}

//Loop for user input and screen output
for(let i=0; i<3; i++){
	let nchildren = prompt("Introduce number of children desired: ");
	let partnername = prompt("Introduce desired partner's name: ");
	let geolocation = prompt("Introduce your favorite location: ");
	let jobtitle = prompt("Introduce your dream job occupation: ");
	
	tellFortune(nchildren, partnername, geolocation, jobtitle);
}



