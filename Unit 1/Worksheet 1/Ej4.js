/*Author: Pablo Torres Antúnez

This script takes two variables taken from the user input, calculates basic mathematic operations and shows the
result on screen.

*/

//Variable a and b initialization by asking user input
let a = parseInt(prompt("Introduce the first variable: "));
let b = parseInt(prompt("Introduce the second variable: "));

//Total calculations
let sumtotal = a+b;
let resttotal = a-b;
let multotal = a*b;
let divtotal = Math.round((a/b)*100)/100;

//Output on screen
document.write("First variable a =" + a + "<br>" + "Second variable b = " + b);
document.write("<br>The total sum for a+b = " + sumtotal);
document.write("<br>The total rest for a-b = " + resttotal);
document.write("<br>The total multiplication for a*b = " + multotal);
document.write("<br>The total division for a/b = " + divtotal);