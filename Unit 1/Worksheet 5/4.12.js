/*Author:Pablo Torres Antúnez
*/

let ncolumnas = parseInt(prompt("Introduce the number of columns: "));
let altura = parseInt(prompt("Introduce the height (px): "));
let anchura = parseInt(prompt("Introduce the width (px): "));

document.write("<table border=1>");
for(let i=0;i<ncolumnas;i++){
	if(i%2==1){
		document.write("<td "+"width="+anchura+" height="+altura+" bgcolor=white></td>")
	}else{
		document.write("<td "+"width="+anchura+" height="+altura+" bgcolor=black></td>")
	}	
}
document.write("</table>");