// Aggiunge una funzione per tornare in alto
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑ Torna su';
    backToTopButton.id = 'backToTop';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#007bff';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    // Mostra o nasconde il pulsante in base alla posizione di scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scrolla verso l'alto quando cliccato
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
