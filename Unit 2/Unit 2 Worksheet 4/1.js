/*Author: Pablo Torres Antúnez
*/

let navName = navigator.appName;
let navCode = navigator.appCodeName;
let navPlatform = navigator.platform;
let navCookies = navigator.cookieEnabled;
let navProduct = navigator.product;
let navVersion = navigator.appVersion;

document.write("<table border=1><tr><td>Name</td><td>"+navName+"</td></tr><tr><td>Code</td><td>"+navCode+"</td></tr><tr><td>Platform</td><td>"+navPlatform+
  "</td></tr><tr><td>Cookies</td><td>"+navCookies+"</td></tr><tr><td>Product</td><td>"+navProduct+"</td></tr><tr><td>Version</td><td>"+navVersion+
  "</td></tr><tr></table>");