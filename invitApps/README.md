# README.md

# Invitation App

Ce projet est une application web permettant de générer des billets d'invitation électroniques avec QR codes pour l'authentification. Il est composé d'un backend en Flask et d'un frontend en Next.js.

## Structure du projet

- **backend/** : Contient le code du serveur Flask.
  - `app.py` : Point d'entrée de l'application Flask, gère les routes et les requêtes.
  - `requirements.txt` : Liste des dépendances nécessaires pour le backend.
  - `README.md` : Documentation pour le backend.

- **frontend/** : Contient le code de l'application Next.js.
  - `pages/` : Contient les composants de pages de l'application.
    - `index.tsx` : Composant principal gérant le formulaire d'invitation.
    - `_app.tsx` : Personnalisation du composant App de Next.js.
  - `public/` : Dossier pour les fichiers statiques.
  - `styles/` : Contient les styles globaux.
    - `globals.css` : Styles globaux de l'application.
  - `tailwind.config.js` : Configuration de Tailwind CSS.
  - `tsconfig.json` : Configuration TypeScript.
  - `package.json` : Configuration npm pour le frontend.
  - `README.md` : Documentation pour le frontend.

## Installation

1. Clonez le dépôt :
   ```
   git clone <url-du-depot>
   cd invitation-app
   ```

2. Installez les dépendances du backend :
   ```
   cd backend
   pip install -r requirements.txt
   ```

3. Installez les dépendances du frontend :
   ```
   cd frontend
   npm install
   ```

## Exécution

- Pour démarrer le backend :
  ```
  cd backend
  python app.py
  ```

- Pour démarrer le frontend :
  ```
  cd frontend
  npm run dev
  ```

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.