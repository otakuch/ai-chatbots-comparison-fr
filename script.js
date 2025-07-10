/**
 * =============================================================================
 * COMPARAISON DES CHATBOTS IA 2025 - SCRIPT JAVASCRIPT
 * Analyse Complète de la Consommation Énergétique et des Performances
 * Par Naully Nicolas - Juillet 2025
 * =============================================================================
 */

// Configuration globale de l'application
const configurationApplication = {
    version: '1.0.0',
    dateMiseAJour: '2025-07-10',
    auteur: 'Naully Nicolas',
    langue: 'fr',
    debug: false,
    
    // Paramètres d'animation
    animationDuree: 300,
    animationDelai: 50,
    
    // Seuils pour les jauges de batterie
    seuilsBatterie: {
        faible: 25,
        moyen: 50,
        eleve: 75,
        tresEleve: 100
    },
    
    // Configuration des couleurs pour les métriques
    couleursBatterie: {
        faible: '#27ae60',
        moyenne: '#f39c12',
        elevee: '#e67e22',
        tresElevee: '#e74c3c'
    }
};

// Variables globales pour la gestion des données
let donneesModeles = null;
let donneesBenchmarks = null;
let filtresActifs = {};
let triActuel = null;
let vueActuelle = 'tableau';

/**
 * =============================================================================
 * INITIALISATION DE L'APPLICATION
 * =============================================================================
 */

/**
 * Initialise l'application au chargement de la page
 */
function initialiserApplication() {
    try {
        console.log('🚀 Initialisation de la Comparaison des Chatbots IA 2025');
        
        // Afficher les informations de configuration si en mode debug
        if (configurationApplication.debug) {
            console.log('📊 Configuration:', configurationApplication);
        }
        
        // Initialiser les événements
        initialiserEvenements();
        
        // Charger les données si disponibles
        chargerDonnees();
        
        // Initialiser les animations
        initialiserAnimations();
        
        // Initialiser les fonctionnalités interactives
        initialiserInteractivite();
        
        // Vérifier la compatibilité du navigateur
        verifierCompatibilite();
        
        console.log('✅ Application initialisée avec succès');
        
    } catch (erreur) {
        console.error('❌ Erreur lors de l\'initialisation:', erreur);
        afficherMessageErreur('Erreur lors du chargement de l\'application');
    }
}

/**
 * Initialise tous les événements de l'interface
 */
function initialiserEvenements() {
    console.log('🎯 Initialisation des événements');
    
    // Événements au chargement du document
    document.addEventListener('DOMContentLoaded', () => {
        console.log('📄 Document chargé');
        
        // Initialiser les jauges de batterie avec animation
        setTimeout(() => {
            animerJaugesBatterie();
        }, 500);
        
        // Ajouter les événements de survol
        ajouterEvenementsHover();
        
        // Initialiser les tooltips
        initialiserTooltips();
    });
    
    // Événements de redimensionnement
    window.addEventListener('resize', debounce(() => {
        console.log('📱 Redimensionnement détecté');
        ajusterAffichageResponsive();
    }, 250));
    
    // Événements de défilement pour les effets parallax
    window.addEventListener('scroll', throttle(() => {
        gererEffetsDefilement();
    }, 16)); // 60fps
    
    // Événements clavier pour l'accessibilité
    document.addEventListener('keydown', gererNavigationClavier);
    
    // Événements pour la gestion d'erreurs globales
    window.addEventListener('error', (event) => {
        console.error('🚨 Erreur JavaScript:', event.error);
        if (configurationApplication.debug) {
            afficherMessageErreur(`Erreur: ${event.error.message}`);
        }
    });
}

/**
 * =============================================================================
 * GESTION DES DONNÉES
 * =============================================================================
 */

/**
 * Charge les données des modèles et benchmarks
 */
async function chargerDonnees() {
    try {
        console.log('📡 Chargement des données...');
        
        // Simuler le chargement de données (à remplacer par de vrais appels API)
        await similerChargementDonnees();
        
        console.log('✅ Données chargées avec succès');
        
    } catch (erreur) {
        console.error('❌ Erreur lors du chargement des données:', erreur);
        afficherMessageErreur('Impossible de charger les données');
    }
}

