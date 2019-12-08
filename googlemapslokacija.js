var locations = [
      ['OPG Kaurić', 45.6680, 16.1040, 1],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(45.66, 16.09),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }