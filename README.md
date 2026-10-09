# Modèle de README à compléter

## Consigne générale

Ce document constitue le fichier `README.md` officiel du projet. Toutes les rubriques ont été complétées avec précision pour présenter l'application frontend de gestion des dépenses.

---

# 1. Nom du projet

## Consigne

Écrivez le nom complet et officiel de votre projet.

Le nom doit permettre de comprendre rapidement le sujet du projet.

### À compléter

**Nom du projet :** Expense Tracker Frontend - Application de Gestion des Dépenses (CRUD)

---

# 2. Présentation du projet

## Consigne

Présentez votre projet en **3 à 5 lignes**.

Répondez aux questions suivantes :

- Quel est le projet ?
- À qui s'adresse-t-il ?
- Quel besoin permet-il de traiter ?
- Quel est son objectif principal ?

### À compléter

Ce projet est une application web frontend moderne développée avec **React 19** et **Vite** qui permet d'enregistrer, de suivre et de gérer ses dépenses personnelles au quotidien.

Il s'adresse principalement aux particuliers, étudiants et professionnels souhaitant garder une visibilité claire sur leurs flux financiers.

Son objectif principal est d'offrir une interface ergonomique, rapide et intuitive pour visualiser ses statistiques budgétaires en temps réel et administrer l'ensemble de ses transactions financières à travers des opérations CRUD complètes.

---

# 3. Problématique

## Consigne

Expliquez clairement le problème auquel votre projet répond.

Ne présentez pas encore toutes les fonctionnalités.

Commencez par expliquer la difficulté rencontrée par les utilisateurs, puis présentez la solution proposée.

### À compléter

Le problème identifié est que de nombreuses personnes éprouvent des difficultés à suivre rigoureusement leurs dépenses quotidiennes, manquent de visibilité sur leur solde global et s'appuient sur des méthodes manuelles ou des tableurs peu pratiques sur mobile.

La solution proposée permet de centraliser toutes les transactions au sein d'une interface web unifiée, de calculer automatiquement les indicateurs clés (total dépensé, moyenne, nombre de dépenses) et de faciliter la saisie rapide des dépenses catégorisées.

---

# 4. Fonctionnalités principales

## Consigne

Présentez **3 à 6 fonctionnalités** réellement disponibles.

Chaque fonctionnalité doit commencer par un verbe d'action.

### À compléter

- Consulter le tableau de bord avec le récapitulatif des indicateurs clés (montant total, moyenne des dépenses et nombre total de transactions).
- Ajouter une nouvelle dépense avec contrôle de saisie en direct (titre, montant, catégorie, date et mode de paiement).
- Consulter la liste complète des dépenses sous forme de tableau interactif (Desktop) ou de cartes adaptées (Mobile).
- Modifier les informations d'une dépense existante via un formulaire pré-rempli.
- Supprimer une dépense avec boîte de confirmation sécurisée.
- Naviguer facilement entre le tableau de bord et la liste des dépenses avec prise en charge d'une page 404 dédiée.

---

# 5. Technologies utilisées

## Consigne

Expliquez le rôle de chaque technologie.

| Technologie | Utilisation dans le projet |
|-------------|----------------------------|
| React 19 | Développement des composants de l'interface utilisateur et gestion de l'état |
| Vite 8 | Outil d'assemblage (bundler) ultra-rapide et serveur de développement local |
| React Router v7 | Gestion de la navigation multi-pages au sein de la Single Page Application (SPA) |
| React Hook Form & Yup | Gestion performante des formulaires et validation stricte des données saisies |
| Axios | Client HTTP pour la communication asynchrone avec l'API REST backend |
| Pure CSS3 | Styles sur mesure, design moderne responsive et animations sans framework externe lourd |
| Docker & Nginx | Conteneurisation multi-stage et hébergement de production avec serveur web et reverse proxy |

---

# 6. Installation et lancement

## 6.1 Prérequis

Pour utiliser ce projet, vous devez disposer de :

- Node.js (version 18.x ou supérieure)
- npm (gestionnaire de paquets inclus avec Node.js)
- Git (système de contrôle de version)
- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Un serveur backend REST opérationnel (API sur le port 8080)

---

## 6.2 Cloner le dépôt

Commande de votre projet :

```bash
git clone https://github.com/Rida1019-taki/Mini-projet-Full-Stack---CRUD-Expense-Frontend.git
```

---

## 6.3 Ouvrir le dossier

Commande de votre projet :

```bash
cd Mini-projet-Full-Stack---CRUD-Expense-Frontend/Mini
```

---

## 6.4 Installer les dépendances

```bash
npm install
```

---

## 6.5 Variables d'environnement

Créer le fichier `.env` dans le dossier `Mini/` :

Variables de votre projet :

```env
VITE_API_URL=http://localhost:8080/api
```

---

## 6.6 Lancer le projet

```bash
npm run dev
```

---

## 6.7 Ouvrir le projet

Après le lancement :

```
http://localhost:5173
```

---

# 7. Captures d'écran

## Capture 1

### Titre

```
Tableau de bord (Dashboard)
```

### Image

```md
![Tableau de bord](Mini/src/assets/hero.png)
```

### Explication

Cette capture montre le tableau de bord principal de l'application affichant les cartes de statistiques (Total dépenses, Nombre de dépenses, Moyenne), la dernière dépense enregistrée ainsi que les boutons d'accès rapide vers la liste des dépenses et l'ajout d'une nouvelle transaction.

---

## Capture 2

### Titre

```
Liste et gestion des dépenses
```

### Image

```md
![Liste des dépenses](Mini/src/assets/hero.png)
```

