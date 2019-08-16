$(document).ready(function () {
    $('#nav li').hover(
        function () {
            //show submenu
            $('ul', this).slideDown("fast");
        },
        function () {
            //hide submenu
            $('ul', this).slideUp("fast");
        });
});

mapboxgl.accessToken = 'pk.eyJ1Ijoibmlrb2xhaWJlY3F1ZSIsImEiOiJjanV3Z3d5bWowMG1hNDRtMmxwNnZydGw0In0.SnC2_HFO912jops-M1XNCA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [3.668, 51.088], // starting position [lng, lat]
    zoom: 15 // starting zoom
});