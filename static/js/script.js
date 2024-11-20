// File: assets/js/app.js

// Script per gestire la mappa interattiva
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Coordinate di New York
        zoom: 12
    });

    // Marker per alcune attrazioni
    const locations = [
        { title: "Statua della Libertà", position: { lat: 40.6892, lng: -74.0445 } },
        { title: "Central Park", position: { lat: 40.7851, lng: -73.9683 } },
        { title: "Times Square", position: { lat: 40.7580, lng: -73.9855 } },
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
        });
    });
}

// Simulazione di eventi dinamici
const events = [
    { name: "Maratona di New York", date: "5 novembre 2024", location: "Central Park" },
    { name: "Mostra d'Arte Moderna", date: "1 dicembre 2024", location: "MoMA" },
    { name: "Capodanno a Times Square", date: "31 dicembre 2024" }
];

document.addEventListener('DOMContentLoaded', () => {
    const eventsList = document.getElementById('events-list');
    if (eventsList) {
        events.forEach(event => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = `<strong>${event.name}:</strong> ${event.date} - ${event.location}`;
            eventsList.appendChild(li);
        });
    }
});
