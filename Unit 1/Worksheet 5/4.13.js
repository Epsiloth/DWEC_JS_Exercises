/*Author:Pablo Torres Antúnez
*/

let ncolumnas = parseInt(prompt("Introduce the number of columns: "));
let altura = parseInt(prompt("Introduce the height (px): "));
let anchura = parseInt(prompt("Introduce the width (px): "));

document.write("<table border=1>");
let i=0;
while(i<ncolumnas){
	document.write("<td "+"width="+anchura+" height="+altura+"></td>")
	i++;
}
document.write("</table>");