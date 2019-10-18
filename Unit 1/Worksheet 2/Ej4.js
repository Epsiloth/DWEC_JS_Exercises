/*Author: Pablo Torres Antúnez

This script takes 2 diferent temperatures from the user. First one, in C, is converted to F.
Second one, in F, is converted to C.

*/

//Temperature variables initialization by asking user input and screen output
let temperature = parseInt(prompt("Introduce the temperature in \xB0C: "));
convertCtoF(temperature);
let temperature2 = parseInt(prompt("Introduce the temperature in \xB0F: "));
convertFtoC(temperature2);

//Temperature conversion functions
function convertCtoF(temperature){
	let newtemperature = Math.round((((temperature*9)/5) + 32)*100)/100; 
	alert(temperature + "\xB0C is " + newtemperature + "\xB0F");
}
function convertFtoC(temperature){
	let newtemperature2 = Math.round((((temperature2 - 32)*5)/9)*100)/100; 
	alert(temperature2 + "\xB0F is " + newtemperature2 + "\xB0C");
}