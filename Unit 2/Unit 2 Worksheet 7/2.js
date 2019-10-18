/*Author: Pablo Torres Antúnez
*/
let screenObj = window.screen;

if ("geolocation" in navigator) {
 	let StartLat=0;
 	let StartLon=0;
 	let LatDistance = 0;
	let LonDistance = 0;

 	navigator.geolocation.getCurrentPosition(function(position) {
	  		StartLat = position.coords.latitude;
	  		StartLon = position.coords.longitude;
  		}
	);

	var watchID = navigator.geolocation.watchPosition(function(position) {
		LatDistance = position.coords.latitude;
		LonDistance = position.coords.longitude;
		if(typeof map != 'undefined'){
			if(typeof marker == 'undefined'){
			let marker = L.marker([LatDistance, LonDistance]).addTo(map);
			}else{
				latLon = new L.latLng(LatDistance, LonDistance);
				marker.setLatLng(latLon);
			}
		}
	}
	);

	document.write("<div id=\"map\"></div>");
	map = L.map('map', {
		center: [StartLat, StartLon],
		zoom: 5
		});
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18,
		noWrap: true
		}).addTo(map);
	L.control.scale().addTo(map);
	

}else{
	document.write("Geolocation is not available in this browser.");
}



