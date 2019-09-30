function initMap() {
    var element = document.getElementById('map');

    var options = {
        zoom: 16,
        center: {lat: 59.9318905, lng: 30.3569705}
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

    marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
    })
}