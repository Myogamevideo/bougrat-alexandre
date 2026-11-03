const mapElement = document.querySelector("#map");

if (mapElement) {
    if (!window.L) {
        console.error("La carte ne peut pas être initialisée : Leaflet n'a pas été chargé.");
    } else {
        const map = window.L.map(mapElement).setView([45.766095784105, 3.1338561846015804], 5);

        window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
            maxZoom: 19
        }).addTo(map);

        [
            [45.766095784105, 3.1338561846015804],
            [47.074505431308125, 2.4051331270181664],
            [45.82670712202463, 4.967708811645344],
            [45.784445424278665, 3.1147981693147826],
            [45.041187393256685, 3.889977938614142]
        ].forEach((coordinates) => {
            window.L.marker(coordinates).addTo(map);
        });
    }
}
