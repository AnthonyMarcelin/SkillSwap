# 🎯 **GUIDE DÉTAILLÉ DES SLIDES - SOUTENANCE SKILLSWAP**

## **Structure complète : 17 slides pour 43 minutes**

---

## **📸 SLIDE 1 : TITRE + PRÉSENTATION**

### **Contenu :**

- **Titre principal :** "SkillSwap - Plateforme d'échange de compétences"
- **Sous-titre :** "Projet d'apothéose - Formation CDA O'clock"
- **Votre nom :** Anthony Marcelin
- **Phrase d'accroche :** "De chauffeur-livreur à développeur full-stack"
- **Date :** Septembre 2025

### **À dire :**

- Présentation personnelle : 20 ans chauffeur → reconversion développeur
- Premier projet technique complet
- Validation des compétences CDA

---

## **📸 SLIDE 2 : PROBLÉMATIQUE & SOLUTION SKILLSWAP**

### **Contenu :**

- **Problématique :**

  - Contexte économique difficile
  - Besoin d'entraide communautaire
  - Difficulté d'accès aux services tarifés
  - Isolement social

- **Solution SkillSwap :**
  - Plateforme d'échange de compétences GRATUITE
  - Création de lien social
  - Valorisation des talents de chacun
  - Économie collaborative

### **Exemples concrets :**

- Informatique ↔ Bricolage
- Mécanique ↔ Jardinage

---

## **📸 SLIDE 3 : ÉQUIPE & ORGANISATION**

### **Contenu :**

- **Équipe de 4 développeurs junior :**

  - **Anthony** (Lead Backend) - Vous
  - **Maxime** (Product Owner)
  - **Karine** (Scrum Master)
  - **Ludovic** (Lead Frontend)

- **Collaboration efficace :**

  - Daily meetings (3x/jour)
  - Pair programming
  - Code review permanent
  - Entraide technique constante

- **Outils de travail :**
  - Trello (gestion projet)
  - Discord (communication)
  - Git/GitHub (versioning)
  - Google Drive (conception)

---

## **📸 SLIDE 4 : PLANNING DES 3 SPRINTS**

### **Contenu :**

- **Contrainte forte : 3 semaines (13,5 jours effectifs)**

- **Sprint 0 (Semaine 1) - CONCEPTION :**

  - Cahier des charges
  - MCD/MLD/MPD
  - Maquettes Figma
  - Wireframes Whimsical
  - User stories
  - Architecture technique

- **Sprint 1 (Semaine 2) - MVP :**

  - Backend API (Anthony + Karine)
  - Frontend (Ludovic + Maxime)
  - Fonctionnalités essentielles

- **Sprint 2 (Semaine 3) - FINALISATION :**
  - Inversion des rôles
  - Features avancées (messagerie)
  - Tests et debugging
  - Déploiement

---

## **📸 SLIDE 5 : MVP & FONCTIONNALITÉS PRIORITAIRES** 🆕

### **Contenu :**

- **Définition MVP :**

  - Minimum Viable Product en 3 semaines
  - Focus sur l'essentiel
  - Approche produit professionnelle

- **6 Fonctionnalités prioritaires ✅ :**

  1. **Landing page** avec valeurs SkillSwap
  2. **Authentification** sécurisée (JWT)
  3. **Profils utilisateurs** avec compétences
  4. **Recherche** par compétences + géolocalisation
  5. **Messagerie privée** intégrée
  6. **Gestion services** (proposition/réservation)

- **Critères de réussite atteints :**
  - Application responsive fonctionnelle
  - Toutes user stories validées
  - Sécurité respectée
  - Déploiement réussi

---

## **📸 SLIDE 6 : ARCHITECTURE TECHNIQUE GLOBALE**

### **Contenu :**

- **Architecture 3-tiers :**

  - **Frontend :** React SPA
  - **Backend :** API REST Node.js
  - **Database :** PostgreSQL

- **Architecture MVC respectée :**

  - **Models :** Sequelize ORM
  - **Views :** Composants React
  - **Controllers :** Express.js

- **Séparation des responsabilités :**

  - Frontend/Backend découplés
  - API REST pour communication
  - Middlewares pour sécurité

- **Schéma visuel de l'architecture**

---

