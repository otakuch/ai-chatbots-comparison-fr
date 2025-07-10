// Configuration et données des modèles d'IA
const configurationModeles = {
    modeles: [
        {
            nom: "ChatGPT-4o",
            url: "https://chat.openai.com",
            drapeau: "🇺🇸",
            dateSortie: "Mai 2024",
            parametres: "~1,8T",
            architecture: "Transformer"
        },
        {
            nom: "Claude Sonnet 4",
            url: "https://claude.ai",
            drapeau: "🇺🇸",
            dateSortie: "Mai 2025",
            parametres: "~200B",
            architecture: "IA Constitutionnelle"
        },
        {
            nom: "Gemini Pro",
            url: "https://gemini.google.com",
            drapeau: "🇺🇸",
            dateSortie: "Février 2024",
            parametres: "~540B",
            architecture: "Gemini"
        },
        {
            nom: "Perplexity Pro",
            url: "https://perplexity.ai",
            drapeau: "🇺🇸",
            dateSortie: "Janvier 2024",
            parametres: "~70B",
            architecture: "Transformer + RAG"
        },
        {
            nom: "Mistral Large",
            url: "https://mistral.ai",
            drapeau: "🇫🇷",
            dateSortie: "Avril 2024",
            parametres: "~405B",
            architecture: "Transformer"
        },
        {
            nom: "Grok 3",
            url: "https://x.ai",
            drapeau: "🇺🇸",
            dateSortie: "Février 2025",
            parametres: "~314B",
            architecture: "Transformer + RL"
        },
        {
            nom: "DeepSeek R1",
            url: "https://chat.deepseek.com",
            drapeau: "🇨🇳",
            dateSortie: "Janvier 2025",
            parametres: "~671B",
            architecture: "MoE + RL"
        },
        {
            nom: "Qwen 2.5-Max",
            url: "https://tongyi.aliyun.com",
            drapeau: "🇨🇳",
            dateSortie: "Janvier 2025",
            parametres: "~688B (MoE)",
            architecture: "MoE"
        },
        {
            nom: "Step-2",
            url: "https://stepfun.com",
            drapeau: "🇨🇳",
            dateSortie: "Mars 2025",
            parametres: "~1T+",
            architecture: "MoE Multimodal"
        }
    ]
};

// Données énergétiques et de performance
const donneesPerformance = {
    energieRequeteTexte: [0.0029, 0.0008, 0.0015, 0.0006, 0.0012, 0.0034, 0.0005, 0.0007, 0.0010],
    generationImage: [0.012, 0.008, 0.010, "N/D", "N/D", 0.018, "N/D", "N/D", 0.009],
    generationVideo: [0.45, "N/D", 0.42, "N/D", "N/D", "N/D", "N/D", "N/D", 0.32],
    energieEntrainement: [4300, 1200, 2800, 800, 1900, 5600, 280, 650, 1800],
    empreinteCarbone: [4.32, 1.25, 2.18, 0.95, 1.82, 5.12, 0.78, 1.05, 1.48],
    noteEnvironnementale: ["C+", "A", "B+", "A-", "B+", "D", "A+", "A", "A-"],
    benchmarkMMLU: [88.7, 89.2, 83.7, 73.5, 84.0, 85.8, 90.1, 87.5, 86.3],
    latenceReponse: [2.1, 1.8, 1.5, 1.2, 2.3, 3.2, 1.1, 1.4, 1.7],
    fenetreContextuelle: [128000, 200000, 1000000, 32000, 128000, 128000, 256000, 512000, 200000],
    noteQualite: ["A", "A+", "B+", "B", "B+", "B", "A", "A-", "A-"],
    prixAPI: [0.015, 0.015, 0.0075, 0.02, 0.015, 0.012, 0.0014, 0.002, 0.003],
    coutParRequete: [0.045, 0.012, 0.011, 0.012, 0.018, 0.038, 0.0028, 0.0028, 0.0051],
    noteValeur: ["C", "A", "A", "A-", "B", "D", "A+", "A+", "A"],
    supportMultimodal: ["Texte, Image, Vidéo", "Texte, Image", "Texte, Image, Vidéo", "Texte", "Texte", "Texte, Image", "Texte", "Texte", "Texte, Image, Vidéo"],
    langagesProgrammation: [120, 85, 100, 50, 95, 110, 200, 150, 130],
    scorePrecision: [92, 94, 89, 78, 87, 88, 96, 91, 90],
    disponibilitePlateforme: ["Web, API, Mobile", "Web, API, Mobile", "Web, API, Mobile", "Web, API", "API, Web", "Web, API", "Web, API", "Web, API", "Web, API"],
    regionsGeographiques: ["Mondial", "US, EU", "Mondial", "US, EU", "EU, US", "US", "Chine", "Chine", "Chine"],
    limitesTaux: ["3500/jour", "Illimitées", "60/min", "600/jour", "1000/jour", "300/jour", "50/jour", "100/jour", "200/jour"],
    conformiteRGPD: ["Partielle", "Complète", "Complète", "Partielle", "Complète", "Non", "Non", "Non", "Non"],
    classificationAIAct: ["Haut risque", "Conforme", "Haut risque", "Risque limité", "Conforme", "Non évalué", "Non évalué", "Non évalué", "Non évalué"],
    localisationDonnees: ["US", "US/EU", "US", "US", "EU", "US", "Chine", "Chine", "Chine"],
    noteConfidentialite: ["B", "A", "B+", "B", "A", "C", "D", "D", "D"],
    facilitéUtilisation: [9.2, 9.5, 8.8, 9.0, 8.5, 8.0, 7.5, 7.8, 8.2],
    preferenceDeveloppeurs: [8.9, 9.1, 8.5, 7.8, 8.7, 8.2, 8.8, 8.6, 8.4],
    frequenceMiseAJour: ["Mensuelle", "Mensuelle", "Trimestrielle", "Hebdomadaire", "Bimestrielle", "Mensuelle", "Bimestrielle", "Mensuelle", "Mensuelle"]
};

