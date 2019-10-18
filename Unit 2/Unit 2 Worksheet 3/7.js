/*Author: Pablo Torres Antúnez
*/

function sortNumber(a, b){
	return a-b;
}

let nAscendente = [];
for (let i = 1; i <= 5; i++) {
	let x = parseInt(prompt("Introduce a number (" + i + "/5): "));
	nAscendente.push(x);
}
nAscendente.sort(sortNumber);

let nSeno = [];
for (let i = 0; i < nAscendente.length; i++) {
	let x = Math.sin(nAscendente[i]);
	nSeno.push(x);
}

document.write("<table border=1>")
for(let i=0;i< nAscendente.length;i++){
	document.write("<tr><td>"+nAscendente[i]+"</td><td>"+nSeno[i]+"</td></tr>")
}
document.write("</table>")