/*Author: Pablo Torres Antúnez
*/
let fechaHoy = new Date();
Document.write("fechaHoy: " + fechaHoy + "<br>");

let fecha85 = fechaHoy;
let fecha85.setDate(fecha85.getDate() + 85);
Document.write("fecha85: " + fecha85 + "<br>");

let fecha187 =  fechaHoy;
let fecha187.setDate(fecha187.getDate() - 187);
Document.write("fecha187: " + fecha187 + "<br>");

let fecha85.setFullYear(fecha85.getFullYear()+2);
Document.write("fecha85: " + fecha85 + "<br>");

let fecha187.setHours(fecha187.getHours()-24);
Document.write("fecha187: " + fecha187 + "<br>");

let fechaResto = fecha85.getTime() - fecha187.getTime();
Document.write(Math.round(fechaResto/ (1000*60*60*24)));