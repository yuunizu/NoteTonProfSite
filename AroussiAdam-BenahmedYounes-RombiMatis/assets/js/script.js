// Liste des professeurs et leurs profils
// Déclaration d'une constante 'profs' contenant un tableau d'objets
const profs = [
    { name: "Betari Abdelkader", url: "profil-BetariAbdelkader.html" }, // Objet représentant un prof avec un nom et un lien vers son profil
    { name: "Eikichi Onizuka", url: "profil-EikichiOnizuka.html" },     // Chaque objet contient un 'name' et un 'url'
    { name: "Lotfi Lakhal", url: "profil-LotfiLakhal.html"},            // Ce tableau sert de base de données pour la recherche
    { name: "Mickael Martin Nevot", url: "profil-MickaelMartinNevot.html" },
];

// Ajout d'un événement 'click' au bouton avec l'ID 'searchButton'
document.getElementById('searchButton').addEventListener('click', function () {
    // Récupère la valeur saisie dans la barre de recherche (input avec l'ID 'searchBar')
    const query = document.getElementById('searchBar').value.toLowerCase(); 
    // Convertit la saisie en minuscule pour une recherche insensible à la casse

    // Recherche dans le tableau 'profs' un objet dont le 'name' contient la chaîne saisie
    const result = profs.find(prof => prof.name.toLowerCase().includes(query));
    //Pour chaque professeur dans le tableau profs, name est également converti en minuscules avec .toLowerCase().
    // La méthode 'find' retourne le premier objet qui correspond à la condition
    // 'toLowerCase()' rend la recherche insensible à la casse
    // 'includes(query)' vérifie si 'name' contient le texte saisi dans 'query'

    if (result) {
        // Si un résultat est trouvé, redirige l'utilisateur vers l'URL du professeur
        window.location.href = result.url;
    } else {
        // Si aucun résultat n'est trouvé, affiche une alerte
        alert("Aucun professeur trouvé.");
    }
});


// Lorsque le DOM est entièrement chargé et prêt
document.addEventListener('DOMContentLoaded', function () {
    // Récupère le bouton "Scroll to Top" grâce à son ID
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Ajoute un écouteur d'événement pour surveiller le défilement de la fenêtre
    window.addEventListener('scroll', function () {
        // Vérifie si la page a été défilée de plus de 30 pixels depuis le haut
        if (window.scrollY > 30) {
            // Affiche le bouton si la condition est remplie
            scrollToTopButton.style.display = 'block';
        } else {
            // Cache le bouton si l'utilisateur est proche du haut de la page
            scrollToTopButton.style.display = 'none';
        }
    });

    // Ajoute un écouteur d'événement au bouton "Scroll to Top"
    scrollToTopButton.addEventListener('click', function () {
        // Défile jusqu'en haut de la page avec un effet de défilement fluide
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Deuxième partie : Applique le thème préféré de l'utilisateur au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    // Récupère l'élément <link> utilisé pour charger la feuille de style
    const styleLink = document.getElementById('styleLink');

    // Cherche dans le localStorage si un thème est déjà sauvegardé
    const savedTheme = localStorage.getItem('theme');

    // Si une préférence est sauvegardée ET qu'elle est différente du thème actuel
    if (savedTheme && savedTheme !== styleLink.getAttribute('href')) {
        // Met à jour l'attribut 'href' pour appliquer le thème sauvegardé
        styleLink.setAttribute('href', savedTheme);
    }
});

// Troisième partie : Gère le basculement entre les thèmes sombre et clair
document.getElementById('toggleMode').addEventListener('click', function () {
    // Récupère l'élément <link> pour changer les styles
    const styleLink = document.getElementById('styleLink');

    // Obtient le chemin actuel du fichier CSS utilisé
    const currentTheme = styleLink.getAttribute('href');

    // Vérifie le thème actuel et bascule entre "default.css" et "light.css"
    const newTheme = currentTheme.includes('default.css') 
        ? '../assets/css/light.css'  // Si "default.css" est utilisé, passe à "light.css"
        : '../assets/css/default.css'; // Sinon, repasse à "default.css"

    // Met à jour l'attribut 'href' pour charger le nouveau thème
    styleLink.setAttribute('href', newTheme);

    // Sauvegarde la préférence dans le localStorage pour une utilisation future
    localStorage.setItem('theme', newTheme);
});