/**
 * Simule le chargement de données (remplace les vrais appels API)
 */
function similerChargementDonnees() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Données simulées des modèles
            donneesModeles = {
                'chatgpt-4o': {
                    nom: 'ChatGPT-4o',
                    editeur: 'OpenAI',
                    pays: 'États-Unis',
                    url: 'https://chat.openai.com',
                    dateSortie: '2024-05',
                    parametres: '1.8T',
                    architecture: 'Transformer',
                    consommationTexte: 0.0029,
                    consommationImage: 0.012,
                    consommationVideo: 0.45,
                    energieEntrainement: 4300,
                    empreinteCarbone: 4.32,
                    noteEnvironnementale: 'C+',
                    scoreMMLS: 87.2,
                    latence: 850,
                    noteQualite: 'A-'
                },
                // Autres modèles...
            };
            
            resolve();
        }, 1000);
    });
}

/**
 * =============================================================================
 * ANIMATIONS ET EFFETS VISUELS
 * =============================================================================
 */

/**
 * Initialise toutes les animations de l'interface
 */
function initialiserAnimations() {
    console.log('🎬 Initialisation des animations');
    
    // Animation d'entrée du conteneur principal
    const conteneur = document.querySelector('.container');
    if (conteneur) {
        conteneur.style.opacity = '0';
        conteneur.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            conteneur.style.transition = 'all 0.6s ease-out';
            conteneur.style.opacity = '1';
            conteneur.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Animation des éléments au défilement
    observerElementsAuDefilement();
}

/**
 * Anime toutes les jauges de batterie avec un effet de remplissage progressif
 */
function animerJaugesBatterie() {
    console.log('🔋 Animation des jauges de batterie');
    
    const jauges = document.querySelectorAll('.battery-fill');
    
    jauges.forEach((jauge, index) => {
        // Récupérer la largeur finale depuis le CSS
        const largeurFinale = jauge.style.width;
        
        // Commencer avec une largeur de 0
        jauge.style.width = '0%';
        
        // Animer avec un délai décalé pour un effet en cascade
        setTimeout(() => {
            jauge.style.transition = `width ${configurationApplication.animationDuree * 2}ms ease-out`;
            jauge.style.width = largeurFinale;
            
            // Ajouter un effet de brillance après l'animation
            setTimeout(() => {
                ajouterEffetBrillance(jauge);
            }, configurationApplication.animationDuree * 2);
            
        }, index * configurationApplication.animationDelai);
    });
}

/**
 * Ajoute un effet de brillance à un élément
 */
function ajouterEffetBrillance(element) {
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    
    // Créer l'élément de brillance
    const brillance = document.createElement('div');
    brillance.style.position = 'absolute';
    brillance.style.top = '0';
    brillance.style.left = '-100%';
    brillance.style.width = '100%';
    brillance.style.height = '100%';
    brillance.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)';
    brillance.style.transition = 'left 0.6s ease-out';
    
    element.appendChild(brillance);
    
    // Déclencher l'animation
    setTimeout(() => {
        brillance.style.left = '100%';
    }, 50);
    
    // Nettoyer après l'animation
    setTimeout(() => {
        if (brillance.parentNode) {
            brillance.parentNode.removeChild(brillance);
        }
    }, 650);
}

/**
 * =============================================================================
 * INTERACTIVITÉ ET GESTION DES ÉVÉNEMENTS
 * =============================================================================
 */

/**
 * Initialise toutes les fonctionnalités interactives
 */
function initialiserInteractivite() {
    console.log('🎮 Initialisation de l\'interactivité');
    
    // Ajouter les gestionnaires de clic pour les éléments interactifs
    ajouterGestionnairesClics();
    
    // Initialiser les filtres et tris
    initialiserFiltresTris();
    
    // Configurer les raccourcis clavier
    configurerRaccourcisClavier();
}

/**
 * Ajoute tous les événements de survol pour les effets visuels
 */
