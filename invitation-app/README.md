# Invitation App

Bienvenue dans le projet Invitation App, une application qui génère des billets d'invitation électroniques avec QR codes pour l'authentification.

## Structure du projet

Le projet est divisé en deux parties principales : le backend et le frontend.

### Backend

Le backend est construit avec Python et utilise Flask pour gérer les requêtes. Il est responsable de la création des billets d'invitation et de la génération des QR codes.

- **`backend/app.py`** : Point d'entrée de l'application backend.
- **`backend/requirements.txt`** : Liste des dépendances nécessaires pour le backend.
- **`backend/README.md`** : Documentation pour le backend.

### Frontend

Le frontend est développé avec Next.js, TypeScript et Tailwind CSS. Il fournit une interface utilisateur pour remplir les informations nécessaires à la génération des billets d'invitation.

- **`frontend/pages/index.tsx`** : Page d'accueil avec le formulaire d'invitation.
- **`frontend/pages/_app.tsx`** : Personnalisation de l'application Next.js.
- **`frontend/public`** : Dossier pour les fichiers statiques.
- **`frontend/styles/globals.css`** : Styles globaux de l'application.
- **`frontend/tailwind.config.js`** : Configuration de Tailwind CSS.
- **`frontend/tsconfig.json`** : Configuration TypeScript.
- **`frontend/package.json`** : Configuration npm pour le frontend.
- **`frontend/README.md`** : Documentation pour le frontend.

### Autres fichiers

- **`.gitignore`** : Fichiers et dossiers à ignorer par Git.
- **`README.md`** : Documentation générale du projet.

## Installation

Pour installer les dépendances du backend, exécutez :

```
pip install -r backend/requirements.txt
```

Pour le frontend, naviguez dans le dossier `frontend` et exécutez :

```
npm install
```

## Exécution

Pour démarrer le serveur backend, exécutez :

```
python backend/app.py
```

Pour démarrer le frontend, naviguez dans le dossier `frontend` et exécutez :

```
npm run dev
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des demandes de tirage pour améliorer le projet.