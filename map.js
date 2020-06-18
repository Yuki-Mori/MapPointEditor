var mymap = L.map('mapid').setView([35.16386051866648,136.9636130332947], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
}).addTo(mymap);

mymap.on('click', function(e){
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;
    $("#content").val($("#content").val() + '\n' + lat + ',' + lon);
    $("#download").removeAttr("href");
    $("#download").addClass("no-link")
    //alert(lat + ',' + lon);
});
