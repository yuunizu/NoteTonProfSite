// Liste des professeurs et leurs profils
const profs = [
    { name: "Betari Abdelkader", url: "profil-BetariAbdelkader.html" },
    { name: "Eikichi Onizuka", url: "profil-EikichiOnizuka.html" },
    { name: "Lotfi Lakhal", url: "profil-LotfiLakhal.html" },
    { name: "Mickael Martin Nevot", url: "profil-MickaelMartinNevot.html"},
    { name: "Martin Nevot Mickael", url: "profil-MickaelMartinNevot.html" }
];

// Fonction de recherche
document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const result = profs.find(prof => prof.name.toLowerCase().includes(query));

    if (result) {
        window.location.href = result.url; // Redirige vers le profil
    } else {
        alert("Aucun professeur trouvé.");
    }
});


// Scroll to top button
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Vérifie la préférence stockée dans localStorage au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    const styleLink = document.getElementById('styleLink');
    const savedTheme = localStorage.getItem('theme');

    // Si une préférence est sauvegardée, appliquez-la
    if (savedTheme && savedTheme !== styleLink.getAttribute('href')) {
        styleLink.setAttribute('href', savedTheme);
    }
});

// Gère le basculement entre les modes
document.getElementById('toggleMode').addEventListener('click', function () {
    const styleLink = document.getElementById('styleLink');
    const currentTheme = styleLink.getAttribute('href');

    // Basculer entre les thèmes
    const newTheme = currentTheme.includes('default.css') ? '../assets/css/light.css' : '../assets/css/default.css';
    styleLink.setAttribute('href', newTheme);

    // Sauvegarde la préférence dans localStorage
    localStorage.setItem('theme', newTheme);
});
