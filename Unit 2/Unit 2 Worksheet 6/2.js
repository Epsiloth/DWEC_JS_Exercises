/*Author: Pablo Torres Antúnez
*/

let nImagenes = document.getElementsByTagName("img");
let idPrimeraImagen = document.getElementsByTagName("img")[0].id;
let nLinks = document.getElementsByTagName("a");

document.write("<br>Number of images: " + (nImagenes.length));
document.write("<br>Number of links: " + (nLinks.length));
document.write("<br>First image ID: " + (idPrimeraImagen));