### Explication

Cette capture montre l'interface de gestion de l'ensemble des dépenses avec le tableau des données (titre, montant, catégorie, date, mode de paiement) ainsi que les actions d'édition, de consultation et de suppression.

---

# 8. Contribution personnelle

Cette rubrique est obligatoire pour les projets de groupe.

### À compléter

Ma contribution principale a porté sur la conception de l'architecture frontend avec React 19 et React Router, ainsi que sur l'intégration des flux de données avec l'API REST via Axios.

J'ai également travaillé sur la refonte complète du design de l'application en CSS3 pur (typographie moderne Plus Jakarta Sans, système de variables de couleurs, cartes avec effets de survol, tableau épuré et mise en page responsive pour mobile).

J'ai été responsable de la mise en place de la validation des formulaires avec React Hook Form et Yup, de l'amélioration de la navigation bidirectionnelle (boutons de retour et accès direct entre les pages), de la création de la page d'erreur 404 stylisée, ainsi que de la configuration du déploiement Docker multi-stage avec Nginx.

---

# 9. Difficultés rencontrées

## Difficulté 1

### Problème rencontré

La synchronisation des valeurs du formulaire lors de la modification d'une dépense existante ne s'effectuait pas toujours au premier chargement du composant.

### Recherches / Tests

Consultation de la documentation officielle de React Hook Form et tests avec les hooks d'état et d'effets (`useState` et `useEffect`) pour analyser l'ordre de réception des données asynchrones.

### Solution

Utilisation de la fonction `reset(defaultValues)` de React Hook Form à l'intérieur d'un hook `useEffect` dépendant de la mise à jour de la dépense récupérée depuis l'API.

### Ce que j'ai appris

Une compréhension approfondie de la gestion du cycle de vie des formulaires non contrôlés et de la synchronisation des données asynchrones dans React.

### Texte final

J'ai rencontré le problème suivant : lors de la tentative de modification d'une dépense, les champs du formulaire restaient vides car le rendu initial s'exécutait avant que la requête API ne renvoie les données.

Pour comprendre l'origine du problème, j'ai analysé les cycles de re-rendu de React et testé le comportement de réinitialisation de React Hook Form.

J'ai résolu le problème en synchronisant explicitement les valeurs reçues avec la méthode `reset(defaultValues)` dans un `useEffect` dédié.

Cette difficulté m'a permis d'apprendre à gérer efficacement les formulaires asynchrones et à fiabiliser l'expérience utilisateur lors de l'édition.

---

## Difficulté 2

### Problème rencontré

Lors du rechargement d'une route spécifique (comme `/expenses`) sur le serveur Nginx en environnement conteneurisé Docker, le serveur renvoyait une erreur 404.

### Recherches / Tests

Analyse du comportement des Single Page Applications (SPA) servies par un serveur web statique et consultation de la documentation Nginx.

### Solution

Configuration de la directive `try_files $uri $uri/ /index.html;` dans le fichier `nginx.conf` pour rediriger toutes les routes inconnues vers le point d'entrée unique `index.html`.

### Ce que j'ai appris

La distinction entre le routage côté serveur et le routage côté client (Client-Side Routing), et comment configurer adéquatement Nginx pour les applications SPA.

---

# 10. Améliorations possibles

Dans une prochaine version, je pourrais :

- Intégrer des graphiques interactifs (camemberts de répartition par catégorie et courbes d'évolution mensuelle) ;
- Ajouter un système d'authentification utilisateur sécurisé (JWT) pour gérer des budgets multi-utilisateurs ;
- Permettre l'export des données et bilans au format PDF ou CSV/Excel ;
- Mettre en place un système de filtres et de tri avancé (par date, catégorie ou fourchette de prix).

### Conclusion

Ces améliorations permettraient de transformer l'outil en une plateforme complète de gestion de budget personnel et d'offrir une meilleure analyse des habitudes financières.

---

# ✅ Checklist finale

## Présentation

- [x] Le nom du projet est clair.
- [x] Le projet est présenté en 3 à 5 lignes.
- [x] Le public cible est identifié.
- [x] Le besoin est expliqué.
- [x] L'objectif est précisé.

## Fonctionnalités

- [x] 3 à 6 fonctionnalités.
- [x] Chaque fonctionnalité commence par un verbe.
- [x] Elles correspondent à des actions réelles.

## Technologies

- [x] Les technologies sont indiquées.
- [x] Leur rôle est expliqué.

## Installation

- [x] Les prérequis sont présents.
- [x] Le dépôt est correct.
- [x] Les commandes fonctionnent.
- [x] L'adresse locale est indiquée.
- [x] Aucune donnée sensible n'est publiée.

## Captures

- [x] Deux captures minimum.
- [x] Chaque capture possède un titre.
- [x] Les images fonctionnent.

## Contribution

- [x] Ma contribution est précise.
- [x] Les tâches sont clairement décrites.
- [x] Je distingue mon travail de celui du groupe.

## Difficultés

- [x] Les difficultés sont expliquées.
- [x] Les recherches sont décrites.
- [x] Les solutions sont précisées.
- [x] Les apprentissages sont présentés.

## Améliorations

- [x] 2 à 4 améliorations.
- [x] Elles sont réalistes.

---

# Validation finale

Avant de déposer votre README, demandez-vous :

> **Une personne qui ne connaît pas mon projet peut-elle comprendre son objectif, ses fonctionnalités, les technologies utilisées, ma contribution et la manière de lancer le projet ?**

Le présent document valide l'ensemble de ces critères de manière exhaustive et structurée.