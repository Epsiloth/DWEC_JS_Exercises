/*Author: Pablo Torres Antúnez
*/

if ("geolocation" in navigator) {
 	document.write("Geolocation is available in this browser.<br>");
 	StartLat = 0;
 	StartLon = 0;
 		navigator.geolocation.getCurrentPosition(function(position) {
  		document.write("Your STARTING position coordinates are:<br> Latitude " + position.coords.latitude + "<br>Longitude " + position.coords.longitude + "<br>")
  		StartLat = position.coords.latitude;
  		StartLon = position.coords.longitude;},
  		document.write("An error has occurred.")
	);
	var watchID = navigator.geolocation.watchPosition(function(position) {
		document.write("Your CURRENT position coordinates are:<br> Latitude " + position.coords.latitude + "<br>Longitude " + position.coords.longitude + "<br>");
		Latdistance = StartLat - position.coords.latitude;
		Londistance = StartLon - position.coords.longitude;
		document.write("DISTANCE traveled by now:<br> Latitude " + Latdistance + "<br>Longitude " + Londistance + "<br>");
		},
  		document.write("An error has occurred.")
	);

}else{
	document.write("Geolocation is not available in this browser.");
}