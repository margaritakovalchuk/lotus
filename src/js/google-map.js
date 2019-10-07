function initMap() {
    var element = document.getElementById('map');

    var options = {
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

    var myMap = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
        position: {lat: 59.9318905, lng: 30.3569705},
        map: myMap,
        icon: 'img/pin_on_map.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<p>СПб, Невский проспект 108</p>'
    });

    var infowindow = false;
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
