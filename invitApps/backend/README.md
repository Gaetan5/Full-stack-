# Projet d'Application d'Invitation Électronique

Ce projet est une application qui génère des billets d'invitation électroniques avec des QR codes pour l'authentification. Le backend est construit avec Flask et gère les requêtes pour créer et stocker les billets d'invitation.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé Python et pip sur votre machine.

## Installation

1. Clonez le dépôt :

   ```
   git clone <URL_DU_DEPOT>
   cd invitation-app/backend
   ```

2. Installez les dépendances :

   ```
   pip install -r requirements.txt
   ```

## Utilisation

1. Lancez l'application Flask :

   ```
   python app.py
   ```

2. L'application sera accessible à l'adresse `http://127.0.0.1:5000`.

## Routes

- `POST /generate-invitation` : Génère un billet d'invitation électronique avec les données fournies.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

## License

Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.