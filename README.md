# CV d'Alexandre Bougrat

Site statique présentant le CV et l'expérience professionnelle d'Alexandre Bougrat. Le site est construit en HTML, CSS et JavaScript sans étape de compilation.

## Prévisualisation locale

Depuis la racine du dépôt, lancez un serveur HTTP local :

```sh
python3 -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000>. Utilisez un serveur local plutôt que d'ouvrir `index.html` directement afin que les ressources et la carte se chargent correctement.

## Structure

- `index.html` : contenu du CV et liens de contact.
- `assets/css/main.css` : styles du site.
- `assets/js/main.js` : effets de texte, compteurs et en-tête.
- `assets/js/lib.js` : initialisation de la carte Leaflet.
- `assets/images/` : portrait et visuels.
- `assets/pdf/BOUGRAT Alexandre CV.pdf` : CV à télécharger.

## Publication

Le site ne nécessite ni installation de dépendances ni compilation. Pour GitHub Pages, configurez la source de publication sur la branche `master` et le dossier `/ (root)`.

Les polices, icônes, styles Bootstrap, bibliothèque Leaflet, tuiles OpenStreetMap et lecteur Spotify sont chargés depuis leurs services externes : une connexion Internet est nécessaire pour les afficher.
