/*Author: Pablo Torres Antúnez
*/

let screenObj = window.screen;

let scrName = screenObj.width;
let scrHeight = screenObj.height;
let scrAvWidth = screenObj.availWidth;
let scrAvHeight = screenObj.availHeight;
let scrColorDepth = screenObj.colorDepth;
let scrPixelDepth = screenObj.pixelDepth;

document.write("<table border=1><tr><td>Name</td><td>"+scrWidth+"</td></tr><tr><td>Code</td><td>"+scrHeight+"</td></tr><tr><td>Platform</td><td>"+scrAvWidth+
  "</td></tr><tr><td>Cookies</td><td>"+scrAvHeight+"</td></tr><tr><td>Product</td><td>"+scrColorDepth+"</td></tr><tr><td>Version</td><td>"+scrPixelDepth+
  "</td></tr><tr></table>");

