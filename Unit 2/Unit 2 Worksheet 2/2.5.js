/*Author: Pablo Torres Antúnez
*/

let a = parseInt(prompt("Introduce the variable a: "));
let b = parseInt(prompt("Introduce the variable b: "));
let c = parseInt(prompt("Introduce the variable c: "));

let result1 = ((-b)+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
let result2 = ((-b)-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);

document.write("First solution: " + Math.round(result1*100)/100 + "<br>");
document.write("Second solution: " + Math.round(result2*100)/100);