document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-25.746111, 28.188056], 13);

    var lodges = [
        {
            name: "Pretoria Leinster Lodge",
            lat: -25.746111,
            lng: 28.188056,
            info: "Pretoria Leinster Lodge #743. Founded in 1950."
        },
        {
            name: "Connaught Lodge",
            lat: -25.746111,
            lng: 28.188056,
            info: "Connaught Lodge #361. Founded in 1903."
        }
        // ... add more lodges here
    ];

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    var markers = L.markerClusterGroup();

    lodges.forEach(function(lodge) {
        var marker = L.marker([lodge.lat, lodge.lng]);
        marker.bindPopup("<strong>" + lodge.name + "</strong><br>" + lodge.info);

        // Explicitly handle marker click to open popup
        marker.on('click', function() {
            this.openPopup();
        });

        markers.addLayer(marker);
    });

    map.addLayer(markers);

    document.querySelector("a[href='#lodge-locations']").addEventListener("click", function() {
        setTimeout(function() {
            map.invalidateSize();
        }, 100);
    });
});
