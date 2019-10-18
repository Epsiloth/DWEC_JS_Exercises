/*Author: Pablo Torres Antúnez

This script takes from the user una value as a circle radius, and uses it to calculate said circle's
area and circumference.

*/

//Radius variable initialization by asking user input
let radius = parseInt(prompt("Introduce the radius of the circle (in m): "));

//Circumference and area calculation functions
function calcCircumference(radius){
	let circumference = Math.round((2*Math.PI*radius)*100)/100;
	document.write("The circumference is " + circumference + "m");
}
function calcArea(radius){
	let area = Math.round((Math.PI*Math.pow(radius, 2))*100)/100;
	document.write("<br>The area is " + area + "m<sup>2</sup>");
}

//Output on screen
calcCircumference(radius);
calcArea(radius);