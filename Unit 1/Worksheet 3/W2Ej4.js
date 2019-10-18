/*Author: Pablo Torres Antúnez

This script takes 2 diferent temperatures from the user. First one, in C, is converted to F.
Second one, in F, is converted to C.

*/

//Temperature variables initialization by asking user input
let temperature = parseInt(prompt("Introduce the temperature in C: "));
let temperature2 = parseInt(prompt("Introduce the temperature in F: "));

//Temperature conversion functions
function convertCtoF(temperature){
	let newtemperature = Math.round((((temperature*9)/5) + 32)*100)/100; 
	alert(temperature + "C is " + newtemperature + "F");
}
function convertFtoC(temperature){
	let newtemperature2 = Math.round((((temperature2 - 32)*5)/9)*100)/100; 
	alert(temperature2 + "F is " + newtemperature2 + "C");
}

//Output on screen
convertCtoF(temperature);
convertFtoC(temperature2);