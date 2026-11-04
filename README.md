# Portfolio d'Alexandre Bougrat

Portfolio personnel et CV en français, réalisés en HTML, CSS et JavaScript. Le site présente le parcours professionnel, 18 réalisations anonymisées de la mission au Crédit Agricole Centre France, des projets publics et personnels, ainsi que l’usage quotidien d’assistants IA pour le développement logiciel.

## Contenu

- `index.html` : portfolio, expériences, formations, projets, réalisations anonymisées de la mission CACF et contact.
- `cv.html` : CV imprimable avec bouton de téléchargement.
- `assets/css/main.css` et `assets/js/` : styles et interactions.
- `assets/images/` : portrait, favicon et logos des organismes.
- `assets/pdf/BOUGRAT Alexandre CV.pdf` : CV PDF au format A4, conçu pour tenir sur une page.

Les réalisations CACF sont regroupées dans un panneau repliable, avec leurs périodes, volumes recensés et descriptions techniques. Les intitulés et détails sont formulés pour ne pas publier les noms des applications internes.

Les projets personnels incluent une installation de domotique et de suivi énergétique autour de Proxmox, Docker, Home Assistant, MQTT, Grafana et Loki.

## Lancer le site

Le projet n'a pas d'étape de compilation. Installez les dépendances JavaScript :

```sh
npm install
```

Servez ensuite le dossier avec un serveur HTTP local, par exemple :

```sh
python3 -m http.server 8000
```

Ouvrez `http://localhost:8000`. Le serveur permet de charger les modules JavaScript locaux utilisés par les animations.

## Générer le PDF du CV

Après toute modification de `cv.html`, régénérez le PDF avec Chrome ou Chromium en mode headless :

```sh
google-chrome --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="assets/pdf/BOUGRAT Alexandre CV.pdf" \
  "file:///chemin/absolu/vers/bougrat-alexandre/cv.html"
```

Vérifiez que le PDF contient une page A4 :

```sh
pdfinfo "assets/pdf/BOUGRAT Alexandre CV.pdf"
```

## Vérifications

- `git diff --check`
- Vérifier le portfolio et le CV dans un navigateur sur ordinateur et mobile.
- Vérifier que le PDF tient sur une seule page A4 après une modification du CV.

Les expériences, périodes, volumes et informations personnelles sont présentés à partir des informations fournies par Alexandre. Vérifier les détails et technologies avant publication, notamment ceux qui ne sont pas explicitement confirmés.
