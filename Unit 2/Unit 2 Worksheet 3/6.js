/*Author: Pablo Torres Antúnez
*/

let base = parseInt(prompt("Introduce the base: "));
let exponente = parseInt(prompt("Introduce the exponent: "));
let potencia = Math.pow(base, exponente);

document.write(base + "<sup>" + exponente + "</sup>" + " = " + potencia);