// Fonction pour créer une jauge de batterie
function creerJaugeBatterie(valeur, valeurMax, unite = "") {
    const pourcentage = (valeur / valeurMax) * 100;
    let classe = "low";
    
    if (pourcentage > 75) classe = "very-high";
    else if (pourcentage > 50) classe = "high";
    else if (pourcentage > 25) classe = "medium";
    
    return `
        <div class="battery-gauge">
            <div class="battery">
                <div class="battery-fill ${classe}" style="width: ${Math.min(pourcentage, 100)}%"></div>
            </div>
            <span class="metric-value">${valeur}${unite}</span>
        </div>
    `;
}

// Fonction pour créer une note colorée
function creerNote(note) {
    const classe = note.replace(/[+-]/g, '');
    return `<span class="rating ${classe}">${note}</span>`;
}

// Fonction pour générer le tableau complet
function genererTableau() {
    const tableau = document.getElementById('comparisonTable');
    
    // En-tête du tableau
    let html = `
        <thead>
            <tr>
                <th class="model-header" style="width: 140px;">
                    <h3>Catégorie</h3>
                </th>
    `;
    
    // Ajouter les en-têtes pour chaque modèle
    configurationModeles.modeles.forEach(modele => {
        html += `
            <th class="model-header">
                <h3>${modele.nom}</h3>
                <a href="${modele.url}" target="_blank">${modele.url.replace('https://', '')}</a>
                <div class="flag">${modele.drapeau}</div>
            </th>
        `;
    });
    
    html += `
            </tr>
        </thead>
        <tbody>
    `;
    
    // Section Informations sur les Modèles
    html += `
        <tr class="category-row">
            <td colspan="${configurationModeles.modeles.length + 1}">📋 Informations sur les Modèles</td>
        </tr>
        <tr>
            <td class="data-cell"><strong>Date de Sortie</strong></td>
    `;
    configurationModeles.modeles.forEach(modele => {
        html += `<td class="data-cell">${modele.dateSortie}</td>`;
    });
    html += `</tr>`;
    
    html += `
        <tr>
            <td class="data-cell"><strong>Paramètres</strong></td>
    `;
    configurationModeles.modeles.forEach(modele => {
        html += `<td class="data-cell">${modele.parametres}</td>`;
    });
    html += `</tr>`;
    
    html += `
        <tr>
            <td class="data-cell"><strong>Architecture</strong></td>
    `;
    configurationModeles.modeles.forEach(modele => {
        html += `<td class="data-cell">${modele.architecture}</td>`;
    });
    html += `</tr>`;
    
    // Section Impact Énergétique
    html += `
        <tr class="category-row">
            <td colspan="${configurationModeles.modeles.length + 1}">⚡ Impact Énergétique et Environnemental</td>
        </tr>
    `;
    
    // Énergie requête texte
    html += `
        <tr>
            <td class="data-cell"><strong>Énergie Requête Texte (kWh)</strong><br><small>Par 1000 mots</small></td>
    `;
    donneesPerformance.energieRequeteTexte.forEach(valeur => {
        html += `<td class="data-cell">${creerJaugeBatterie(valeur, 0.0034)}</td>`;
    });
    html += `</tr>`;
    
    // Génération d'image
    html += `
        <tr>
            <td class="data-cell"><strong>Génération d'Image (kWh)</strong><br><small>Par image</small></td>
    `;
    donneesPerformance.generationImage.forEach(valeur => {
        if (valeur === "N/D") {
            html += `<td class="data-cell">N/D</td>`;
        } else {
            html += `<td class="data-cell">${creerJaugeBatterie(valeur, 0.018)}</td>`;
        }
    });
    html += `</tr>`;
    
    // Génération vidéo
    html += `
        <tr>
            <td class="data-cell"><strong>Génération Vidéo (kWh)</strong><br><small>Par 30 secondes</small></td>
    `;
    donneesPerformance.generationVideo.forEach(valeur => {
        if (valeur === "N/D") {
            html += `<td class="data-cell">N/D</td>`;
        } else {
            html += `<td class="data-cell">${creerJaugeBatterie(valeur, 0.45)}</td>`;
        }
    });
    html += `</tr>`;
    
    // Énergie d'entraînement
    html += `
        <tr>
            <td class="data-cell"><strong>Énergie d'Entraînement (MWh)</strong></td>
    `;
    donneesPerformance.energieEntrainement.forEach(valeur => {
        html += `<td class="data-cell">${creerJaugeBatterie(valeur, 5600, '')}</td>`;
    });
    html += `</tr>`;
    
    // Empreinte carbone
    html += `
        <tr>
            <td class="data-cell"><strong>Empreinte Carbone (g CO₂/requête)</strong></td>
    `;
    donneesPerformance.empreinteCarbone.forEach(valeur => {
        html += `<td class="data-cell">${creerJaugeBatterie(valeur, 5.12)}</td>`;
    });
    html += `</tr>`;
    
    // Note environnementale
    html += `
        <tr>
            <td class="data-cell"><strong>Note Environnementale</strong></td>
    `;
    donneesPerformance.noteEnvironnementale.forEach(note => {
        html += `<td class="data-cell">${creerNote(note)}</td>`;
    });
    html += `</tr>`;
    
    // Section Métriques de Performance
    html += `
        <tr class="category-row">
            <td colspan="${configurationModeles.modeles.length + 1}">📊 Métriques de Performance</td>
        </tr>
    `;
    
    // Benchmark MMLU
    html += `
        <tr>
            <td class="data-cell"><strong>Benchmark MMLU (%)</strong></td>
    `;
    donneesPerformance.benchmarkMMLU.forEach(valeur => {
        html += `<td class="data-cell"><span class="score">${valeur}%</span></td>`;
    });
    html += `</tr>`;
    
    // Latence de réponse
    html += `
        <tr>
            <td class="data-cell"><strong>Latence de Réponse (s)</strong></td>
    `;
    donneesPerformance.latenceReponse.forEach(valeur => {
        html += `<td class="data-cell">${valeur}s</td>`;
    });
    html += `</tr>`;
    
    // Fermer le tbody et le tableau
    html += `
        </tbody>
    `;
    
    tableau.innerHTML = html;
}

// Fonction d'initialisation du tableau
function initialiserTableau() {
    console.log("Initialisation du tableau de comparaison des chatbots IA...");
    try {
        genererTableau();
        console.log("Tableau généré avec succès !");
    } catch (erreur) {
        console.error("Erreur lors de la génération du tableau :", erreur);
    }
}

// Fonction utilitaire pour mettre à jour les données
function mettreAJourDonnees(nouvellesDonnees) {
    Object.assign(donneesPerformance, nouvellesDonnees);
    genererTableau();
    console.log("Données mises à jour et tableau régénéré");
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initialiserTableau);

// Export des fonctions pour utilisation externe (si nécessaire)
window.tableauIA = {
    initialiser: initialiserTableau,
    mettreAJour: mettreAJourDonnees,
    donnees: donneesPerformance,
    configuration: configurationModeles
};
