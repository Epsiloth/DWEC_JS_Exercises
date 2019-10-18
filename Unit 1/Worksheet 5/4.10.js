/*Author: Pablo Torres Antúnez
Escribir un programa que muestre la frase "Cabezera H" seguido del número. Las frases deben estar
formateadas con las etiquetas adecuadas.
*/

let texto = "Cabecera H";

for(let i=1;i<=6;i++){
	document.write("<h"+i+">"+texto+i+"</h"+i+">");
}