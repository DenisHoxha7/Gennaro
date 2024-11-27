document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: "Maratona di New York", date: "2024-11-05", location: "Central Park" },
        { name: "Mostra d'Arte Moderna", date: "2024-12-01", location: "MoMA" }
    ];

    const eventsContainer = document.getElementById('events-container');

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Data:</strong> ${event.date}</p>
            <p><strong>Luogo:</strong> ${event.location}</p>
        `;

        eventsContainer.appendChild(eventCard);
    });
});
