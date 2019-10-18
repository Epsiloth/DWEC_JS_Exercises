/*Author: Pablo Torres Antúnez
*/

let nAleatorio = Math.round(Math.random()*100)/100;
document.write("nAleatorio = " + nAleatorio + "<br>");
let nAleatorio2 = Math.round((Math.random()*(200-100)+100)*100)/100;
document.write("nAleatorio2 = " + nAleatorio2 + "<br>");
let nAleatorioMin = parseInt(prompt("Introduce min range: "));
let nAleatorioMax = parseInt(prompt("Introduce max range: "));
document.write("Ranged random number by user = " + Math.round((Math.random()*(nAleatorioMax-nAleatorioMin)+nAleatorioMin)*100)/100);