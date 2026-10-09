# 💳 Expense Tracker - Frontend (Mini-Projet Full-Stack)

Application frontend moderne et responsive développée avec **React 19** et **Vite**, permettant la gestion complète des dépenses personnelles (CRUD), avec un tableau de bord analytique et validation robuste des données.

---

## 🚀 Fonctionnalités Principales

- **📊 Dashboard Analytique :**
  - Calcul et affichage en temps réel des statistiques clés : Total des dépenses, nombre de transactions, et montant moyen.
  - Aperçu rapide de la dernière dépense enregistrée.
  - Navigation rapide vers la création et la consultation des dépenses.

- **📋 Gestion Complète des Dépenses (CRUD) :**
  - **Liste :** Visualisation claire sous forme de tableau interactif (Desktop) et de cartes optimisées (Mobile).
  - **Ajout & Modification :** Formulaire complet avec gestion des catégories (`ALIMENTATION`, `TRANSPORT`, `LOGEMENT`, `LOISIRS`, `SANTE`, `AUTRE`) et modes de paiement (`CASH`, `CARD`, `TRANSFER`).
  - **Suppression :** Suppression sécurisée avec confirmation utilisateur.
  - **Détails :** Fiche détaillée pour chaque transaction.

- **✅ Validation & Gestion des Erreurs :**
  - Validation dynamique des formulaires côté client avec **React Hook Form** et **Yup**.
  - Messages d'erreur explicites sous chaque champ invalide.
  - Gestion des statuts de chargement (*Loading spinner*) et états vides (*Empty states*).
  - Page **404 Not Found** personnalisée et ergonomique avec boutons de redirection.

- **📱 Design Moderne & Responsive :**
  - Interface soignée inspirée des dashboards SaaS modernes (palette harmonieuse, typographie *Plus Jakarta Sans*, cartes avec micro-interactions et ombres douces).
  - 100% responsive, parfaitement adaptée aux mobiles, tablettes et écrans larges.

---

## 🛠️ Stack Technique

| Technologie | Rôle |
| :--- | :--- |
| **React 19** | Bibliothèque UI principale |
| **Vite 8** | Bundler ultra-rapide et environnement de développement |
| **React Router v7** | Routage SPA fluide (`/`, `/expenses`, `/expenses/new`, `/expenses/:id`, etc.) |
| **React Hook Form** | Gestion performante des formulaires |
| **Yup** | Schéma de validation des données |
| **Axios** | Client HTTP pour communiquer avec l'API REST Backend |
| **Pure CSS3** | Styles modernes avec variables CSS, sans framework externe lourd |
| **Docker & Nginx** | Conteneurisation multi-stage et serveur de production avec reverse proxy |

---

## 📁 Structure du Projet

```text
├── Dockerfile                   # Build multi-stage Node -> Nginx
├── nginx.conf                   # Configuration Nginx (SPA + proxy API)
├── README.md                    # Documentation du projet
└── Mini/                        # Code source frontend (Vite React)
    ├── public/                  # Assets publics et favicons
    ├── src/
    │   ├── assets/              # Images et logos
    │   ├── components/          # Composants réutilisables
    │   │   ├── EmptyState.jsx   # Affichage état vide
    │   │   ├── ErrorMessage.jsx # Affichage des messages d'erreur
    │   │   ├── ExpenseCard.jsx  # Carte dépense pour affichage mobile
    │   │   ├── ExpenseForm.jsx  # Formulaire réutilisable (création/édition)
    │   │   ├── ExpenseTable.jsx # Tableau desktop des dépenses
    │   │   └── Loading.jsx      # Spinner de chargement
    │   ├── pages/               # Pages de l'application
    │   │   ├── Dashboard.jsx    # Page d'accueil / Résumé des métriques
    │   │   ├── Expenses.jsx     # Liste de toutes les dépenses
    │   │   ├── ExpenseDetails.jsx # Détails d'une dépense
    │   │   ├── ExpenseFormPage.jsx # Page formulaire (Ajout & Édition)
    │   │   └── NotFound.jsx     # Page 404
    │   ├── router/
    │   │   └── AppRouter.jsx    # Configuration des routes de l'application
    │   ├── services/
    │   │   └── expenseService.js # Appels API REST avec Axios
    │   ├── validations/
    │   │   └── expenseSchema.js  # Schéma de validation Yup
    │   ├── App.jsx              # Composant racine
    │   ├── index.css            # Styles globaux et thème moderne
    │   └── main.jsx             # Point d'entrée de l'application
    ├── .env                     # Variables d'environnement locales
    ├── package.json             # Dépendances et scripts
    └── vite.config.js           # Configuration Vite
```

---

## ⚙️ Prérequis

- **Node.js** (v18.x ou supérieur recommandé)
- **npm** (ou yarn / pnpm)
- *(Optionnel)* **Docker** pour le déploiement conteneurisé

---

## 💻 Installation & Démarrage Local

### 1. Cloner le dépôt
```bash
git clone https://github.com/Rida1019-taki/Mini-projet-Full-Stack---CRUD-Expense-Frontend.git
cd Mini-projet-Full-Stack---CRUD-Expense-Frontend/Mini
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'environnement
Vérifiez ou créez le fichier `.env` dans le dossier `Mini/` :
```env
VITE_API_URL=http://localhost:8080/api
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```
L'application sera accessible sur : `http://localhost:5173`

---

## 🔨 Commandes Utiles

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Lance le serveur local avec Hot Module Replacement (HMR) |
| `npm run build` | Compile et optimise l'application pour la production (`dist/`) |
| `npm run preview` | Prévisualise la version de production en local |
| `npm run lint` | Analyse le code avec ESLint |

---

## 🐳 Déploiement avec Docker

Le projet intègre un fichier `Dockerfile` avec un build multi-stage (Node 20 pour la compilation, puis Nginx Alpine pour servir les fichiers statiques et rediriger les requêtes API).

### 1. Construire l'image Docker :
À la racine du projet (`mini-projet-full-stack/`) :
```bash
docker build -t expense-frontend .
```

### 2. Lancer le conteneur :
```bash
docker run -d -p 80:80 --name expense-frontend-app expense-frontend
```
L'application sera accessible sur `http://localhost`.

---

## 🔌 Endpoints API Consommés

Le service frontend (`expenseService.js`) interagit avec les endpoints REST suivants :

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/expenses` | Récupérer la liste de toutes les dépenses |
| `GET` | `/api/expenses/:id` | Récupérer une dépense par son identifiant |
| `POST` | `/api/expenses` | Créer une nouvelle dépense |
| `PUT` | `/api/expenses/:id` | Mettre à jour une dépense existante |
| `DELETE` | `/api/expenses/:id` | Supprimer une dépense |

---

## 👤 Auteur

- **Rida Taki** - [GitHub](https://github.com/Rida1019-taki)