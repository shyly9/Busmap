let map;
let markers = [];

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

    map.addListener("click", (event) => {
        setMarKers(map);
    });

    // add event listeners for the buttons
    document
        .getElementById("search")
        .addEventListener("click", showMarkers);
    document
        .getElementById("direction")
        .addEventListener("click", hideMarkers);

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

window.initMap = initMap;