function ajouterEvenementsHover() {
    console.log('🖱️ Ajout des événements de survol');
    
    // Effet hover sur les en-têtes de modèles
    const entetesModeles = document.querySelectorAll('.model-header');
    entetesModeles.forEach(entete => {
        entete.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        entete.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Effet hover sur les cellules de données
    const cellulesData = document.querySelectorAll('.data-cell');
    cellulesData.forEach(cellule => {
        cellule.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.transform = 'scale(1.01)';
            this.style.zIndex = '5';
        });
        
        cellule.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
            this.style.zIndex = '';
        });
    });
    
    // Effet hover sur les notes (ratings)
    const notes = document.querySelectorAll('.rating');
    notes.forEach(note => {
        note.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        note.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/**
 * =============================================================================
 * GESTION DES FILTRES ET TRIS
 * =============================================================================
 */

/**
 * Initialise le système de filtres et de tris
 */
function initialiserFiltresTris() {
    console.log('🔍 Initialisation des filtres et tris');
    
    // Créer l'interface de filtrage si elle n'existe pas
    creerInterfaceFiltrage();
    
    // Initialiser les gestionnaires d'événements pour les filtres
    ajouterEvenementsFiltres();
}

/**
 * Crée l'interface de filtrage dynamique
 */
function creerInterfaceFiltrage() {
    // Vérifier si l'interface existe déjà
    if (document.querySelector('.interface-filtrage')) {
        return;
    }
    
    const conteneurFiltres = document.createElement('div');
    conteneurFiltres.className = 'interface-filtrage';
    conteneurFiltres.innerHTML = `
        <div class="panneau-filtres">
            <h3>🔍 Filtres et Options</h3>
            <div class="groupe-filtres">
                <label>
                    <input type="checkbox" id="filtre-eco" checked>
                    Modèles éco-responsables (Note A/B)
                </label>
                <label>
                    <input type="checkbox" id="filtre-performance" checked>
                    Haute performance (Score MMLU > 85%)
                </label>
                <label>
                    <input type="checkbox" id="filtre-rapide" checked>
                    Réponse rapide (< 500ms)
                </label>
            </div>
            <div class="controles-tri">
                <select id="tri-colonne">
                    <option value="">Trier par...</option>
                    <option value="energie">Consommation énergétique</option>
                    <option value="performance">Performance MMLU</option>
                    <option value="latence">Latence</option>
                    <option value="carbone">Empreinte carbone</option>
                </select>
                <button id="btn-inverser-tri">⇅</button>
            </div>
            <button id="btn-reinitialiser">🔄 Réinitialiser</button>
        </div>
    `;
    
    // Insérer avant le tableau
    const conteneurTableau = document.querySelector('.table-container');
    if (conteneurTableau) {
        conteneurTableau.parentNode.insertBefore(conteneurFiltres, conteneurTableau);
    }
}

/**
 * =============================================================================
 * UTILITAIRES ET FONCTIONS D'AIDE
 * =============================================================================
 */

/**
 * Fonction debounce pour limiter les appels répétés
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Fonction throttle pour limiter la fréquence d'exécution
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Affiche un message d'erreur à l'utilisateur
 */
function afficherMessageErreur(message) {
    console.error('💥 Erreur:', message);
    
    // Créer une notification d'erreur
    const notification = document.createElement('div');
    notification.className = 'notification-erreur';
    notification.innerHTML = `
        <div class="contenu-notification">
            <span class="icone-erreur">⚠️</span>
            <span class="message-erreur">${message}</span>
            <button class="btn-fermer" onclick="this.parentNode.parentNode.remove()">×</button>
        </div>
    `;
    
    // Ajouter les styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f8d7da;
        color: #721c24;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Supprimer automatiquement après 5 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

/**
 * Vérifie la compatibilité du navigateur
 */
function verifierCompatibilite() {
    const fonctionnalitesRequises = [
        'querySelector',
        'addEventListener',
        'Promise',
        'fetch'
    ];
    
    const fonctionnalitesManquantes = fonctionnalitesRequises.filter(
        fonctionnalite => !(fonctionnalite in window || fonctionnalite in document)
    );
    
    if (fonctionnalitesManquantes.length > 0) {
        console.warn('⚠️ Fonctionnalités manquantes:', fonctionnalitesManquantes);
        afficherMessageErreur('Votre navigateur ne supporte pas toutes les fonctionnalités requises');
    } else {
        console.log('✅ Navigateur compatible');
    }
}

/**
 * =============================================================================
 * FONCTIONS D'ACCESSIBILITÉ
 * =============================================================================
 */

/**
 * Gère la navigation au clavier pour l'accessibilité
 */
function gererNavigationClavier(event) {
    // Navigation avec les flèches dans le tableau
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || 
        event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        
        const elementActif = document.activeElement;
        if (elementActif && elementActif.closest('.comparison-table')) {
            event.preventDefault();
            naviguerDansTableau(event.key, elementActif);
        }
    }
    
    // Raccourcis clavier
    if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
            case 'f':
                event.preventDefault();
                // Activer la recherche/filtrage
                const champRecherche = document.querySelector('#recherche');
                if (champRecherche) {
                    champRecherche.focus();
                }
                break;
                
            case 'r':
                event.preventDefault();
                // Réinitialiser les filtres
                reinitialiserFiltres();
                break;
        }
    }
    
    // Échap pour fermer les éléments modaux
    if (event.key === 'Escape') {
        fermerElementsModaux();
    }
}