## **📸 SLIDE 7 : STACK TECHNIQUE + JUSTIFICATIONS**

### **Contenu :**

- **FRONTEND :**

  - **React 19 + TypeScript :** SPA moderne, composants réutilisables
  - **Tailwind CSS 4 :** Rapidité développement, mobile-first
  - **Vite :** Bundler performant, hot-reload
  - **React Router :** Navigation SPA
  - **Axios :** Client HTTP pour API

- **BACKEND :**

  - **Node.js + Express.js :** API REST, écosystème riche
  - **Sequelize ORM :** Migrations, requêtes simplifiées
  - **PostgreSQL :** Base relationnelle, relations complexes
  - **JWT :** Authentification token
  - **Argon2 :** Hashage sécurisé

- **MÉTHODOLOGIE AGILE :** 🎯
  - **SCRUM :** Sprints, daily meetings, retrospectives
  - **User stories :** Besoins utilisateurs
  - **Backlog priorisé :** Trello
  - **Livraison itérative :** MVP puis features

---

## **📸 SLIDE 8 : MAQUETTES MOBILE & DESKTOP**

### **Contenu :**

- **Processus de conception UX/UI :**

  - Analyse besoins → User stories
  - Wireframes Whimsical
  - Maquettes Figma
  - Charte graphique cohérente

- **Approche Mobile-First :**

  - Design mobile prioritaire
  - Adaptation progressive desktop
  - Responsive design

- **Captures des maquettes :**
  - Page d'accueil mobile/desktop
  - Pages principales
  - Parcours utilisateur

---

## **📸 SLIDE 9 : MODÈLE DE BASE DE DONNÉES (MCD)**

### **Contenu :**

- **Méthode MERISE appliquée :**

  - MCD → MLD → MPD
  - 7 tables optimisées
  - Relations bien définies

- **Tables principales :**

  - **User :** Profils utilisateurs
  - **Skill :** Catégories compétences
  - **Service :** Échanges proposés
  - **Message :** Messagerie privée
  - **Review :** Système d'avis
  - **Role :** Gestion permissions
  - **user_has_skills :** Table de jointure

- **Votre MCD visuel**
- **Dictionnaire de données complet**

---

## **📸 SLIDE 10 : STRUCTURE DU BACKEND (DOSSIERS + API)**

### **Contenu :**

- **Architecture en couches :**

```
src/
├── controllers/     # Logique métier
├── models/         # Modèles Sequelize
├── routes/         # Endpoints API
├── middleware/     # Sécurité & validation
├── migrations/     # Scripts BDD
└── schemas/        # Validation Zod
```

- **API REST endpoints :**

  - GET /api/users
  - POST /api/auth/login
  - GET /api/services
  - POST /api/messages
  - etc.

- **Middlewares sécurité :**
  - Authentification JWT
  - Validation données
  - Sanitisation entrées

---

## 📸 SLIDE 11BIS : STRUCTURE DU FRONTEND (DOSSIERS + LOGIQUE)

### **Contenu :**

- **Arborescence du projet React :**

```
front/src/
├── components/      # Composants réutilisables
├── pages/           # Pages principales (routing)
├── hooks/           # Custom hooks React
├── services/        # Appels API (Axios)
├── types/           # Typage TypeScript
├── assets/          # Images, icônes
├── lib/             # Fonctions utilitaires
├── api/             # Configuration endpoints
├── tests/           # Tests unitaires
├── index.css        # Styles globaux
└── App.tsx          # Point d'entrée principal
```

- **Organisation logique :**

  - Découpage par composants pour la réutilisabilité
  - Routing géré par React Router
  - Gestion d’état avec hooks (useState, useEffect)
  - Appels API centralisés dans services/
  - Typage strict pour fiabilité

- **Bonnes pratiques appliquées :**

  - Mobile-first et responsive
  - Séparation claire des responsabilités
  - Tests unitaires (si présents)

- **Lien avec le backend :**
  - Communication via Axios
  - Sécurité des échanges (JWT, cookies)

---

## **📸 SLIDE 11 : CAPTURES D'ÉCRAN - PAGE D'ACCUEIL**

### **Contenu :**

- **Screenshots de l'application déployée :**

  - Landing page complète
  - Version mobile/desktop
  - Navigation responsive

