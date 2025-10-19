# Projet MERN Stack

Ce projet est une application web complète développée avec la stack MERN (MongoDB, Express.js, React, Node.js).

## 🚀 Fonctionnalités

- Gestion des produits (CRUD)
- Interface utilisateur moderne avec Chakra UI
- API RESTful complète
- Connexion à une base de données MongoDB

## 📦 Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn
- MongoDB (local ou Atlas)

## 🛠 Installation

1. **Cloner le dépôt**

   ```bash
   git clone [URL_DU_REPO]
   cd Projet_MERN_01
   ```

2. **Installer les dépendances du backend**

   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. **Configuration**
   Créez un fichier `.env` à la racine du projet avec les variables suivantes :
   ```
   PORT=5000
   MONGODB_URI=votre_uri_mongodb
   ```

## 🚀 Lancement du projet

1. **Démarrer le serveur backend** (depuis le dossier racine) :

   ```bash
   npm run dev
   ```

2. **Démarrer l'application frontend** (dans un autre terminal) :

   ```bash
   cd frontend
   npm start
   ```

3. **Accéder à l'application**
   Ouvrez votre navigateur à l'adresse : [http://localhost:3000](http://localhost:3000)

## 📂 Structure du projet

```
Projet_MERN_01/
├── backend/           # Dossier backend
│   ├── config/        # Configuration (base de données, etc.)
│   ├── controllers/   # Contrôleurs pour les routes
│   ├── models/        # Modèles Mongoose
│   ├── routes/        # Définition des routes API
│   └── server.js      # Point d'entrée du serveur
├── frontend/          # Application React
│   ├── public/        # Fichiers statiques
│   └── src/           # Code source React
└── README.md          # Ce fichier
```

## 🔧 Technologies utilisées

### Backend

- Node.js
- Express.js
- MongoDB avec Mongoose
- dotenv (gestion des variables d'environnement)

### Frontend

- React
- React Router
- Chakra UI (composants d'interface utilisateur)
- Axios (requêtes HTTP)

## 📝 Licence

Ce projet est sous licence MIT.

## 🙏 Remerciements

- [Create React App](https://create-react-app.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [MongoDB](https://www.mongodb.com/)