/**
 * Initialise les tooltips pour une meilleure accessibilité
 */
function initialiserTooltips() {
    console.log('💬 Initialisation des tooltips');
    
    const elementsAvecTooltip = document.querySelectorAll('[title]');
    
    elementsAvecTooltip.forEach(element => {
        // Sauvegarder le titre original
        const titreOriginal = element.getAttribute('title');
        element.removeAttribute('title'); // Éviter le tooltip natif
        
        // Créer le tooltip personnalisé
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-personnalise';
        tooltip.textContent = titreOriginal;
        tooltip.style.cssText = `
            position: absolute;
            background: #333;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            white-space: nowrap;
        `;
        
        document.body.appendChild(tooltip);
        
        // Événements pour afficher/masquer le tooltip
        element.addEventListener('mouseenter', (e) => {
            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
            tooltip.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
        
        // Nettoyer le tooltip quand l'élément est supprimé
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.removedNodes.forEach((node) => {
                    if (node === element && tooltip.parentNode) {
                        tooltip.remove();
                    }
                });
            });
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    });
}

/**
 * =============================================================================
 * GESTION RESPONSIVE ET OPTIMISATIONS
 * =============================================================================
 */

/**
 * Ajuste l'affichage en fonction de la taille d'écran
 */
function ajusterAffichageResponsive() {
    const largeurEcran = window.innerWidth;
    
    console.log(`📱 Ajustement responsive pour ${largeurEcran}px`);
    
    // Ajustements pour mobile
    if (largeurEcran < 768) {
        activerModeMobile();
    } else if (largeurEcran < 1024) {
        activerModeTablette();
    } else {
        activerModeDesktop();
    }
}

/**
 * Active le mode d'affichage mobile
 */
function activerModeMobile() {
    console.log('📱 Mode mobile activé');
    
    const tableau = document.querySelector('.comparison-table');
    if (tableau) {
        tableau.style.fontSize = '11px';
    }
    
    // Masquer certaines colonnes moins importantes sur mobile
    const colonnesMoinsImportantes = document.querySelectorAll('.colonne-secondaire');
    colonnesMoinsImportantes.forEach(colonne => {
        colonne.style.display = 'none';
    });
}

/**
 * Active le mode d'affichage tablette
 */
function activerModeTablette() {
    console.log('📱 Mode tablette activé');
    
    const tableau = document.querySelector('.comparison-table');
    if (tableau) {
        tableau.style.fontSize = '12px';
    }
}

/**
 * Active le mode d'affichage desktop
 */
function activerModeDesktop() {
    console.log('🖥️ Mode desktop activé');
    
    const tableau = document.querySelector('.comparison-table');
    if (tableau) {
        tableau.style.fontSize = '13px';
    }
    
    // Réafficher toutes les colonnes
    const colonnesMasquees = document.querySelectorAll('.colonne-secondaire');
    colonnesMasquees.forEach(colonne => {
        colonne.style.display = '';
    });
}

/**
 * =============================================================================
 * OBSERVATEURS ET ANIMATIONS AU DÉFILEMENT
 * =============================================================================
 */

/**
 * Observe les éléments pour les animer lors du défilement
 */