- **Éléments mis en avant :**

  - Présentation des valeurs
  - Derniers inscrits
  - Top compétences
  - Call-to-action inscription

- **URL de l'application déployée sur Railway**

---

## **📸 SLIDE 12 : CAPTURES D'ÉCRAN - SYSTÈME DE MESSAGERIE**

### **Contenu :**

- **Votre réalisation Sprint 2 :**

  - Interface de messagerie
  - Liste des conversations
  - Chat en temps réel
  - Interface responsive

- **Défis techniques surmontés :**

  - Gestion état React
  - Communication API
  - UX fluide

- **Collaboration avec Maxime (binôme)**

---

## **📸 SLIDE 13 : EXTRAITS DE CODE - MODÈLES SEQUELIZE**

### **Contenu :**

- **Exemple modèle User :**

```javascript
const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
```

- **Associations complexes :**

```javascript
User.belongsToMany(Skill, { through: "user_has_skills" });
User.hasMany(Service);
User.hasMany(Message);
```

- **Scripts migration et seeding**

---

## **📸 SLIDE 14 : EXTRAITS DE CODE - CONTROLLERS**

### **Contenu :**

- **Exemple controller avec gestion d'erreurs :**

```javascript
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Skill }],
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
```

- **Middleware authentification :**

```javascript
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Non autorisé" });
  // Vérification JWT...
};
```

---

## **📸 SLIDE 15 : SÉCURITÉ - JWT & PROTECTION**

### **Contenu :**

- **Authentification JWT sécurisée :**

  - Token dans cookie HttpOnly
  - SameSite: "strict" (anti-CSRF)
  - Expiration automatique

- **Protection des données :**

  - Hashage Argon2 (passwords)
  - Validation Zod (côté serveur)
  - Validation manuelle dans les formulaires React (frontend) : vérification des champs, force du mot de passe, etc.
  - Sanitisation entrées utilisateur
  - Middleware anti-profanité

- **Configuration sécurisée :**

  - CORS avec credentials
  - Variables d'environnement
  - Gestion d'erreurs sans exposition

- **Approche "Security by Design"**

---

## **📸 SLIDE 16 : DÉMO LIVE** (Si connexion disponible)

### **Contenu :**

- **Démonstration 2-3 minutes :**

  - Navigation sur l'application
  - Inscription/Connexion
  - Recherche de services
  - Envoi de message
  - Responsive design

- **URL :** https://skillswap-production.up.railway.app
- **Fallback :** Captures d'écran si problème réseau

---

## **📸 SLIDE 17 : BILAN & PERSPECTIVES**

### **Contenu :**

- **Bilan du projet ✅ :**

  - MVP fonctionnel livré dans les délais
  - Toutes compétences CDA validées
  - Première expérience équipe complète
  - Déploiement Railway (initiative personnelle)

- **Compétences acquises :**

  - Maîtrise du développement web moderne avec JavaScript, TypeScript, React, Node.js et PostgreSQL
  - Méthodologie Agile/SCRUM
  - Conception BDD relationnelle
  - Sécurisation application web
  - Travail en équipe

- **Perspectives d'évolution :**

  - Mastère alternance Live Campus
  - Améliorations techniques : CI/CD, tests E2E
  - Fonctionnalités admin
  - Projet personnel : atasoif.fr (Angular)

- **Phrase de conclusion :**
  _"Ce projet marque le début de ma nouvelle carrière de développeur et confirme ma passion pour ce métier."_

---

## **🎯 ÉLÉMENTS TRANSVERSAUX À MENTIONNER**

### **Méthodologie Agile/SCRUM :**

- Sprints courts et itératifs
- Daily meetings efficaces
- Sprint reviews avec présentations
- Rétrospectives d'amélioration continue
- Backlog priorisé et user stories
- Collaboration et adaptabilité

### **Soft Skills démontrées :**

- Leadership technique (Lead Backend)
- Collaboration en équipe
- Gestion du stress (contraintes temps)
- Résolution de problèmes
- Communication technique

### **Votre valeur ajoutée unique :**

- Reconversion réussie à 40+ ans
- Maturité professionnelle (20 ans d'expérience)
- Approche méthodique et rigoureuse
- Passion pour la technologie
- Initiative personnelle (déploiement Railway)
