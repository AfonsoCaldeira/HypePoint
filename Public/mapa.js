var map;
var directionsService;
var directionsRenderer;
var sourceAutocomplete;
var destAutocomplete;

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      map = new google.maps.Map(document.getElementById("map"), {
        center: userLocation,
        zoom: 13,
      });

      google.maps.event.addListener(map, "click", function (event) {
        this.setOptions({ scrollwheel: true });
      });

      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      sourceAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("origin")
      );
      destAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("destination")
      );
    });
  } else {
    console.log("Error: Geolocation is not supported by this browser.");
  }
}

function searchDirections() {
  var origin = document.getElementById("origin").value;
  var destination = document.getElementById("destination").value;

  if (!origin || !destination) {
    alert("Please enter valid origin and destination.");
    return;
  }

  var request = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, function (response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(response);
    } else {
      alert("Error: " + status);
    }
  });
}

document.getElementById("directionsButton").addEventListener("click", searchDirections);
