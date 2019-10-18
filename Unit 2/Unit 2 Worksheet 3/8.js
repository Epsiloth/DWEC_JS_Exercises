/*Author: Pablo Torres Antúnez
*/

let nAleatorio = Math.random()*(3-0)+0;
let imagen;

if(nAleatorio >= 0 && nAleatorio < 1){
	imagen = "C:\\Users\\epsil\\Pictures\\animefolder.jpg";
}else if (nAleatorio >= 1 && nAleatorio < 2) {
	imagen = "C:\\Users\\epsil\\Pictures\\itseverydaybro.jpg";
}else{
	imagen = "C:\\Users\\epsil\\Pictures\\dkrapeface.jpg";
}

document.write("<img src=\""+imagen+"\">");