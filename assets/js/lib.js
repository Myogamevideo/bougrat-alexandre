import {
    magicMouse
} from '../../node_modules/magicmouse.js/dist/magic_mouse.js';
import '../../node_modules/leaflet/dist/leaflet.js';

let options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};
magicMouse(options);

var map = L.map('map').setView([45.766095784105, 3.1338561846015804], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([45.766095784105, 3.1338561846015804]).addTo(map);
L.marker([47.074505431308125, 2.4051331270181664]).addTo(map);
L.marker([45.82670712202463, 4.967708811645344]).addTo(map);
L.marker([45.784445424278665, 3.1147981693147826]).addTo(map);
L.marker([45.041187393256685, 3.889977938614142]).addTo(map);