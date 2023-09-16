let map;
let markers = [];
let directionsRenderer;
let directionsService;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.761119700037852, lng: 109.22066914243513 },
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
            {
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'administrative.land_parcel',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'administrative.neighborhood',
                stylers: [{ visibility: 'off' }],
            },
        ],
    });
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        polylineOptions: {
            strokeColor: "green",
            strokeOpacity: 0.7,
            strokeWeight: 4,
        },
    });

map.addListener("click", (event) => {
    setMarKers(map);
});
showMarkers();
document
    .getElementById("search")
    .addEventListener("click", showMarkers);
document
    .getElementById("direction")
    .addEventListener("click", hideMarkers);
document.querySelectorAll(".card").forEach((item, index) => {
    item.addEventListener("click", function () {
        hideMarkers();
        const tuyen = "T1";
        showdisplayRoute(tuyen);
    });
});

document.querySelectorAll(".subbus .bus-title").forEach((item, index) => {
    item.addEventListener("click", function () {
        showMarkers();
        hidedisplayRoute();
    });
});

initAutocomplete();
autoDirections(map);
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function hideMarkers() {
    setMapOnAll(null);
}

function showMarkers() {
    setMarKers(map);
}

function initAutocomplete() {
    const input = document.getElementById('pac-input');
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log('Returned place contains no geometry');
                return;
            }

            markers.push(
                new google.maps.Marker({
                    map,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        map.fitBounds(bounds);
    });
}

function setMarKers(map) {
    fetch('dbConfig.php')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((busstop) => {
                const marker = new google.maps.Marker({
                    position: { lat: parseFloat(busstop.lat), lng: parseFloat(busstop.lng) },
                    map,
                    title: busstop.tentram,
                    icon: {
                        url: 'img/x-buyt.png',
                        scaledSize: new google.maps.Size(32, 32),
                    },
                });
                markers.push(marker);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function autoDirections(map) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    const start = document.getElementById('origin-input');
    const end = document.getElementById('destination-input');

    const startAutocomplete = new google.maps.places.Autocomplete(
        start,
        { fields: ["place_id"] }
    );
    const endAutocomplete = new google.maps.places.Autocomplete(
        end,
        { fields: ["place_id"] }
    );

    const onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };

    startAutocomplete.addListener("place_changed", onChangeHandler);
    endAutocomplete.addListener("place_changed", onChangeHandler);

    directionsRenderer.setMap(map);

    const searchButton = document.getElementById('search');
    searchButton.addEventListener('click', function () {
        directionsRenderer.setDirections({ routes: [] });
        start.value = '';
        end.value = '';
    });


    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        const startPlace = startAutocomplete.getPlace();
        const endPlace = endAutocomplete.getPlace();

        if (!startPlace.place_id || !endPlace.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
        }

        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        directionsService.route(
            {
                origin: { placeId: startPlace.place_id },
                destination: { placeId: endPlace.place_id },
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
                if (status === "OK") {
                    directionsRenderer.setDirections(response);
                } else {
                    window.alert("Directions request failed due to " + status);
                }
            }
        );
    }
}



function displayRoute(startLat, startLng, endLat, endLng, map) {
    const startLatLng = new google.maps.LatLng(startLat, startLng);
    const endLatLng = new google.maps.LatLng(endLat, endLng);

    const startMarker = new google.maps.Marker({
        position: startLatLng,
        map,
        icon: {
            url: 'img/x-buyt.png',
            scaledSize: new google.maps.Size(32, 32),
        },
    });

    const endMarker = new google.maps.Marker({
        position: endLatLng,
        map,
        icon: {
            url: 'img/x-buyt.png',
            scaledSize: new google.maps.Size(32, 32),
        },
    });

    const request = {
        origin: startLatLng,
        destination: endLatLng,
        travelMode: google.maps.TravelMode.DRIVING,
    };
    directionsRenderer.setMap(map);
    directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
        } else {
            window.alert("Directions request failed due to " + status);
        }
    });
}


function showdisplayRoute(tuyen) {
    fetch('tuyenxe.php?tableName=' + encodeURIComponent(tuyen))
        .then((response) => response.json())
        .then((data) => {
            // Lặp qua các cặp điểm liên tiếp
            for (let i = 0; i < data.length - 1; i++) {
                const start = data[i];
                const end = data[i + 1];

                // Hiển thị đường đi giữa các điểm
                displayRoute(start.lat, start.lng, end.lat, end.lng, map);
            }
        })
        .catch((error) => {
            console.log('Error loading data:', error);
        });
}

function hidedisplayRoute() {
    directionsRenderer.setMap(null);
}


window.initMap = initMap;