function observerElementsAuDefilement() {
    if ('IntersectionObserver' in window) {
        const observateur = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animerElement(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        // Observer les lignes du tableau
        const lignesTableau = document.querySelectorAll('tr');
        lignesTableau.forEach(ligne => {
            observateur.observe(ligne);
        });
    }
}

/**
 * Anime un élément spécifique
 */
function animerElement(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
}

/**
 * =============================================================================
 * FONCTIONS SUPPLÉMENTAIRES ET GESTIONNAIRES
 * =============================================================================
 */

/**
 * Ajoute les gestionnaires de clic pour les éléments interactifs
 */
function ajouterGestionnairesClics() {
    // Gestionnaire pour les liens externes (ouverture dans un nouvel onglet)
    const liensExternes = document.querySelectorAll('a[href^="http"]');
    liensExternes.forEach(lien => {
        lien.addEventListener('click', (e) => {
            // Ajouter un petit délai pour l'effet visuel
            e.preventDefault();
            setTimeout(() => {
                window.open(lien.href, '_blank', 'noopener,noreferrer');
            }, 150);
        });
    });
}

/**
 * Gère les effets de défilement (parallax, header fixe, etc.)
 */
function gererEffetsDefilement() {
    const positionDefilement = window.pageYOffset;
    
    // Effet parallax subtil sur l'en-tête
    const entete = document.querySelector('.header');
    if (entete) {
        entete.style.transform = `translateY(${positionDefilement * 0.1}px)`;
    }
    
    // Masquer/afficher un bouton "retour en haut"
    const btnRetourHaut = document.querySelector('.btn-retour-haut');
    if (btnRetourHaut) {
        if (positionDefilement > 500) {
            btnRetourHaut.style.opacity = '1';
            btnRetourHaut.style.pointerEvents = 'all';
        } else {
            btnRetourHaut.style.opacity = '0';
            btnRetourHaut.style.pointerEvents = 'none';
        }
    }
}

/**
 * Configure les raccourcis clavier personnalisés
 */
function configurerRaccourcisClavier() {
    console.log('⌨️ Configuration des raccourcis clavier');
    
    // Afficher l'aide des raccourcis avec F1
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F1') {
            e.preventDefault();
            afficherAideRaccourcis();
        }
    });
}

/**
 * Affiche l'aide des raccourcis clavier
 */
function afficherAideRaccourcis() {
    const aide = `
    🎯 RACCOURCIS CLAVIER DISPONIBLES :
    
    • Ctrl/Cmd + F : Activer la recherche
    • Ctrl/Cmd + R : Réinitialiser les filtres  
    • Échap : Fermer les éléments modaux
    • F1 : Afficher cette aide
    • ↑↓←→ : Naviguer dans le tableau
    `;
    
    alert(aide);
}

/**
 * =============================================================================
 * INITIALISATION AU CHARGEMENT
 * =============================================================================
 */

// Initialiser l'application dès que le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiserApplication);
} else {
    // Le DOM est déjà chargé
    initialiserApplication();
}

// Gestionnaire global pour les erreurs non interceptées
window.addEventListener('unhandledrejection', (event) => {
    console.error('🚨 Promise rejetée non gérée:', event.reason);
    if (configurationApplication.debug) {
        afficherMessageErreur(`Erreur Promise: ${event.reason}`);
    }
});

/**
 * =============================================================================
 * EXPORT DES FONCTIONS PUBLIQUES (si module)
 * =============================================================================
 */

// Si ce script est utilisé comme module, exporter les fonctions publiques
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initialiserApplication,
        configurationApplication,
        animerJaugesBatterie,
        afficherMessageErreur,
        ajusterAffichageResponsive
    };
}

// Exposer certaines fonctions globalement pour le débogage
window.ComparaisonIA = {
    version: configurationApplication.version,
    reinitialiser: initialiserApplication,
    animerBatteries: animerJaugesBatterie,
    debug: (activer) => {
        configurationApplication.debug = activer;
        console.log(`🐛 Mode debug ${activer ? 'activé' : 'désactivé'}`);
    }
};

console.log('📜 Script JavaScript chargé - Comparaison des Chatbots IA 2025');
