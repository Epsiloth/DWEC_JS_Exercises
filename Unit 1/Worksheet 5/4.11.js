/*Author:Pablo Torres Antúnez
Hacer un programa que pida por teclado tres valores: nº de columnas de una tabla, altura y anchura en pixels
de sus celdas. Una vez tecleados estos valores, el programa pintará en la página web una tabla HTML de una fila
por el nº de columnas tecleadas.
*/

let ncolumnas = parseInt(prompt("Introduce the number of columns: "));
let altura = parseInt(prompt("Introduce the height (px): "));
let anchura = parseInt(prompt("Introduce the width (px): "));

document.write("<table border=1>");
for(let i=1;i<=ncolumnas;i++){
	document.write("<td "+"width="+anchura+" height="+altura+"></td>")
}
document.write("</table>");