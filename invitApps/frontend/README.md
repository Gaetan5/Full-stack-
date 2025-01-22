# README pour le Frontend

# Invitation App - Frontend

Ce projet est une application frontend développée avec Next.js, TypeScript et TailwindCSS. Il permet aux utilisateurs de remplir un formulaire pour générer des billets d'invitation électroniques avec QR codes.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (ou yarn)

## Installation

1. Clonez le dépôt :
   ```
   git clone <URL_DU_DEPOT>
   cd invitation-app/frontend
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

## Démarrage de l'application

Pour démarrer l'application en mode développement, exécutez :
```
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Structure du projet

- `pages/index.tsx` : Composant principal pour le formulaire d'invitation.
- `pages/_app.tsx` : Personnalisation du composant App de Next.js.
- `styles/globals.css` : Styles globaux de l'application.
- `tailwind.config.js` : Configuration de Tailwind CSS.
- `tsconfig.json` : Configuration TypeScript.
- `package.json` : Dépendances et scripts du projet.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

## License

Ce projet est sous licence MIT.