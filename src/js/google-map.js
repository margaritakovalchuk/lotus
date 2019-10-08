function initMap() {
    let element = document.getElementById('map');

    let options = {
        zoom: 16,
        center: {lat: 59.9318905, lng: 30.3569705},
        styles: [
            {
                "stylers": [
                    {
                        "color": "#fbf5f4"
                    }
                ]
            },
            {
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#878281"
                    },
                    {
                        "weight": 0.5
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fffdfe"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ],
    };

    let myMap = new google.maps.Map(element, options);

    let marker = new google.maps.Marker({
        position: {lat: 59.9318905, lng: 30.3569705},
        map: myMap,
        icon: 'img/pin_on_map.png'
    });

    let InfoWindow = new google.maps.InfoWindow({
        content: '<p>СПб, Невский проспект 108</p>'
    });

    let infowindow = false;
    google.maps.event.addDomListener(marker, 'click', function () {
        if (!infowindow) {
            infowindow = true;
            InfoWindow.open(myMap, marker);
            return;
        }
        InfoWindow.close();
        infowindow = false;
    });
}
