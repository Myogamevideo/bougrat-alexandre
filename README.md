# Portfolio d'Alexandre Bougrat

Portfolio personnel et CV en français, réalisés en HTML, CSS et JavaScript. Le site présente le parcours professionnel, les 18 exemples anonymisés de la mission au Crédit Agricole Centre France (février 2023–novembre 2026), des projets publics et personnels, ainsi que l’usage quotidien d’assistants IA pour le développement logiciel.

## Contenu

- `index.html` : portfolio, expériences, formations, projets, réalisations anonymisées de la mission CACF et contact.
- `cv.html` : CV imprimable avec bouton de téléchargement.
- `assets/css/main.css` et `assets/js/` : styles et interactions.
- `assets/images/` : portrait, favicon et logos des organismes.
- `assets/pdf/BOUGRAT Alexandre CV.pdf` : CV PDF au format A4, conçu pour tenir sur une page.

Les réalisations CACF sont regroupées dans un panneau repliable. Leurs descriptions sont anonymisées et généralisées afin de ne pas exposer les noms d’applications, règles métier détaillées ou éléments propres au SI. Les volumes affichés sont des statistiques d’historique des dépôts et ne constituent pas une attribution individuelle des commits.

Les projets personnels incluent une installation de domotique et de suivi énergétique autour de Proxmox, Docker, Home Assistant, MQTT, Grafana et Loki.

Le CV distingue les technologies utilisées en expérience professionnelle de celles étudiées en formation. Le niveau d’anglais est décrit comme la lecture de documentation technique, sans niveau CECRL revendiqué.

## Lancer le site

Le projet n'a ni étape de compilation ni dépendance : servez le dossier avec un serveur HTTP local, par exemple :

```sh
python3 -m http.server 8000
```

Ouvrez `http://localhost:8000`.

## Générer le PDF du CV

Après toute modification de `cv.html`, régénérez le PDF :

```sh
scripts/build-cv-pdf.sh
```

Le script utilise Chrome ou Chromium en mode headless, vérifie que le PDF fait une seule page A4 (`pdfinfo`, paquet `poppler-utils`) et ne remplace `assets/pdf/BOUGRAT Alexandre CV.pdf` qu'en cas de succès.

## Vérifications

- `git diff --check`
- Vérifier le portfolio et le CV dans un navigateur sur ordinateur et mobile.
- Vérifier que le PDF est à jour : `git log -1 --format=%cI -- cv.html` ne doit pas être plus récent que `git log -1 --format=%cI -- "assets/pdf/BOUGRAT Alexandre CV.pdf"` (avant commit, vérifier aussi que les deux fichiers sont dans le même lot : `git status --short`).

Les expériences, périodes, volumes et informations personnelles sont présentés à partir des informations fournies par Alexandre. Vérifier les détails et technologies avant publication, notamment ceux qui ne sont pas explicitement confirmés.
