# Documentation du Backend de l'Application d'Invitation

Ce document fournit des instructions sur la configuration et l'exécution du serveur backend de l'application d'invitation.

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

## Exécution

Pour démarrer le serveur Flask, exécutez la commande suivante :

```
python app.py
```

Le serveur sera accessible à l'adresse `http://127.0.0.1:5000`.

## Routes

- `POST /generate-invitation` : Crée un billet d'invitation basé sur les données fournies dans le formulaire.
- `GET /qr-code/<id>` : Génère un QR code pour l'authentification basé sur l'identifiant du billet.

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

## License

Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.