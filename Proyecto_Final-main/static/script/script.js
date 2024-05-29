    var mymap = L.map('mapid').setView([4.7169694973141185, -74.101860320208], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    }).addTo(mymap);