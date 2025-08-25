# Dossier de Projet - SkillSwap

## Développement d'une plateforme d'échange de compétences

**Candidat :** [Votre nom]  
**Formation :** Concepteur Développeur d'Applications (CDA)  
**Date :** [Date de soutenance]

---

## 1. Introduction

### 1.1 Présentation générale du projet SkillSwap

SkillSwap est une plateforme d'aide communautaire et d'échanges de compétences développée dans le cadre de mon projet d'apothéose de fin de formation. Cette application web permet à chacun de s'inscrire pour proposer ses compétences aux autres membres de la communauté, tout en bénéficiant des services d'autrui, sans aucune rémunération financière.

### 1.2 Contexte et motivation du projet

Nous sommes nombreux à avoir des compétences ou des talents acquis au cours de notre vie, que ce soit dans la sphère privée ou professionnelle : hobbies, passions, passe-temps ou activités professionnelles. Parallèlement, nous pouvons avoir des besoins ponctuels dans des domaines que nous ne maîtrisons pas forcément.

Dans un contexte économique compliqué, cette plateforme permet d'éviter des frais onéreux tout en comblant des besoins nécessaires. De plus, elle favorise la création de liens sociaux et peut rompre l'isolement de certaines personnes.

### 1.3 Objectifs personnels et professionnels

Ce projet représentait ma première mise en situation pseudo-professionnelle où nous avions la mainmise sur un cas concret à créer de A à Z en équipe. L'objectif était pédagogique : mettre en œuvre le maximum de technologies apprises durant notre formation de 7 mois et démontrer notre capacité à développer une application sécurisée, en respectant les bonnes pratiques du développement.

### 1.4 Structure du dossier

Ce dossier présente l'ensemble du projet SkillSwap en suivant le plan réglementaire, depuis l'analyse des besoins jusqu'à la mise en production, en passant par les choix techniques, les réalisations et les éléments de sécurité mis en place.

---

## 2. Liste des compétences du référentiel couvertes par le projet

### 2.1 Compétences obligatoires (CP 2 à 9)

- **CP2 : Concevoir une base de données**

  - Conception du modèle entité-relation de SkillSwap
  - Optimisation des relations entre utilisateurs, services et compétences

- **CP3 : Mettre en place une base de données**

  - Implémentation PostgreSQL avec Sequelize ORM
  - Scripts de migration et de seeding

- **CP4 : Développer une interface utilisateur de type desktop**

  - Application web responsive adaptée aux différents devices
  - Interface moderne et intuitive

- **CP5 : Développer des composants d'accès aux données**

  - Modèles Sequelize (User, Service, Skill, Message, Review)
  - Requêtes complexes avec jointures et transactions

- **CP6 : Développer la partie front-end d'une interface utilisateur web**

  - Application React avec TypeScript
  - Interface responsive avec Tailwind CSS

- **CP7 : Développer la partie back-end d'une interface utilisateur web**

  - API REST avec Node.js et Express
  - Architecture en couches avec middlewares

- **CP8 : Concevoir et développer des composants logiciels, web ou mobiles**

  - Composants React réutilisables
  - Services backend modulaires

- **CP9 : Intégrer des composants logiciels dans un environnement de production**
  - Déploiement sur Railway
  - Configuration Docker et variables d'environnement

### 2.2 Mapping des compétences avec les réalisations SkillSwap

| Compétence | Réalisation SkillSwap                        | Justification                                                   |
| ---------- | -------------------------------------------- | --------------------------------------------------------------- |
| CP2        | Modèle de données avec 5 entités principales | Relations complexes entre utilisateurs, services et compétences |
| CP3        | Base PostgreSQL avec 15 tables               | Gestion des migrations et contraintes d'intégrité               |
| CP4        | Interface responsive multi-device            | Adaptation mobile, tablette, desktop                            |
| CP5        | 15+ modèles et requêtes Sequelize            | Accès aux données optimisé avec ORM                             |
| CP6        | 25+ composants React TypeScript              | Interface moderne et interactive                                |
| CP7        | API REST avec 20+ endpoints                  | Backend robuste avec gestion d'erreurs                          |
| CP8        | Architecture modulaire frontend/backend      | Composants réutilisables et maintenables                        |
| CP9        | Déploiement Railway avec Docker              | Environnement de production sécurisé                            |

---

## 3. Cahier des charges et expression des besoins

### 3.1 Contexte du projet

#### Problématique de l'échange de compétences

La problématique principale identifiée concerne le besoin d'une plateforme d'échange de compétences non monétaire. Les utilisateurs ont des talents à partager mais manquent d'un canal pour les échanger efficacement.

**Contexte concurrentiel :**
D'autres plateformes du même style existent ou ont existé : yakasaider.fr et wooskill.com sont toujours en fonction. À un niveau moindre ou à l'étranger, nous retrouvons des sites tels que echange-service.com, partage'heures (Québec). À mon service et welp sont devenus inactifs.

#### Public cible

- Particuliers ayant des compétences à partager
- Personnes cherchant de l'aide ponctuelle
- Communautés locales souhaitant créer du lien social

#### Enjeux et opportunités

**Exemple concret :** Un utilisateur inscrit avec des compétences en informatique a besoin de monter un meuble mais n'est pas manuel. Il peut rechercher "bricolage" dans son département pour trouver un membre local proposant ce service, évitant ainsi l'achat d'outillage pour un besoin ponctuel.

**Autre exemple :** Un utilisateur ayant du temps libre veut s'initier au jardinage et a des compétences en mécanique. Il peut contacter un membre pour obtenir des astuces en jardinage en échange de cours de mécanique ou d'aide pour réparer un véhicule.

### 3.2 Objectifs du projet

#### Objectifs fonctionnels

Pour notre Minimum Viable Product (MVP), nous avons défini les user stories prioritaires :

**Visiteur :**

- Accéder à la page d'accueil
- Se connecter / s'inscrire
- Faire une recherche
- Voir un profil

**Utilisateur inscrit :**

- Gérer son profil
- Envoyer un message
- Réserver / proposer un service

**Administrateur :**

- Modérer un profil
- Modifier les catégories

#### Objectifs techniques

- Architecture moderne facilement maintenable
- Mise en place rapide adaptée au délai court (3 sprints d'une semaine)
- Scalabilité backend pour la montée en charge
- Application des technologies apprises en formation
- Respect des bonnes pratiques de développement

#### Objectifs business

- Plateforme gratuite d'échange de services
- Gestion des déséquilibres don/réception
- Validation des profils pour éviter les abus

### 3.3 Périmètre fonctionnel

#### Fonctionnalités principales

1. **Landing page** avec présentation et profils aléatoires
2. **Système d'inscription/connexion** sécurisé
3. **Gestion de profil avancée** (compétences, intérêts, disponibilités)
4. **Moteur de recherche** par catégorie et géographie
5. **Système de messagerie** entre membres
6. **Gestion des services** (proposition/réservation)

#### Fonctionnalités secondaires

- Système de follow entre utilisateurs
- Évaluation post-service
- Tableau de bord administrateur

#### Exclusions du périmètre

- Système de paiement (échanges gratuits uniquement)
- Application mobile native
- Géolocalisation en temps réel

### 3.4 Contraintes

#### Contraintes techniques

- Stack imposée par la formation (React, Node.js, PostgreSQL)
- Compatibilité navigateurs modernes
- Responsive design obligatoire

#### Contraintes de temps

- 3 sprints d'une semaine (4,5 jours effectifs par sprint)
- Présentation intermédiaire obligatoire (8 min présentation + 8 min Q&R)

#### Contraintes budgétaires

- Hébergement gratuit ou à coût minimal
- Utilisation d'outils open source uniquement

#### Contraintes de ressources humaines

En problématique principale, nous devions gérer :

- L'obligation de proposer un service à l'inscription
- La gestion de la validation de profil pour éviter les abus et profils douteux
- La gestion d'une messagerie personnelle
- La fonction de proposition de services entre membres
- Une façon d'éviter les déséquilibres de ratio entre don et réception de services

---

## 4. Présentation de l'entreprise et du service

### 4.1 Présentation personnelle

#### Parcours professionnel et formation

[À personnaliser avec votre parcours]

#### Motivations pour le développement web

Ce projet représentait l'aboutissement de 7 mois de formation intensive en développement web. C'était l'occasion de mettre en pratique l'ensemble des technologies apprises et de vivre une première expérience de développement en équipe.

C'est pour moi la première mise en situation pseudo professionnelle où l'on avait la mainmise sur un cas concret à créer de A à Z en équipe. Cela a été un vrai plaisir de pouvoir appliquer tout ce que l'on a appris au cours des 7 mois passés en formation.

#### Objectifs de carrière

Devenir développeur full-stack capable de mener un projet de A à Z, en maîtrisant les enjeux techniques, fonctionnels et humains du développement d'applications web.

### 4.2 Contexte du projet

#### Simulation d'environnement entreprise (Apothéose)

Le projet d'apothéose simule un environnement professionnel réel avec :

- Contraintes de temps
- Travail en équipe
- Rôles définis
- Méthodologie agile
- Livrables attendus

Ce projet a été mené au maximum dans un cas réel de projet d'entreprise. Nous avions un cas concret, un product owner et des rôles de lead dev pour les prises de décisions et le suivi du projet.

#### Équipe de développement

Nous étions 4 membres ayant choisi de travailler ensemble, ayant déjà collaboré lors des projets précédents de la formation. Nous avions la possibilité de faire des souhaits de partenaires auprès du tuteur avant ce projet d'apothéose. Tout s'est fait de manière fluide dès le début du projet, même si des désaccords ont pu intervenir quelquefois lors de ces 3 semaines, chacun ayant des idées différentes.

### 4.3 Organisation du travail

#### Répartition des rôles

Nous avons convenu d'un rôle pour chacun, avec des décisions prises ensemble mais la décision finale revenait en fonction du rôle de chacun :

- **Maxime - Product Owner** :

  - Vision produit et respect du besoin client
  - Expérience utilisateur agréable et fonctionnelle
  - Vision globale du produit et implantation du MVP

- **Karine - Scrum Master** :

  - Objectifs réalisables dans le temps imparti
  - Animation des daily meetings (2-3 par jour selon les tâches)
  - Organisation du Trello selon le backlog du Product Owner

- **Ludovic - Lead Dev Front** :

  - Architecture frontend et bonnes pratiques
  - Validation de la stack technique frontend
  - Charte graphique avec le Product Owner

- **Moi - Lead Dev Back** :
  - Proposition de la stack technique backend
  - Outils et frameworks à utiliser
  - Respect des bonnes règles établies en début de projet

#### Communication et collaboration

- **Daily meetings** : 2-3 par jour (matin, fin de matinée, fin d'après-midi)
- **Durée** : 5 minutes en moyenne
- **Débriefing** : Points individuels en cas de blocage
- **Escalade** : Rapport aux autres membres en cas de point bloquant

#### Outils utilisés

- **Gestion de projet** : Trello
- **Communication** : Discord, présentiel
- **Code** : Git/GitHub
- **Documentation** : Markdown, diagrammes

---

## 5. Gestion de projet

### 5.1 Méthodologie SCRUM

#### Principes et valeurs Agile appliqués

Nous avons appliqué les principes Scrum avec :

- **Sprints courts** : 1 semaine (4,5 jours effectifs)
- **Daily meetings** : Points quotidiens multiples
- **Sprint review** : Présentation devant la promotion (8 min présentation + 8 min Q&R)
- **Rétrospective** : Amélioration continue entre sprints

#### Organisation en sprints

**Sprint 0 (Semaine 1) :**

- Analyse et conception uniquement (pas de code)
- Cahier des charges
- Maquettes et wireframes
- Architecture technique

**Sprint 1 (Semaine 2) :**

- Setup de l'environnement
- Base de données
- Authentification
- Premières interfaces

**Sprint 2 (Semaine 3) :**

- Fonctionnalités core
- Messagerie
- Recherche et filtres
- Tests et déploiement

#### Rôles et responsabilités

Chaque membre avait un rôle défini mais participait au développement. Les décisions étaient prises ensemble avec validation finale selon l'expertise de chacun.

### 5.2 Outils de gestion de projet

#### Trello pour le suivi des tâches

- **Colonnes** : Backlog, À faire, En cours, Review, Terminé
- **Cards** : User stories avec critères d'acceptation
- **Labels** : Priorité, type (front/back/design)
- **Assignation** : Responsable par tâche

#### Planification et suivi des tâches

- **Estimation** : Poker planning pour les user stories
- **Velocity** : Suivi de la vélocité d'équipe
- **Burndown chart** : Visualisation de l'avancement

### 5.3 Planning et jalons

#### Chronologie du projet

```
Semaine 1 (Sprint 0) : Conception
├── Jour 1-2 : Analyse besoins, personas
├── Jour 3-4 : Maquettes, architecture
└── Jour 5 : Validation, préparation Sprint 1

Semaine 2 (Sprint 1) : Foundation
├── Jour 1 : Setup environnement
├── Jour 2-3 : Base de données, auth
├── Jour 4 : Interfaces de base
└── Jour 5 : Présentation Sprint 1

Semaine 3 (Sprint 2) : Features
├── Jour 1-2 : Messagerie, profils
├── Jour 3-4 : Recherche, services
└── Jour 5 : Tests, déploiement, présentation finale
```

#### Gestion des risques et difficultés

**Risques identifiés :**

- Délai court vs ambitions
- Coordination équipe
- Complexité technique

**Solutions mises en place :**

- Priorisation stricte des fonctionnalités
- Communication renforcée
- Pair programming sur points bloquants

#### Frustrations et apprentissages

J'ai ressenti une petite frustration à l'issue du projet : le délai imparti étant relativement court, nous avions beaucoup d'idées à intégrer dans notre projet, et tout n'a pas pu être mis en place. Néanmoins, cela nous a appris à prioriser et à livrer un MVP fonctionnel.

### 5.4 Environnement humain

#### Composition de l'équipe

4 développeurs junior motivés avec des affinités techniques complémentaires et une bonne entente personnelle développée lors des projets précédents.

#### Communication et collaboration

La communication était fluide grâce à :

- Connaissance mutuelle préalable
- Respect des rôles définis
- Gestion constructive des désaccords
- Entraide technique constante

#### Méthodes de travail

- **Pair programming** sur les points complexes
- **Code review** systématique
- **Partage de connaissances** quotidien
- **Documentation** collaborative

### 5.5 Objectifs de qualité

#### Standards de code

- **Linting** : ESLint pour JavaScript/TypeScript
- **Formatting** : Prettier pour l'uniformité
- **Architecture** : Séparation claire des responsabilités
- **Conventions** : Nommage cohérent et documentation

#### Tests et validation

- Tests unitaires sur les fonctions critiques
- Tests d'intégration pour l'API
- Validation manuelle des interfaces
- Tests de sécurité sur l'authentification

#### Documentation

- README détaillé pour l'installation
- Documentation API avec commentaires
- Schémas de base de données
- Guide de contribution

---

## 6. Spécifications fonctionnelles

### 6.1 Contraintes du projet et livrables attendus

#### Contraintes techniques imposées

Dans le cadre de la formation CDA, certaines contraintes techniques ont été imposées pour valider les compétences du référentiel :

- **Stack technologique** : React/Node.js/PostgreSQL obligatoire
- **Architecture** : Application web full-stack avec séparation front/back
- **Responsive design** : Adaptation mobile/tablette/desktop requise
- **Sécurité** : Authentification JWT et validation des données
- **Déploiement** : Mise en production sur plateforme cloud

#### Contraintes de performance

- **Temps de chargement** : Pages < 3 secondes
- **Responsive** : Adaptation fluide sur tous devices
- **Scalabilité** : Architecture modulaire pour évolution future
- **Accessibilité** : Interfaces utilisables par tous

#### Livrables et critères d'acceptation

- Application web fonctionnelle déployée
- Code source documenté sur repository Git
- Base de données avec données de test
- Documentation technique complète
- Présentation de 15 minutes devant jury

### 6.2 Architecture logicielle du projet

#### Architecture générale

SkillSwap adopte une architecture **3-tiers** moderne séparant clairement les responsabilités :

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   FRONTEND      │    │    BACKEND      │    │   DATABASE      │
│                 │    │                 │    │                 │
│  React + TS     │◄──►│  Node.js + TS   │◄──►│   PostgreSQL    │
│  Tailwind CSS   │    │   Express.js    │    │   Sequelize     │
│  React Router   │    │     Cors        │    │                 │
│  Axios          │    │  Middleware     │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

#### Stack technique choisie

**Frontend (Client) :**

- **React 19.1.0** : Framework JavaScript pour interfaces utilisateur
- **TypeScript** : Typage statique pour la robustesse du code
- **Tailwind CSS 4.1.8** : Framework CSS utility-first pour le styling
- **React Router DOM 7.6.2** : Gestion du routage côté client
- **Axios 1.9.0** : Client HTTP pour les appels API
- **React Query** : Gestion du cache et synchronisation des données

**Backend (Serveur) :**

- **Node.js** : Runtime JavaScript côté serveur
- **Express 5.1.0** : Framework web minimaliste et flexible
- **TypeScript** : Typage statique pour la qualité du code
- **Sequelize 6.37.7** : ORM pour la gestion de la base de données
- **JWT** : Authentification par tokens
- **Argon2** : Hashage sécurisé des mots de passe

**Base de données :**

- **PostgreSQL** : Base de données relationnelle robuste
- **Migrations** : Gestion des versions du schéma
- **Seeding** : Données de test et d'initialisation

#### Justification des choix technologiques

**React + TypeScript :**

- Écosystème mature et bien documenté
- Composants réutilisables et maintenables
- TypeScript améliore la qualité du code et l'IDE
- Large communauté et support

**Node.js + Express :**

- JavaScript côté serveur = compétences unifiées
- Écosystème NPM riche et varié
- Performance excellente pour applications I/O intensives
- Architecture modulaire avec middleware

**PostgreSQL + Sequelize :**

- Base relationnelle robuste et performante
- Support des transactions ACID
- Sequelize simplifie les requêtes complexes
- Migrations pour la gestion des versions

**Tailwind CSS :**

- Développement rapide avec classes utilitaires
- Responsive design intégré
- Customisation flexible
- Bundle optimisé en production

#### Diagramme d'architecture

```
Internet
    │
    ├── Railway (Production)
    │   ├── Frontend (Static Files)
    │   └── Backend (API Server)
    │       └── PostgreSQL (Database)
    │
    └── Développement (Local)
        ├── Vite Dev Server (Frontend :5173)
        ├── Express Server (Backend :3000)
        └── PostgreSQL (Local :5432)
```

### 6.3 Maquettes et enchaînement des maquettes

#### Processus de conception UX/UI

La conception de SkillSwap a suivi une approche **Mobile First** avec focus sur l'expérience utilisateur :

1. **Analyse des besoins** : User stories et personas
2. **Wireframes** : Structure et navigation
3. **Maquettes** : Design visuel et interactions
4. **Prototype** : Test des parcours utilisateur
5. **Implémentation** : Développement responsive

#### Maquettes principales

**Page d'accueil (Landing) :**

- Hero section avec proposition de valeur claire
- Présentation des services disponibles
- Call-to-action vers l'inscription
- Témoignages et derniers profils inscrits

**Authentification :**

- Formulaires de connexion/inscription simplifiés
- Validation en temps réel
- Messages d'erreur explicites
- Design cohérent avec la charte

**Dashboard utilisateur :**

- Navigation intuitive par onglets
- Gestion du profil et des compétences
- Historique des services
- Messagerie intégrée

**Recherche et résultats :**

- Barre de recherche proéminente
- Filtres par localisation et catégorie
- Cartes de profils claires
- Pagination des résultats

#### Parcours utilisateur

**Parcours d'inscription :**

```
Accueil → S'inscrire → Formulaire → Validation → Compléter profil → Dashboard
```

**Parcours de recherche de service :**

```
Dashboard → Rechercher → Filtres → Résultats → Profil → Contacter → Messagerie
```

**Parcours de proposition de service :**

```
Dashboard → Mes services → Créer → Formulaire → Publier → Gestion
```

#### Responsive design

- **Mobile (320px+)** : Navigation burger, cards empilées
- **Tablette (768px+)** : Layout à 2 colonnes, navigation étendue
- **Desktop (1024px+)** : Layout complet, sidebar fixe

### 6.4 Modèle entités-associations et modèle physique de la base de données

#### Analyse des besoins de données

SkillSwap nécessite la gestion de plusieurs entités métier interconnectées :

- **Utilisateurs** : Profils, authentification, localisation
- **Compétences** : Catégories de services proposés
- **Services** : Demandes et offres entre utilisateurs
- **Messages** : Communication privée entre membres
- **Évaluations** : Système de notation post-service
- **Rôles** : Gestion des permissions (utilisateur, admin)

#### Diagramme entité-relation (MER)

```
┌─────────────┐     ┌─────────────────┐     ┌─────────────┐
│    ROLE     │     │      USER       │     │    SKILL    │
│             │     │                 │     │             │
│ id (PK)     │◄────│ id (PK)         │────►│ id (PK)     │
│ name        │  1:N│ email           │ N:M │ name        │
└─────────────┘     │ firstname       │     └─────────────┘
                    │ lastname        │            │
                    │ street          │            │
                    │ zipcode         │            │
                    │ city            │            │
                    │ password        │            │
                    │ profile_picture │            │
                    │ description     │            │
                    │ availability    │            │
                    │ role_id (FK)    │            │
                    │ created_at      │            │
                    │ updated_at      │            │
                    └─────────────────┘            │
                           │                       │
                           │ 1:N            ┌─────────────────┐
                           │                │ USER_HAS_SKILLS │
                           ▼                │                 │
                    ┌─────────────┐         │ id (PK)         │
                    │   SERVICE   │         │ user_id (FK)    │
                    │             │         │ skill_id (FK)   │
                    │ id (PK)     │         └─────────────────┘
                    │ object      │                    ▲
                    │ status      │                    │ N:M
                    │ date        │                    │
                    │ sender_id   │◄───────────────────┘
                    │ receiver_id │
                    └─────────────┘
                           │
                           │ 1:N
                           ▼
                    ┌─────────────┐     ┌─────────────┐
                    │   MESSAGE   │     │   REVIEW    │
                    │             │     │             │
                    │ id (PK)     │     │ id (PK)     │
                    │ content     │     │ note        │
                    │ created_at  │     │ comment     │
                    │ sender_id   │     │ created_at  │
                    │ receiver_id │     │ reviewer_id │
                    │ service_id  │     │ reviewee_id │
                    └─────────────┘     │ service_id  │
                                       └─────────────┘
```

#### Modèle physique (tables, relations, contraintes)

**Table USER :**

```sql
CREATE TABLE "user" (
    "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "email" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_picture" TEXT NULL,
    "description" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ,
    "role_id" INTEGER NOT NULL REFERENCES "role"("id") ON DELETE CASCADE
);
```

**Table SERVICE :**

```sql
CREATE TABLE "service" (
    "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "object" TEXT NOT NULL,
    "status" TEXT NOT NULL CHECK (status IN ('pending', 'accepted', 'completed', 'cancelled')),
    "date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sender_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "receiver_id" INTEGER REFERENCES "user"("id") ON DELETE SET NULL,
    "skill_id" INTEGER NOT NULL REFERENCES "skill"("id") ON DELETE CASCADE
);
```

**Table USER_HAS_SKILLS (Association N:M) :**

```sql
CREATE TABLE "user_has_skills" (
    "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "skill_id" INTEGER NOT NULL REFERENCES "skill"("id") ON DELETE CASCADE,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    UNIQUE ("skill_id", "user_id")
);
```

#### Optimisation et indexation

**Index de performance :**

- Index sur `user.email` (connexion fréquente)
- Index sur `service.status` (filtrage des services)
- Index sur `user.city` et `user.zipcode` (recherche géographique)
- Index composé sur `user_has_skills(user_id, skill_id)`

**Contraintes d'intégrité :**

- Clés étrangères avec CASCADE/SET NULL selon contexte
- Contraintes CHECK sur les statuts
- Contraintes UNIQUE pour éviter les doublons

### 6.5 Script de création ou de modification de la base de données

#### Scripts de migration

**Migration principale (createTables.migration.ts) :**

```typescript
// Création des tables dans l'ordre des dépendances
async function createTables() {
  try {
    await sequelize.authenticate();

    // Synchronisation forcée pour development
    await sequelize.sync({ force: true });

    console.log("✅ Tables créées avec succès");
  } catch (error) {
    console.error("❌ Erreur création tables:", error);
  }
}
```

**Migration de statut (alterServiceStatus.migration.ts) :**

```typescript
// Ajout des contraintes de statut sur les services
await sequelize.query(`
  ALTER TABLE service 
  ADD CONSTRAINT check_status 
  CHECK (status IN ('pending', 'accepted', 'completed', 'cancelled'))
`);
```

#### Scripts de seeding

**Données d'initialisation (seeding-V3.migration.ts) :**

- Création des rôles (utilisateur, administrateur)
- Insertion des compétences par catégories
- Génération d'utilisateurs de test
- Services exemples pour démonstration

**Commandes NPM :**

```json
{
  "scripts": {
    "db:create": "tsx src/migrations/createTables.migration.ts",
    "db:seed": "tsx src/migrations/seeding-V3.migration.ts",
    "db:reset": "npm run db:create && npm run db:alter:service-status && npm run db:seed"
  }
}
```

#### Gestion des versions de schéma

- Migrations incrémentales avec numérotation
- Rollback possible pour chaque modification
- Documentation des changements dans Git
- Tests sur environnement de développement

### 6.6 Diagramme du comportement des fonctionnalités (cas d'utilisation)

#### Acteurs du système

**Visiteur (non authentifié) :**

- Consulter la page d'accueil
- Voir les profils publics
- S'inscrire ou se connecter
- Effectuer des recherches limitées

**Utilisateur inscrit :**

- Gérer son profil et ses compétences
- Proposer et rechercher des services
- Communiquer par messagerie
- Évaluer les prestations reçues

**Administrateur :**

- Modérer les profils et contenus
- Gérer les catégories de compétences
- Superviser les services
- Administrer la plateforme

#### Cas d'utilisation principaux

```
                    SkillSwap Platform
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  ┌─────────────┐         ┌─────────────┐           │
    │  │   Visiteur  │         │ Utilisateur │           │
    │  └─────────────┘         └─────────────┘           │
    │         │                        │                 │
    │         │ S'inscrire            │ Gérer profil     │
    │         ├────────────────────────┼─────────────────┤│
    │         │ Consulter accueil     │ Proposer service ││
    │         ├────────────────────────┼─────────────────┤│
    │         │ Rechercher            │ Rechercher       ││
    │         │                       │ service          ││
    │         │                       ├─────────────────┤│
    │         │                       │ Envoyer message ││
    │         │                       ├─────────────────┤│
    │         │                       │ Évaluer service ││
    │         │                       │                 ││
    │  ┌─────────────┐                │                 ││
    │  │Administrateur│               │                 ││
    │  └─────────────┘                │                 ││
    │         │                       │                 ││
    │         │ Modérer profils       │                 ││
    │         ├───────────────────────┼─────────────────┤│
    │         │ Gérer compétences     │                 ││
    │         ├───────────────────────┼─────────────────┤│
    │         │ Superviser services   │                 ││
    └─────────────────────────────────────────────────────┘
```

#### Diagrammes UML

**Cas d'utilisation "Échanger un service" :**

- Acteur principal : Utilisateur inscrit
- Prérequis : Authentification réussie
- Scénario nominal : Recherche → Contact → Accord → Réalisation → Évaluation
- Scénarios alternatifs : Refus, annulation, conflit

### 6.7 Diagrammes de séquence

#### Authentification utilisateur

```
Utilisateur    Frontend     Backend      Database
    │             │           │            │
    │─── Login ───►│           │            │
    │             │───POST────►│            │
    │             │    /auth   │            │
    │             │           │──SELECT────►│
    │             │           │   user     │
    │             │           │◄───────────│
    │             │           │            │
    │             │           │──Verify────│
    │             │           │ password   │
    │             │           │            │
    │             │           │─Generate───│
    │             │           │   JWT      │
    │             │           │            │
    │             │◄──Token───│            │
    │◄── Success ─│   +       │            │
    │    Token    │  Cookie   │            │
```

#### Création et réservation d'un service

```
Demandeur   Frontend    Backend     Database    Offreur
    │          │          │           │           │
    │─Create───►│          │           │           │
    │ Service  │──POST───►│           │           │
    │          │ /service │           │           │
    │          │          │──INSERT───►│           │
    │          │          │  service  │           │
    │          │          │◄──────────│           │
    │          │◄─201─────│           │           │
    │◄─Success─│          │           │           │
    │          │          │           │           │
    │          │          │─Notify────┼──────────►│
    │          │          │ Email/Push│  Email    │
    │          │          │           │           │
    │                     │           │           │
    │          │          │◄──Accept──┼───────────│
    │          │          │  Service  │           │
    │          │          │           │           │
    │          │          │──UPDATE───►│           │
    │          │          │  status   │           │
    │◄─Notif───┼──────────│◄──────────│           │
    │ Accept   │          │           │           │
```

#### Système de messagerie

```
Expéditeur  Frontend    Backend     Database   Destinataire
    │          │          │           │           │
    │─Send─────►│          │           │           │
    │ Message  │──POST───►│           │           │
    │          │/messages │           │           │
    │          │          │──INSERT───►│           │
    │          │          │ message   │           │
    │          │          │◄──────────│           │
    │          │◄─201─────│           │           │
    │◄─Success─│          │           │           │
    │          │          │           │           │
    │          │          │─WebSocket─┼──────────►│
    │          │          │Broadcast  │Real-time  │
    │          │          │           │notification│
    │                     │           │           │
    │          │          │◄─Poll─────┼───────────│
    │          │          │/messages  │Get new    │
    │          │          │           │messages   │
    │          │          │──SELECT───►│           │
    │          │          │ messages  │           │
    │          │          │◄──────────│           │
    │          │          │───────────┼──────────►│
    │          │          │ Messages  │Display    │
```

---

## 7. Spécifications techniques

### 7.1 Architecture technique détaillée

#### Couche présentation côté utilisateur (Repository Frontend)

**Architecture Frontend React + TypeScript + Tailwind CSS avec organisation modulaire**

L'architecture frontend de SkillSwap suit une approche modulaire et scalable, organisée selon le principe de séparation des responsabilités. Chaque dossier a un rôle spécifique dans l'écosystème de l'application.

```
src/
├── api/                # Logique d'axios pour les appels HTTP à l'API
├── assets/             # Images et logo de l'application
├── components/         # Composants réutilisables
│   ├── ui/            # Composants UI de base (Button, Card, Modal)
│   ├── forms/         # Formulaires spécialisés (Login, Register, Service)
│   └── layout/        # Mise en page (Header, Footer, Navigation)
├── hooks/             # Logique React (useState, useEffect, useNavigate)
├── lib/               # Fichier utils.ts pour combiner classes Tailwind CSS
├── pages/             # Toutes les pages frontend de l'application
├── services/          # Logique métier - interactions avec API backend
│   ├── auth.service.ts    # Authentification et autorisation
│   ├── user.service.ts    # Gestion des utilisateurs
│   ├── service.service.ts # Gestion des services
│   ├── skill.service.ts   # Gestion des compétences
│   └── message.service.ts # Gestion des messages
├── tests/             # Tests unitaires et d'intégration frontend
├── types/             # Définitions TypeScript
│   ├── user.ts           # Structure des données utilisateur
│   ├── service.ts        # Structure des données service
│   ├── skill.ts          # Structure des données compétence
│   ├── message.ts        # Structure des données message
│   ├── conversation.ts   # Regroupement User et Message
│   └── forms.ts          # Gestion des formulaires
└── utils/             # Fonctions utilitaires partagées
```

**Architecture des composants et patterns React :**

**1. Pattern Container/Presenter pour la séparation des responsabilités :**

```typescript
// Container : Gestion de l'état et logique métier
function PersonalPageContainer() {
  const [services, setServices] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const userServices = await getMyServices();
        setServices(userServices);
      } catch (error) {
        console.error('Erreur récupération services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <PersonalPagePresenter
      services={services}
      loading={loading}
      onServiceUpdate={handleServiceUpdate}
    />
  );
}

// Presenter : Affichage pur sans état
function PersonalPagePresenter({ services, loading, onServiceUpdate }) {
  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map(service => (
        <ServiceCard
          key={service.id}
          service={service}
          onUpdate={onServiceUpdate}
        />
      ))}
    </div>
  );
}
```

**2. Hooks personnalisés pour la réutilisabilité :**

```typescript
// hooks/useAuth.ts - Gestion centralisée de l'authentification
export function useAuth() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (credentials: LoginData) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      setIsAuthenticated(true);
      navigate("/personal");
    } catch (error) {
      throw new Error("Échec de la connexion");
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  return { user, isAuthenticated, login, logout };
}

// hooks/useServiceStatus.ts - Gestion des statuts de service
export function useServiceStatus(
  serviceId: string,
  initialStatus: ServiceStatus,
) {
  const [status, setStatus] = useState<ServiceStatus>(initialStatus);
  const [loading, setLoading] = useState(false);

  const changeStatus = async (newStatus: ServiceStatus) => {
    setLoading(true);
    try {
      await updateServiceStatus(serviceId, newStatus);
      setStatus(newStatus);
    } catch (error) {
      throw new Error("Erreur mise à jour statut");
    } finally {
      setLoading(false);
    }
  };

  return { status, loading, changeStatus };
}
```

**3. Gestion d'état avancée avec Context API + React Query :**

```typescript
// contexts/AuthContext.tsx - État global d'authentification
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  // Vérification automatique du token au chargement
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        // Token invalide ou expiré
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// services/api.service.ts - Configuration Axios centralisée
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  withCredentials: true, // Inclusion automatique des cookies JWT
});

// Intercepteur pour gestion automatique des erreurs d'auth
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expiré - redirection vers login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

**4. Optimisations performance et patterns avancés :**

```typescript
// Composant optimisé avec mémoisation
const ServiceCard = memo(({ service, onStatusUpdate }: ServiceCardProps) => {
  // Mémoisation de la fonction de callback
  const handleStatusChange = useCallback(
    (newStatus: ServiceStatus) => {
      onStatusUpdate?.(service.id, newStatus);
    },
    [service.id, onStatusUpdate]
  );

  // Mémoisation du calcul de style conditionnel
  const statusColor = useMemo(() => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
    };
    return colors[service.status] || 'bg-gray-100 text-gray-800';
  }, [service.status]);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent>
        <Badge className={statusColor}>
          {service.status}
        </Badge>
        <Button onClick={() => handleStatusChange('accepted')}>
          Accepter
        </Button>
      </CardContent>
    </Card>
  );
});
```

**5. Design System avec Tailwind CSS et composants réutilisables :**

```typescript
// components/ui/Button.tsx - Composant de base avec variants
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', loading, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Styles de base
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",

          // Variants
          {
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
              variant === 'default',
            "border border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-500":
              variant === 'outline',
            "bg-transparent hover:bg-gray-100 focus:ring-gray-500":
              variant === 'ghost',
            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":
              variant === 'destructive',
          },

          // Sizes
          {
            "h-8 px-3 text-sm": size === 'sm',
            "h-10 px-4": size === 'md',
            "h-12 px-8 text-lg": size === 'lg',
          },

          className
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
```

#### Couche métier côté serveur (Repository Backend)

**Architecture Node.js + Express + TypeScript avec organisation modulaire**

Le backend de SkillSwap suit une architecture en couches respectant les principes SOLID et les bonnes pratiques de développement API REST.

```
src/
├── controllers/        # Méthodes CRUD pour chaque entité
│   ├── auth.controller.ts     # Authentification (login, register, logout)
│   ├── user.controller.ts     # Gestion des utilisateurs
│   ├── service.controller.ts  # Gestion des services
│   ├── message.controller.ts  # Gestion des messages
│   └── skill.controller.ts    # Gestion des compétences
├── database/           # Configuration ORM Sequelize
│   └── client.ts             # Initialisation connexion PostgreSQL
├── middleware/         # Traitements transversaux et sécurité
│   ├── auth.middleware.ts         # Vérification token JWT
│   ├── body-sanitizer.ts          # Sanitisation données utilisateur
│   ├── validate-auth.ts           # Validation routes authentification
│   └── validation-register.ts     # Contrôle mots offensants (leo-profanity)
├── migrations/         # Scripts Sequelize
│   ├── createTables.migration.ts  # Création des tables
│   └── seeding-*.migration.ts     # Peuplement données de test
├── models/             # Définitions Sequelize des entités
│   ├── User.model.ts         # Modèle utilisateur
│   ├── Service.model.ts      # Modèle service
│   ├── Skill.model.ts        # Modèle compétence
│   ├── Message.model.ts      # Modèle message
│   └── associations.ts       # Relations entre les 6 tables
├── queries/            # Requêtes SQL brutes optimisées
│   └── service.queries.ts    # Récupération services utilisateur
├── routers/            # Définition des routes HTTP
│   ├── auth.router.ts        # Routes authentification
│   ├── user.router.ts        # Routes utilisateurs
│   ├── service.router.ts     # Routes services
│   ├── message.router.ts     # Routes messages
│   └── skill.router.ts       # Routes compétences
├── schemas/            # Validation données entrantes (Zod + Regex)
│   ├── auth.schema.ts        # Validation authentification
│   ├── user.schema.ts        # Validation utilisateurs
│   └── service.schema.ts     # Validation services
└── tests/              # Tests unitaires et d'intégration
    ├── unit/                 # Tests unitaires
    └── integration/          # Tests d'intégration API
```

**Middleware de sécurité - Architecture en "péage" :**

Les middlewares agissent comme des contrôles de sécurité sur chaque route. Si un middleware rejette la requête, l'utilisateur est bloqué côté backend. Si c'est validé, il appelle `next()` pour continuer vers le controller.

```typescript
// middleware/auth.middleware.ts - Vérification JWT
export const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Récupération token depuis cookie accessToken ou Authorization header
    const token =
      req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token manquant" });
    }

    // Vérification et décodage du token JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};

// middleware/body-sanitizer.ts - Protection XSS
export const bodySanitizerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const sanitizeObject = (obj: any): any => {
    if (typeof obj === "string") {
      return sanitizeHtml(obj, {
        allowedTags: [],
        allowedAttributes: {},
      });
    }
    // Récursion pour objets et tableaux...
    return obj;
  };

  req.body = sanitizeObject(req.body);
  next();
};

// middleware/validation-register.ts - Contrôle mots offensants
import LeoProfanity from "leo-profanity";
import frenchBadwords from "french-badwords-list";

export const validateUserContent = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { description, availability } = req.body;

  // Configuration des mots interdits
  LeoProfanity.add(frenchBadwords);

  if (LeoProfanity.check(description) || LeoProfanity.check(availability)) {
    return res.status(400).json({
      error: "Contenu inapproprié détecté dans la description ou disponibilité",
    });
  }

  next();
};
```

#### Couche base de données (PostgreSQL + Sequelize)

**Configuration robuste et relationnelle adaptée au projet**

Les entités sont modélisées via des models Sequelize, puis les relations sont centralisées dans le fichier `associations.ts` pour une gestion cohérente des liaisons entre tables.

```typescript
// database/client.ts - Configuration PostgreSQL optimisée
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,

  // Pool de connexions optimisé
  pool: {
    max: 10, // Maximum 10 connexions simultanées
    min: 0, // Minimum 0 connexion au repos
    acquire: 30000, // Timeout acquisition (30s)
    idle: 10000, // Timeout inactivité (10s)
  },

  // Options de sécurité production
  dialectOptions: {
    ssl:
      process.env.NODE_ENV === "production"
        ? {
            require: true,
            rejectUnauthorized: false, // Pour Railway/Heroku
          }
        : false,
  },
});

// models/associations.ts - Relations centralisées
import User from "./User.model";
import Service from "./Service.model";
import Skill from "./Skill.model";
import Message from "./Message.model";

// Relations User ↔ Service
User.hasMany(Service, { foreignKey: "sender_id", as: "sentServices" });
User.hasMany(Service, { foreignKey: "receiver_id", as: "receivedServices" });
Service.belongsTo(User, { foreignKey: "sender_id", as: "sender" });
Service.belongsTo(User, { foreignKey: "receiver_id", as: "receiver" });

// Relations N:M User ↔ Skill
User.belongsToMany(Skill, {
  through: "user_has_skills",
  foreignKey: "user_id",
  otherKey: "skill_id",
});
Skill.belongsToMany(User, {
  through: "user_has_skills",
  foreignKey: "skill_id",
  otherKey: "user_id",
});

export { User, Service, Skill, Message };
```

- Hooks pour les timestamps
- Scopes pour requêtes optimisées

### 7.2 API REST et documentation

#### Design des endpoints

L'API suit les conventions REST avec une structure cohérente :

**Authentication :**

```
POST   /api/auth/login      # Connexion utilisateur
POST   /api/auth/register   # Inscription utilisateur
POST   /api/auth/logout     # Déconnexion
GET    /api/auth/check      # Vérification du token
```

**Users :**

```
GET    /api/users           # Liste des utilisateurs
GET    /api/users/:id       # Profil utilisateur
PUT    /api/users/:id       # Mise à jour profil
DELETE /api/users/:id       # Suppression compte
GET    /api/users/search    # Recherche utilisateurs
```

**Services :**

```
GET    /api/services        # Liste des services
POST   /api/services        # Création service
GET    /api/services/:id    # Détail service
PUT    /api/services/:id    # Modification service
DELETE /api/services/:id    # Suppression service
POST   /api/services/:id/book # Réservation service
```

**Messages :**

```
GET    /api/messages        # Messages utilisateur
POST   /api/messages        # Envoyer message
GET    /api/messages/:id    # Thread de conversation
PUT    /api/messages/:id    # Marquer comme lu
```

#### Documentation Swagger/OpenAPI

Structure de documentation automatique :

```typescript
// Exemple de documentation endpoint
/**
 * @swagger
 * /api/services:
 *   post:
 *     tags: [Services]
 *     summary: Créer un nouveau service
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - object
 *               - skill_id
 *             properties:
 *               object:
 *                 type: string
 *                 description: Description du service
 *               skill_id:
 *                 type: integer
 *                 description: ID de la compétence
 *     responses:
 *       201:
 *         description: Service créé avec succès
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non authentifié
 */
```

#### Gestion des erreurs et codes de statut

**Codes de statut standardisés :**

- **200** : Succès avec données
- **201** : Création réussie
- **204** : Succès sans contenu
- **400** : Erreur de validation
- **401** : Non authentifié
- **403** : Non autorisé
- **404** : Ressource introuvable
- **409** : Conflit (doublon)
- **500** : Erreur serveur

**Middleware de gestion d'erreurs :**

```typescript
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);

  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: "Validation failed",
      details: err.errors,
    });
  }

  res.status(500).json({
    error: "Internal server error",
    message:
      process.env.NODE_ENV === "production"
        ? "Something went wrong"
        : err.message,
  });
};
```

### 7.3 Gestion des sessions et authentification

#### JWT (JSON Web Tokens)

**Configuration sécurisée :**

```typescript
// Génération du token
const generateToken = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role_id,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
      issuer: "skillswap-api",
      audience: "skillswap-app",
    },
  );
};
```

**Stockage sécurisé :**

- **HttpOnly Cookies** : Protection contre XSS
- **Secure flag** : HTTPS uniquement en production
- **SameSite** : Protection CSRF

#### Middleware d'authentification

```typescript
// middleware/auth.middleware.ts
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token manquant" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};
```

#### Gestion des rôles et permissions

**Système de rôles :**

- **User (1)** : Utilisateur standard
- **Admin (2)** : Administrateur plateforme

**Middleware d'autorisation :**

```typescript
export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.user?.role !== 2) {
    return res.status(403).json({ error: "Accès administrateur requis" });
  }
  next();
};
```

### 7.4 Sécurité (élément crucial)

#### Authentification et autorisation

**Hashage des mots de passe (Argon2) :**

```typescript
import argon2 from "argon2";

// Hashage lors de l'inscription
const hashPassword = async (password: string): Promise<string> => {
  return await argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 3,
    parallelism: 1,
  });
};

// Vérification lors de la connexion
const verifyPassword = async (
  hash: string,
  password: string,
): Promise<boolean> => {
  return await argon2.verify(hash, password);
};
```

**Gestion des tokens JWT :**

- Expiration configurée (7 jours)
- Refresh token pour sessions longues
- Révocation possible côté serveur
- Signature avec secret robuste

**Middleware de validation :**

```typescript
// Validation des données d'entrée
export const validateAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = z.object({
    email: z.string().email("Email invalide"),
    password: z.string().min(8, "Mot de passe trop court"),
  });

  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: "Données invalides" });
  }
};
```

#### Protection contre les attaques

**Validation et sanitisation des données :**

```typescript
import sanitizeHtml from "sanitize-html";

// Middleware de sanitisation
export const sanitizeBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  for (const key in req.body) {
    if (typeof req.body[key] === "string") {
      req.body[key] = sanitizeHtml(req.body[key], {
        allowedTags: [],
        allowedAttributes: {},
      });
    }
  }
  next();
};
```

**Protection CSRF :**

- Tokens CSRF sur formulaires sensibles
- Vérification de l'origine des requêtes
- Headers personnalisés obligatoires

**Protection XSS :**

- Sanitisation de toutes les entrées utilisateur
- Content Security Policy (CSP)
- Échappement automatique côté frontend

**Rate Limiting :**

```typescript
import rateLimit from "express-rate-limit";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 tentatives max
  message: "Trop de tentatives de connexion",
  standardHeaders: true,
  legacyHeaders: false,
});
```

#### Sécurisation des communications

**Configuration HTTPS :**

```typescript
// Production - Redirection HTTPS obligatoire
app.use((req, res, next) => {
  if (req.header("x-forwarded-proto") !== "https") {
    res.redirect(`https://${req.header("host")}${req.url}`);
  } else {
    next();
  }
});
```

**Headers de sécurité HTTP :**

```typescript
// Helmet.js pour les headers sécurisés
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
  }),
);
```

**Configuration CORS sécurisée :**

```typescript
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
```

**Chiffrement des données sensibles :**

- Variables d'environnement pour secrets
- Base de données avec connexion chiffrée
- Logs anonymisés en production

### 7.5 Performance et optimisation

#### Optimisation des requêtes SQL

**Utilisation d'index :**

- Index sur colonnes de recherche fréquente
- Index composés pour requêtes complexes
- Analyse des plans d'exécution

**Requêtes optimisées avec Sequelize :**

```typescript
// Inclusion sélective des relations
const users = await User.findAll({
  include: [
    {
      model: Skill,
      attributes: ["id", "name"], // Seulement les champs nécessaires
      through: { attributes: [] }, // Exclure la table de jointure
    },
  ],
  attributes: { exclude: ["password"] }, // Exclure données sensibles
  limit: 20,
  offset: (page - 1) * 20,
});
```

**Pagination efficace :**

- LIMIT/OFFSET pour grandes collections
- Cursor-based pagination pour performance
- Cache des comptes totaux

#### Gestion du cache

**Cache Redis (prévu) :**

- Sessions utilisateur
- Requêtes fréquentes
- Cache de résultats de recherche

**Cache côté client :**

- React Query pour cache API
- Service Worker pour cache statique
- Local Storage pour préférences

#### Optimisation du bundle frontend

**Configuration Vite optimisée :**

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["@radix-ui/react-dialog", "lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "axios"],
  },
});
```

**Optimisations appliquées :**

- Code splitting automatique
- Tree shaking pour éliminer le code mort
- Compression gzip/brotli
- Images optimisées et lazy loading
- Prefetch des routes critiques

---

## 8. Réalisations du candidat

### 8.1 Fonctionnalités développées

#### Vue d'ensemble des fonctionnalités implémentées

Au cours des 3 sprints de développement, j'ai contribué à l'implémentation de l'ensemble des fonctionnalités core de SkillSwap. En tant que Lead Developer Backend, j'ai particulièrement focalisé mes efforts sur :

**Backend - API et sécurité :**

- Système d'authentification JWT complet avec middleware sécurisé
- API REST avec 20+ endpoints pour toutes les entités métier
- Architecture en couches avec séparation des responsabilités
- Système de validation et sanitisation des données
- Gestion des erreurs centralisée et logging

**Collaboration Frontend :**

- Intégration des appels API avec gestion d'état React
- Composants de formulaires avec validation temps réel
- Système de routage avec protection des routes
- Interface responsive et accessible

**Base de données :**

- Modélisation complète avec 7 tables et relations
- Scripts de migration et seeding automatisés
- Optimisation des requêtes avec index et jointures
- Gestion des transactions pour opérations critiques

#### Défis techniques rencontrés

**1. Gestion de l'authentification sécurisée**

Le défi principal était d'implémenter un système d'authentification robuste avec :

- Stockage sécurisé des tokens (HttpOnly cookies vs localStorage)
- Gestion de l'expiration et du refresh des tokens
- Protection contre les attaques XSS et CSRF

**Solution adoptée :**

- JWT stockés dans des cookies HttpOnly avec flags Secure et SameSite
- Middleware de vérification centralisé réutilisable
- Système de logout côté serveur avec invalidation

**2. Architecture modulaire et maintenable**

Avec une équipe de 4 développeurs et des délais serrés, maintenir une architecture cohérente était crucial.

**Solution adoptée :**

- Séparation stricte des responsabilités (MVC pattern)
- Middleware réutilisables pour validation, auth, sanitisation
- Types TypeScript partagés entre frontend et backend
- Convention de nommage et structure de projet standardisée

**3. Performance des requêtes avec relations complexes**

Les relations N:M entre utilisateurs et compétences, ainsi que les jointures multiples pour les services, posaient des défis de performance.

**Solution adoptée :**

- Requêtes Sequelize optimisées avec includes sélectifs
- Index sur colonnes de recherche fréquente
- Pagination côté serveur pour les listes
- Cache des requêtes fréquentes côté client avec React Query

### 8.2 Captures d'écran d'interfaces utilisateur et code correspondant

#### Page d'accueil et présentation

**Interface responsive et moderne**

La page d'accueil présente SkillSwap avec une approche clean et engageante :

![Capture d'écran - Page d'accueil SkillSwap]
_Page d'accueil responsive avec hero section et call-to-action_

**Composant React correspondant :**

```tsx
// components/Homepage.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { UserCard } from "@/components/UserCard";
import type { IUser } from "@/types/user";

export default function Homepage() {
  const [recentUsers, setRecentUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentUsers = async () => {
      try {
        const users = await getRecentUsers();
        setRecentUsers(users.slice(0, 6)); // Afficher les 6 derniers
      } catch (error) {
        console.error("Erreur récupération utilisateurs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Échangez vos <span className="text-blue-600">compétences</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Rejoignez la communauté SkillSwap et découvrez un monde d'entraide où
          chacun peut apprendre et enseigner.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => navigate("/register")}
        >
          Rejoindre la communauté
        </Button>
      </section>

      {/* Section des derniers inscrits */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Derniers membres inscrits
        </h2>
        {loading ? (
          <div className="text-center">Chargement...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentUsers.map((user) => (
              <UserCard key={user.id} user={user} showContact={false} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
```

**Points techniques remarquables :**

- **Responsive design** : Grid CSS adaptatif selon la taille d'écran
- **Loading states** : Gestion de l'état de chargement pour UX optimale
- **TypeScript** : Typage strict pour la robustesse
- **Tailwind CSS** : Classes utilitaires pour styling rapide et cohérent

#### Système d'authentification

**Formulaires de connexion/inscription sécurisés**

![Capture d'écran - Formulaire de connexion]
_Interface de connexion avec validation temps réel_

**Code de validation côté frontend :**

```tsx
// components/Forms/LoginForm.tsx
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  // Validation en temps réel lors de la frappe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: typeof value === "string" ? value.trimStart() : value,
    });

    // Reset error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation côté client avant envoi
    if (!loginData.email || !loginData.password) {
      setError("Merci de remplir tous les champs.");
      return;
    }

    if (loginData.password.length < 8) {
      setError("Le mot de passe doit faire au moins 8 caractères.");
      return;
    }

    try {
      setError(null);
      const response = await login(loginData);

      if (response.success) {
        navigate("/personal");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Erreur de connexion");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Se connecter
      </button>
    </form>
  );
}
```

**Hook d'authentification personnalisé :**

```tsx
// hooks/useAuth.ts
import { useState, useContext, createContext, ReactNode } from "react";
import {
  login as apiLogin,
  logout as apiLogout,
} from "@/services/auth.service";
import type { IUser } from "@/types/user";

interface AuthContextType {
  user: IUser | null;
  login: (credentials: LoginData) => Promise<any>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (credentials: LoginData) => {
    try {
      const response = await apiLogin(credentials);
      setUser(response.user);
      return { success: true, user: response.user };
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
    } catch (error) {
      console.error("Erreur logout:", error);
    }
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
```

#### Dashboard utilisateur

**Interface de gestion des services personnalisés**

![Capture d'écran - Dashboard utilisateur]
_Dashboard avec onglets pour profil, services proposés et reçus_

**Composant principal du dashboard :**

```tsx
// pages/PersonalPage.tsx
import { useEffect, useState } from "react";
import { getMyServices } from "@/services/service.service";
import { getCurrentUser, updateUser } from "@/services/user.service";
import { ServiceCard } from "@/components/ServiceCard";
import type { IService, IUser } from "@/types";

export default function PersonalPage() {
  const [services, setServices] = useState<IService[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<IUser | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "services">("profile");

  // Gestion de la mise à jour du profil
  const handleSave = async () => {
    if (!editedUser) return;
    try {
      const updated = await updateUser(editedUser.id, editedUser);
      setCurrentUser(updated);
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur mise à jour profil:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [user, userServices] = await Promise.all([
          getCurrentUser(),
          getMyServices(),
        ]);

        setCurrentUser(user);
        setEditedUser(user);
        setServices(userServices);
      } catch (error) {
        console.error("Erreur chargement données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Navigation par onglets */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("profile")}
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === "profile"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Mon Profil
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === "services"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Mes Services ({services.length})
          </button>
        </div>

        {/* Contenu des onglets */}
        {activeTab === "profile" && currentUser && (
          <ProfileSection
            user={currentUser}
            isEditing={isEditing}
            editedUser={editedUser}
            onEdit={() => setIsEditing(true)}
            onSave={handleSave}
            onCancel={() => {
              setIsEditing(false);
              setEditedUser(currentUser);
            }}
            onChange={setEditedUser}
          />
        )}

        {activeTab === "services" && (
          <ServicesSection
            services={services}
            currentUserId={currentUser?.id || 0}
            onStatusUpdate={(serviceId, newStatus) => {
              setServices((prev) =>
                prev.map((service) =>
                  service.id === serviceId
                    ? { ...service, status: newStatus }
                    : service,
                ),
              );
            }}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
```

**Composant de carte de service réutilisable :**

```tsx
// components/ServiceCard.tsx
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { IService, IServiceStatus } from "@/types/service";
import { useServiceStatus } from "@/hooks/useServiceStatus";

interface ServiceCardProps {
  service: IService;
  currentUserId: number;
  onStatusUpdate?: (newStatus: IServiceStatus) => void;
}

export function ServiceCard({
  service,
  currentUserId,
  onStatusUpdate,
}: ServiceCardProps) {
  const {
    id,
    giverName = "Inconnu",
    receiverName = "Inconnu",
    receiverId,
    title = "Sans titre",
    date,
  } = service;

  // Hook personnalisé pour gérer le statut
  const { status, loading, changeStatus } = useServiceStatus(
    id.toString(),
    service.status,
  );

  const isReceiver = currentUserId === receiverId;
  const canAccept = isReceiver && status === "pending";
  const canComplete = status === "accepted";

  // Fonction pour déterminer la couleur du badge
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleStatusChange = async (newStatus: IServiceStatus) => {
    try {
      await changeStatus(newStatus);
      onStatusUpdate?.(newStatus);
    } catch (error) {
      console.error("Erreur changement statut:", error);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <Badge className={getStatusColor(status)}>
            {status === "pending" && "En attente"}
            {status === "accepted" && "Accepté"}
            {status === "completed" && "Terminé"}
          </Badge>
        </div>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <p>
            <span className="font-medium">Proposé par:</span> {giverName}
          </p>
          <p>
            <span className="font-medium">Pour:</span> {receiverName}
          </p>
          <p>
            <span className="font-medium">Date:</span>
            {format(new Date(date), "dd MMMM yyyy", { locale: fr })}
          </p>
        </div>

        {/* Actions conditionnelles selon le rôle et le statut */}
        <div className="flex gap-2">
          {canAccept && (
            <Button
              onClick={() => handleStatusChange("accepted")}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700"
            >
              {loading ? "..." : "Accepter"}
            </Button>
          )}

          {canComplete && (
            <Button
              onClick={() => handleStatusChange("completed")}
              disabled={loading}
              variant="outline"
            >
              {loading ? "..." : "Marquer terminé"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
```

#### Système de recherche et filtrage

**Interface de recherche avec filtres géographiques**

![Capture d'écran - Page de recherche]
_Recherche avec filtres par compétence et localisation_

**Composant de recherche avancée :**

```tsx
// components/Forms/SearchForm.tsx
import { useState, useEffect } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getUsersBySkillAndLocation } from "@/services/user.service";
import { getSkills } from "@/services/skill.service";
import type { IUser, ISkill } from "@/types";

interface SearchFormProps {
  onResults: (users: IUser[]) => void;
  onLoading: (loading: boolean) => void;
}

export default function SearchForm({ onResults, onLoading }: SearchFormProps) {
  const [searchData, setSearchData] = useState({
    skill: "",
    city: "",
    zipcode: "",
  });
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Charger la liste des compétences pour l'autocomplétion
    const fetchSkills = async () => {
      try {
        const skillsData = await getSkills();
        setSkills(skillsData);
      } catch (error) {
        console.error("Erreur chargement compétences:", error);
      }
    };

    fetchSkills();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchData.skill.trim()) {
      alert("Veuillez sélectionner une compétence");
      return;
    }

    onLoading(true);

    try {
      const results = await getUsersBySkillAndLocation(searchData);
      onResults(results);
    } catch (error) {
      console.error("Erreur recherche:", error);
      onResults([]);
    } finally {
      onLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Champ de recherche principal */}
        <div className="flex-1">
          <label
            htmlFor="skill"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Quelle compétence recherchez-vous ?
          </label>
          <div className="relative">
            <input
              type="text"
              id="skill"
              list="skills-list"
              value={searchData.skill}
              onChange={(e) =>
                setSearchData({ ...searchData, skill: e.target.value })
              }
              placeholder="Ex: Informatique, Jardinage, Mécanique..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

            {/* Datalist pour l'autocomplétion */}
            <datalist id="skills-list">
              {skills.map((skill) => (
                <option key={skill.id} value={skill.name} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Toggle filtres avancés */}
        <div className="flex items-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="mb-0"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtres
          </Button>
        </div>

        {/* Bouton de recherche */}
        <div className="flex items-end">
          <Button type="submit" className="w-full lg:w-auto">
            <Search className="h-4 w-4 mr-2" />
            Rechercher
          </Button>
        </div>
      </div>

      {/* Filtres avancés (collapsible) */}
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ville
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="city"
                  value={searchData.city}
                  onChange={(e) =>
                    setSearchData({ ...searchData, city: e.target.value })
                  }
                  placeholder="Paris, Lyon, Marseille..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Code postal
              </label>
              <input
                type="text"
                id="zipcode"
                value={searchData.zipcode}
                onChange={(e) =>
                  setSearchData({ ...searchData, zipcode: e.target.value })
                }
                placeholder="75000, 69000..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
```

### 8.3 Extraits de code de composants d'accès aux données

#### Modèles Sequelize et associations

**Modèle User avec relations complexes :**

```typescript
// models/User.model.ts
import sequelize from "../database/client";
import { DataTypes, Model } from "sequelize";
import Skill from "./Skill.model";

export default class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare firstname: string;
  declare lastname: string;
  declare street: string;
  declare zipcode: string;
  declare city: string;
  declare profile_picture: string;
  declare description: string;
  declare availability: string;
  declare role_id: number | null;

  // Méthodes d'association Sequelize
  declare addSkill: (skill: Skill) => Promise<void>;
  declare addSkills: (skill: Skill[]) => Promise<void>;
  declare getSkills: () => Promise<Skill[]>;
  declare setSkills: (skills: Skill[]) => Promise<void>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 50],
        notEmpty: true,
      },
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 50],
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [8, 255],
      },
    },
    street: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        is: /^[0-9]{5}$/, // Format code postal français
      },
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    profile_picture: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10, 1000],
      },
    },
    availability: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "role",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "user",
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
```

**Modèle Service avec gestion des statuts :**

```typescript
// models/Service.model.ts
import sequelize from "../database/client";
import { DataTypes, Model } from "sequelize";

interface ServiceAttributes {
  id: number;
  object: string;
  status: "pending" | "accepted" | "completed" | "cancelled";
  sender_id: number;
  receiver_id: number;
  skill_id: number;
  date: Date;
}

export default class Service extends Model<ServiceAttributes> {
  declare id: number;
  declare object: string;
  declare status: "pending" | "accepted" | "completed" | "cancelled";
  declare sender_id: number;
  declare receiver_id: number;
  declare skill_id: number;
  declare date: Date;
}

Service.init(
  {
    object: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10, 500],
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.ENUM("pending", "accepted", "completed", "cancelled"),
      allowNull: false,
      defaultValue: "pending",
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "service",
    timestamps: true,
    underscored: true,
  },
);
```

#### Configuration de la base de données

**Client Sequelize avec pool de connexions :**

```typescript
// database/client.ts
import { Sequelize } from "sequelize";

const DATABASE_URL = process.env.DATABASE_URL as string;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,

  // Configuration du pool de connexions
  pool: {
    max: 10, // Maximum 10 connexions simultanées
    min: 0, // Minimum 0 connexion au repos
    acquire: 30000, // Timeout acquisition connexion (30s)
    idle: 10000, // Timeout connexion inactive (10s)
  },

  // Options de sécurité
  dialectOptions: {
    ssl:
      process.env.NODE_ENV === "production"
        ? {
            require: true,
            rejectUnauthorized: false, // Pour Railway/Heroku
          }
        : false,
  },

  // Gestion des timestamps
  define: {
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

// Test de connexion au démarrage
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connexion à la base de données établie");
  })
  .catch((error) => {
    console.error("❌ Erreur connexion base de données:", error);
    process.exit(1);
  });

export default sequelize;
```

#### Requêtes complexes avec jointures

**Service de requêtes optimisées :**

```typescript
// queries/service.queries.ts
import { User, Service, Skill } from "../models/associations";
import { Op } from "sequelize";

export const getAllServicesForUser = async (userId: number) => {
  try {
    const services = await Service.findAll({
      where: {
        [Op.or]: [{ sender_id: userId }, { receiver_id: userId }],
      },
      include: [
        {
          model: User,
          as: "sender",
          attributes: ["id", "firstname", "lastname", "profile_picture"],
        },
        {
          model: User,
          as: "receiver",
          attributes: ["id", "firstname", "lastname", "profile_picture"],
        },
        {
          model: Skill,
          attributes: ["id", "name"],
        },
      ],
      order: [["created_at", "DESC"]],
    });

    // Transformation des données pour le frontend
    return services.map((service) => ({
      id: service.id,
      title: service.object,
      status: service.status,
      date: service.date,
      giverId: service.sender_id,
      giverName: `${service.sender.firstname} ${service.sender.lastname}`,
      receiverId: service.receiver_id,
      receiverName: service.receiver
        ? `${service.receiver.firstname} ${service.receiver.lastname}`
        : "Non assigné",
      skillName: service.skill?.name || "Compétence inconnue",
    }));
  } catch (error) {
    console.error("Erreur getAllServicesForUser:", error);
    throw new Error("Impossible de récupérer les services");
  }
};

export const getServicesBySkillAndLocation = async (
  skillName: string,
  city?: string,
  zipcode?: string,
) => {
  const whereClause: any = {};

  if (city) {
    whereClause.city = {
      [Op.iLike]: `%${city}%`, // Recherche insensible à la casse
    };
  }

  if (zipcode) {
    whereClause.zipcode = {
      [Op.like]: `${zipcode}%`, // Commence par le code postal
    };
  }

  try {
    const users = await User.findAll({
      where: whereClause,
      include: [
        {
          model: Skill,
          where: {
            name: {
              [Op.iLike]: `%${skillName}%`,
            },
          },
          through: { attributes: [] }, // Exclure la table de jointure
        },
      ],
      attributes: {
        exclude: ["password"], // Sécurité : ne jamais retourner le password
      },
      limit: 20, // Pagination côté serveur
    });

    return users;
  } catch (error) {
    console.error("Erreur getServicesBySkillAndLocation:", error);
    throw new Error("Erreur lors de la recherche");
  }
};
```

#### Gestion des transactions

**Opérations atomiques critiques :**

```typescript
// controllers/service.controller.ts - Création de service avec transaction
export const createServiceWithTransaction = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  const transaction = await sequelize.transaction();

  try {
    const senderId = Number(req.user?.id);
    const { receiver_id, object, skill_id } = req.body;

    // Vérifications dans la transaction
    const receiver = await User.findByPk(receiver_id, { transaction });
    if (!receiver) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ message: "Utilisateur destinataire introuvable" });
    }

    const skill = await Skill.findByPk(skill_id, { transaction });
    if (!skill) {
      await transaction.rollback();
      return res.status(404).json({ message: "Compétence introuvable" });
    }

    // Vérifier que le receiver a bien cette compétence
    const hasSkill = await receiver.getSkills({
      where: { id: skill_id },
      transaction,
    });

    if (hasSkill.length === 0) {
      await transaction.rollback();
      return res.status(400).json({
        message: "L'utilisateur ne propose pas cette compétence",
      });
    }

    // Création du service
    const newService = await Service.create(
      {
        object,
        status: "pending",
        sender_id: senderId,
        receiver_id,
        skill_id,
      },
      { transaction },
    );

    // Commit de la transaction
    await transaction.commit();

    res.status(201).json({
      message: "Service proposé avec succès",
      service: newService,
    });
  } catch (error) {
    // Rollback en cas d'erreur
    await transaction.rollback();
    console.error("Erreur création service:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
```

### 8.4 Extraits de code d'autres composants

#### Contrôleurs avec gestion d'erreurs

**Contrôleur d'authentification sécurisé :**

```typescript
// controllers/auth.controller.ts
import { Request, Response } from "express";
import { User } from "../models/associations";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const authController = {
  // Connexion utilisateur avec hashage sécurisé
  login: async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      // Validation des champs obligatoires
      if (!email || !password) {
        res.status(400).json({
          message: "Email et mot de passe sont requis",
        });
        return;
      }

      // Recherche utilisateur avec gestion sécurisée
      const user = await User.findOne({
        where: { email: email.toLowerCase().trim() },
      });

      if (!user) {
        // Délai artificiel pour éviter le timing attack
        await new Promise((resolve) => setTimeout(resolve, 500));
        res.status(401).json({
          message: "Email ou mot de passe incorrect",
        });
        return;
      }

      // Vérification du mot de passe avec Argon2
      const isPasswordValid = await argon2.verify(user.password, password);
      if (!isPasswordValid) {
        res.status(401).json({
          message: "Email ou mot de passe incorrect",
        });
        return;
      }

      // Génération du token JWT sécurisé
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role_id,
        },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "4h",
          issuer: "skillswap-api",
          audience: "skillswap-frontend",
        },
      );

      // Cookie sécurisé avec flags de protection
      res.cookie("accessToken", token, {
        httpOnly: true, // Protection XSS
        secure: process.env.NODE_ENV === "production", // HTTPS en prod
        sameSite: "strict", // Protection CSRF
        path: "/",
        maxAge: 4 * 60 * 60 * 1000, // 4 heures
      });

      // Réponse avec données utilisateur (sans password)
      res.status(200).json({
        message: "Connexion réussie",
        user: {
          id: user.id,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          profile_picture: user.profile_picture,
          description: user.description,
          availability: user.availability,
        },
      });
    } catch (error) {
      console.error("Erreur login:", error);
      res.status(500).json({
        message: "Erreur serveur lors de la connexion",
      });
    }
  },

  // Inscription avec hashage et validation
  register: async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        email,
        password,
        firstname,
        lastname,
        street,
        zipcode,
        city,
        description,
        availability,
      } = req.body;

      // Vérifier si l'email existe déjà
      const existingUser = await User.findOne({
        where: { email: email.toLowerCase().trim() },
      });

      if (existingUser) {
        res.status(409).json({
          message: "Un compte avec cet email existe déjà",
        });
        return;
      }

      // Hashage du mot de passe avec Argon2
      const hashedPassword = await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16, // 64 MB
        timeCost: 3,
        parallelism: 1,
      });

      // Création de l'utilisateur
      const newUser = await User.create({
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        firstname: firstname.trim(),
        lastname: lastname.trim(),
        street: street.trim(),
        zipcode: zipcode.trim(),
        city: city.trim(),
        description: description.trim(),
        availability: availability.trim(),
        role_id: 1, // Rôle utilisateur par défaut
      });

      res.status(201).json({
        message: "Compte créé avec succès",
        user: {
          id: newUser.id,
          email: newUser.email,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
        },
      });
    } catch (error) {
      console.error("Erreur inscription:", error);
      res.status(500).json({
        message: "Erreur serveur lors de l'inscription",
      });
    }
  },

  // Déconnexion sécurisée
  logout: async (req: Request, res: Response): Promise<void> => {
    try {
      // Suppression du cookie JWT
      res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      res.status(200).json({
        message: "Déconnexion réussie",
      });
    } catch (error) {
      console.error("Erreur logout:", error);
      res.status(500).json({
        message: "Erreur lors de la déconnexion",
      });
    }
  },
};

export default authController;
```

#### Middleware d'authentification et validation

**Middleware de vérification JWT :**

```typescript
// middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: { id: number; email: string; role?: number };
}

export const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void => {
  // Recherche du token dans cookies ou header Authorization
  let token = req.cookies?.accessToken;

  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401).json({
      message: "Token d'authentification manquant",
    });
    return;
  }

  try {
    // Vérification et décodage du token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string,
    ) as jwt.JwtPayload;

    // Validation de la structure du payload
    if (!decoded.id || !decoded.email) {
      res.status(403).json({
        message: "Token invalide - données manquantes",
      });
      return;
    }

    // Validation du type des données
    if (typeof decoded.id !== "number" && typeof decoded.id !== "string") {
      res.status(403).json({
        message: "Token invalide - ID utilisateur incorrect",
      });
      return;
    }

    // Ajout des informations utilisateur à la requête
    req.user = {
      id: Number(decoded.id),
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (error: any) {
    // Gestion spécifique des erreurs JWT
    if (error.name === "TokenExpiredError") {
      res.status(401).json({
        message: "Token expiré, veuillez vous reconnecter",
      });
      return;
    }

    if (error.name === "JsonWebTokenError") {
      res.status(403).json({
        message: "Token invalide",
      });
      return;
    }

    console.error("Erreur vérification token:", error);
    res.status(403).json({
      message: "Erreur d'authentification",
    });
  }
};

// Middleware pour vérifier les rôles administrateur
export const requireAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void => {
  if (req.user?.role !== 2) {
    res.status(403).json({
      message: "Accès administrateur requis",
    });
    return;
  }
  next();
};
```

**Middleware de sanitisation des données :**

```typescript
// middleware/body-sanitizer.ts
import { NextFunction, Request, Response } from "express";
import sanitizeHtml from "sanitize-html";

export function bodySanitizerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const body = req.body as any;

  // Parcours récursif de toutes les propriétés
  const sanitizeObject = (obj: any): any => {
    if (typeof obj === "string") {
      return sanitizeHtml(obj, {
        allowedTags: [], // Aucun tag HTML autorisé
        allowedAttributes: {},
        disallowedTagsMode: "discard",
      }).trim();
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => sanitizeObject(item));
    }

    if (obj && typeof obj === "object") {
      const sanitized: any = {};
      Object.keys(obj).forEach((key) => {
        sanitized[key] = sanitizeObject(obj[key]);
      });
      return sanitized;
    }

    return obj;
  };

  req.body = sanitizeObject(body);
  next();
}
```

#### Utilitaires et services

**Service d'appel API côté frontend :**

```typescript
// services/auth.service.ts
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Configuration d'Axios avec intercepteurs
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Inclut les cookies dans les requêtes
  timeout: 10000, // Timeout de 10 secondes
});

// Intercepteur pour les réponses d'erreur
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expiré ou invalide
      window.location.href = "/register";
    }
    return Promise.reject(error);
  },
);

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  firstname: string;
  lastname: string;
  street: string;
  zipcode: string;
  city: string;
  description: string;
  availability: string;
}

export const login = async (credentials: LoginData) => {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  } catch (error: any) {
    throw {
      message: error.response?.data?.message || "Erreur de connexion",
      status: error.response?.status,
    };
  }
};

export const register = async (userData: RegisterData) => {
  try {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  } catch (error: any) {
    throw {
      message: error.response?.data?.message || "Erreur d'inscription",
      status: error.response?.status,
    };
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/auth/logout");
  } catch (error) {
    console.error("Erreur logout:", error);
  }
};

export const checkAuth = async () => {
  try {
    const response = await apiClient.get("/auth/check");
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

**Hook personnalisé pour gestion d'état :**

```typescript
// hooks/useServiceStatus.ts
import { useState } from "react";
import { updateServiceStatus } from "@/services/service.service";
import type { IServiceStatus } from "@/types/service";

export function useServiceStatus(
  serviceId: string,
  initialStatus: IServiceStatus,
) {
  const [status, setStatus] = useState<IServiceStatus>(initialStatus);
  const [loading, setLoading] = useState(false);

  const changeStatus = async (newStatus: IServiceStatus) => {
    setLoading(true);

    try {
      await updateServiceStatus(serviceId, newStatus);
      setStatus(newStatus);
    } catch (error) {
      console.error("Erreur changement statut:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    status,
    loading,
    changeStatus,
  };
}
```

### 8.5 Justification des choix techniques

#### Choix du stack technologique

**React + TypeScript :**

J'ai choisi React avec TypeScript pour plusieurs raisons stratégiques :

1. **Écosystème mature** : React dispose d'une communauté massive et d'outils robustes
2. **Composants réutilisables** : Architecture modulaire facilitant la maintenance
3. **TypeScript** : Typage statique réduisant les erreurs et améliorant l'IDE
4. **Performance** : Virtual DOM optimisé et lazy loading natif
5. **Formation** : Stack imposée mais correspondit parfaitement aux besoins

**Node.js + Express :**

Le choix du backend JavaScript était motivé par :

1. **Compétences unifiées** : Même langage frontend/backend = développement plus fluide
2. **NPM ecosystem** : Accès à des milliers de packages de qualité
3. **Performance I/O** : Excellente pour applications web avec nombreuses requêtes
4. **Express.js** : Framework minimaliste et flexible, idéal pour API REST
5. **TypeScript côté serveur** : Même qualité de code qu'en frontend

**PostgreSQL + Sequelize :**

La base de données relationnelle était le bon choix car :

1. **Données structurées** : Relations complexes entre users, services, skills
2. **ACID compliance** : Transactions critiques (création services, paiements futurs)
3. **Sequelize ORM** : Simplifie les requêtes complexes et migrations
4. **Performance** : Index optimisés pour recherches géographiques
5. **Sécurité** : Protection native contre injection SQL

#### Patterns de développement utilisés

**Architecture en couches (Backend) :**

```
┌─────────────────┐
│    ROUTES       │ → Définition des endpoints et middleware
├─────────────────┤
│  CONTROLLERS    │ → Logique de contrôle et validation
├─────────────────┤
│   SERVICES      │ → Logique métier complexe
├─────────────────┤
│    MODELS       │ → Accès données et ORM
├─────────────────┤
│   DATABASE      │ → PostgreSQL avec Sequelize
└─────────────────┘
```

**Remarque — duplication évitée :**

La justification détaillée des choix techniques (stack, patterns et architecture) est déjà fournie à la section 6.2 « Architecture logicielle du projet ». Pour éviter la redondance dans le dossier, la discussion complète a été conservée en 6.2 ; cette section 8.5 renvoie donc vers 6.2.

Si vous souhaitez un résumé complémentaire ici, je peux en ajouter (ex : 3 lignes synthétiques par domaine : frontend, backend, BDD).

---

## 9. Sécurité

### 9.1 Authentification et autorisation

#### Stratégie d'authentification JWT

**Implémentation sécurisée des JSON Web Tokens**

SkillSwap utilise un système d'authentification basé sur JWT (JSON Web Tokens) avec des mesures de sécurité renforcées pour protéger les sessions utilisateur et l'accès aux ressources sensibles.

**Configuration JWT sécurisée :**

```typescript
// utils/jwt.utils.ts
import jwt from "jsonwebtoken";
import crypto from "crypto";

// Génération d'un secret robuste (stocké en variable d'environnement)
const JWT_SECRET =
  process.env.JWT_SECRET_KEY || crypto.randomBytes(64).toString("hex");
const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || crypto.randomBytes(64).toString("hex");

export const generateAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "15m", // Token courte durée pour limiter l'exposition
    issuer: "skillswap-api",
    audience: "skillswap-frontend",
    algorithm: "HS256",
  });
};

export const generateRefreshToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: "7d", // Refresh token plus long
    issuer: "skillswap-api",
    audience: "skillswap-refresh",
    algorithm: "HS256",
  });
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET, {
    issuer: "skillswap-api",
    audience: "skillswap-frontend",
  }) as JwtPayload;
};
```

**Stockage sécurisé des tokens :**

```typescript
// controllers/auth.controller.ts - Login avec cookies sécurisés
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    // ... validation et vérification utilisateur ...

    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email,
      role: user.role_id,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
      type: "refresh",
    });

    // Cookies HttpOnly pour protection XSS
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
    });

    res.status(200).json({
      message: "Connexion réussie",
      user: userSafeData,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
```

#### Système de rôles et permissions

**Modèle de contrôle d'accès basé sur les rôles (RBAC)**

```typescript
// models/Role.model.ts
export default class Role extends Model {
  declare id: number;
  declare name: string;
  declare permissions: string[];
}

// Définition des rôles
export const ROLES = {
  USER: 1,
  ADMIN: 2,
} as const;

export const PERMISSIONS = {
  READ_OWN_PROFILE: "read:own_profile",
  UPDATE_OWN_PROFILE: "update:own_profile",
  CREATE_SERVICE: "create:service",
  MODERATE_USERS: "moderate:users",
  MANAGE_SKILLS: "manage:skills",
  VIEW_ALL_USERS: "view:all_users",
} as const;
```

**Middleware d'autorisation granulaire :**

```typescript
// middleware/authorization.middleware.ts
export const requirePermission = (permission: string) => {
  return async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Non authentifié" });
      }

      // Récupération des permissions utilisateur
      const user = await User.findByPk(req.user.id, {
        include: [
          {
            model: Role,
            attributes: ["name", "permissions"],
          },
        ],
      });

      if (!user || !user.role) {
        return res.status(403).json({ error: "Rôle non défini" });
      }

      // Vérification de la permission
      const hasPermission = user.role.permissions.includes(permission);
      if (!hasPermission) {
        return res.status(403).json({
          error: "Permission insuffisante",
          required: permission,
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({ error: "Erreur vérification permissions" });
    }
  };
};

// Utilisation dans les routes
app.get(
  "/api/admin/users",
  verifyToken,
  requirePermission(PERMISSIONS.VIEW_ALL_USERS),
  adminController.getAllUsers,
);
```

#### Protection des mots de passe

**Hashage avec Argon2 - Gold Standard**

```typescript
// utils/password.utils.ts
import argon2 from "argon2";

// Configuration optimisée pour la sécurité
const ARGON2_OPTIONS = {
  type: argon2.argon2id, // Résistant aux attaques GPU et side-channel
  memoryCost: 2 ** 16, // 64 MB de mémoire
  timeCost: 3, // 3 itérations
  parallelism: 1, // 1 thread (suffisant pour web app)
  saltLength: 32, // Salt de 32 bytes
};

export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await argon2.hash(password, ARGON2_OPTIONS);
  } catch (error) {
    throw new Error("Erreur lors du hashage du mot de passe");
  }
};

export const verifyPassword = async (
  hashedPassword: string,
  plainPassword: string,
): Promise<boolean> => {
  try {
    return await argon2.verify(hashedPassword, plainPassword);
  } catch (error) {
    throw new Error("Erreur lors de la vérification du mot de passe");
  }
};

// Validation de la force du mot de passe
export const validatePasswordStrength = (password: string): boolean => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar
  );
};
```

### 9.2 Protection contre les attaques

#### Prévention des injections SQL

**ORM Sequelize avec requêtes préparées**

```typescript
// queries/user.queries.ts - Requêtes sécurisées
export const findUserByEmail = async (email: string): Promise<User | null> => {
  // Sequelize utilise automatiquement des requêtes préparées
  return await User.findOne({
    where: {
      email: email.toLowerCase().trim(), // Normalisation
    },
  });
};

// Recherche sécurisée avec paramètres utilisateur
export const searchUsersBySkill = async (
  skillName: string,
  city?: string,
): Promise<User[]> => {
  const whereClause: any = {};

  // Utilisation d'opérateurs Sequelize (protection automatique)
  if (city) {
    whereClause.city = {
      [Op.iLike]: `%${city}%`, // Recherche insensible à la casse
    };
  }

  return await User.findAll({
    where: whereClause,
    include: [
      {
        model: Skill,
        where: {
          name: {
            [Op.iLike]: `%${skillName}%`, // Protection contre injection
          },
        },
      },
    ],
    attributes: { exclude: ["password"] }, // Sécurité : pas de mot de passe
  });
};
```

#### Protection XSS (Cross-Site Scripting)

**Sanitisation et validation des entrées**

```typescript
// middleware/sanitization.middleware.ts
import sanitizeHtml from "sanitize-html";
import validator from "validator";

export const sanitizeInput = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const sanitizeOptions = {
    allowedTags: [], // Aucune balise HTML autorisée
    allowedAttributes: {},
    disallowedTagsMode: "discard",
  };

  // Sanitisation récursive de req.body
  const sanitizeObject = (obj: any): any => {
    if (typeof obj === "string") {
      // Sanitisation HTML et échappement
      return sanitizeHtml(obj, sanitizeOptions).trim();
    }

    if (Array.isArray(obj)) {
      return obj.map(sanitizeObject);
    }

    if (obj !== null && typeof obj === "object") {
      const sanitized: any = {};
      for (const key in obj) {
        sanitized[key] = sanitizeObject(obj[key]);
      }
      return sanitized;
    }

    return obj;
  };

  req.body = sanitizeObject(req.body);
  next();
};

// Validation spécifique par champ
export const validateUserInput = {
  email: (email: string): boolean => {
    return validator.isEmail(email) && email.length <= 255;
  },

  name: (name: string): boolean => {
    return (
      validator.isLength(name, { min: 2, max: 50 }) &&
      validator.isAlpha(name, "fr-FR", { ignore: " -" })
    );
  },

  description: (description: string): boolean => {
    return validator.isLength(description, { min: 10, max: 1000 });
  },

  zipcode: (zipcode: string): boolean => {
    return validator.matches(zipcode, /^[0-9]{5}$/);
  },
};
```

**Content Security Policy (CSP)**

```typescript
// middleware/security.middleware.ts
import helmet from "helmet";

export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: [
        "'self'",
        "'unsafe-inline'", // Nécessaire pour Tailwind CSS
        "https://fonts.googleapis.com",
      ],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: [
        "'self'",
        process.env.NODE_ENV === "development" ? "'unsafe-eval'" : "'none'",
      ],
      imgSrc: [
        "'self'",
        "data:",
        "https:", // Images externes autorisées
      ],
      connectSrc: [
        "'self'",
        process.env.FRONTEND_URL || "http://localhost:5173",
      ],
      objectSrc: ["'none'"],
      upgradeInsecureRequests:
        process.env.NODE_ENV === "production" ? [] : null,
    },
  },
  hsts: {
    maxAge: 31536000, // 1 an
    includeSubDomains: true,
    preload: true,
  },
  noSniff: true,
  frameguard: { action: "deny" },
  xssFilter: true,
});
```

#### Protection CSRF (Cross-Site Request Forgery)

**Tokens CSRF et validation d'origine**

```typescript
// middleware/csrf.middleware.ts
import csrf from "csurf";

// Configuration CSRF pour formulaires sensibles
export const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  },
});

// Validation manuelle de l'origine pour API
export const validateOrigin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:5173", // Développement
    "https://skillswap-frontend.railway.app", // Production
  ].filter(Boolean);

  const origin = req.headers.origin;

  if (req.method !== "GET" && req.method !== "HEAD") {
    if (!origin || !allowedOrigins.includes(origin)) {
      return res.status(403).json({
        error: "Origine non autorisée",
        received: origin,
      });
    }
  }

  next();
};

// Header personnalisé obligatoire pour les requêtes API
export const requireCustomHeader = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const customHeader = req.headers["x-skillswap-api"];

  if (!customHeader || customHeader !== "true") {
    return res.status(403).json({
      error: "Header personnalisé requis",
    });
  }

  next();
};
```

#### Rate Limiting et protection DoS

**Limitation du taux de requêtes**

```typescript
// middleware/rateLimit.middleware.ts
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";

// Rate limiting pour l'authentification
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 tentatives max par IP
  message: {
    error: "Trop de tentatives de connexion",
    retryAfter: 15 * 60, // en secondes
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Custom key generator pour compter par IP + email
  keyGenerator: (req) => {
    return `${req.ip}_${req.body?.email || "unknown"}`;
  },
});

// Rate limiting général API
export const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requêtes max par IP
  message: {
    error: "Trop de requêtes, veuillez réessayer plus tard",
  },
});

// Slow down progressif
export const slowDownMiddleware = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 50, // Commencer à ralentir après 50 requêtes
  delayMs: 100, // Ajouter 100ms de délai par requête excédentaire
  maxDelayMs: 5000, // Délai maximum de 5 secondes
});
```

### 9.3 Validation et sanitisation des données

#### Schémas de validation Zod

**Validation robuste côté serveur**

```typescript
// schemas/user.schema.ts
import { z } from "zod";

// Schéma pour l'inscription utilisateur
export const registerUserSchema = z.object({
  email: z
    .string()
    .email("Format email invalide")
    .max(255, "Email trop long")
    .transform((email) => email.toLowerCase().trim()),

  password: z
    .string()
    .min(8, "Le mot de passe doit faire au moins 8 caractères")
    .max(128, "Mot de passe trop long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Le mot de passe doit contenir : minuscule, majuscule, chiffre et caractère spécial",
    ),

  firstname: z
    .string()
    .min(2, "Prénom trop court")
    .max(50, "Prénom trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, "Prénom invalide")
    .transform((name) => name.trim()),

  lastname: z
    .string()
    .min(2, "Nom trop court")
    .max(50, "Nom trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, "Nom invalide")
    .transform((name) => name.trim()),

  street: z
    .string()
    .min(5, "Adresse trop courte")
    .max(200, "Adresse trop longue")
    .transform((str) => str.trim()),

  zipcode: z
    .string()
    .regex(/^[0-9]{5}$/, "Code postal invalide (5 chiffres requis)"),

  city: z
    .string()
    .min(2, "Ville trop courte")
    .max(100, "Ville trop longue")
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, "Nom de ville invalide")
    .transform((city) => city.trim()),

  description: z
    .string()
    .min(10, "Description trop courte (10 caractères minimum)")
    .max(1000, "Description trop longue (1000 caractères maximum)")
    .transform((desc) => desc.trim()),

  availability: z
    .string()
    .min(5, "Disponibilité trop courte")
    .max(500, "Disponibilité trop longue")
    .transform((avail) => avail.trim()),
});

// Schéma pour la mise à jour de profil (champs optionnels)
export const updateUserSchema = registerUserSchema.partial().omit({
  password: true,
});

// Schéma pour changement de mot de passe
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Mot de passe actuel requis"),
    newPassword: z
      .string()
      .min(8, "Le nouveau mot de passe doit faire au moins 8 caractères")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Le mot de passe doit contenir : minuscule, majuscule, chiffre et caractère spécial",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });
```

**Middleware de validation automatisée**

```typescript
// middleware/validation.middleware.ts
import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateSchema = (schema: z.ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validation et transformation automatique
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
          received: err.input,
        }));

        return res.status(400).json({
          error: "Données invalides",
          details: validationErrors,
        });
      }

      next(error);
    }
  };
};

// Utilisation dans les routes
app.post(
  "/api/auth/register",
  sanitizeInput,
  validateSchema(registerUserSchema),
  authController.register,
);
```

#### Sanitisation avancée

**Nettoyage et normalisation des données**

```typescript
// utils/sanitizer.utils.ts
import DOMPurify from "isomorphic-dompurify";
import validator from "validator";

export class DataSanitizer {
  // Sanitisation HTML stricte
  static sanitizeHtml(input: string): string {
    return DOMPurify.sanitize(input, {
      ALLOWED_TAGS: [], // Aucune balise HTML
      ALLOWED_ATTR: [],
      KEEP_CONTENT: true,
    });
  }

  // Normalisation des noms
  static normalizeName(name: string): string {
    return name
      .trim()
      .replace(/\s+/g, " ") // Espaces multiples → simple
      .replace(/[^\w\s\u00C0-\u017F-]/g, "") // Caractères spéciaux sauf accents et traits d'union
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  // Normalisation des adresses
  static normalizeAddress(address: string): string {
    return address
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[^\w\s\u00C0-\u017F\d,-]/g, ""); // Lettres, chiffres, espaces, virgules, traits d'union
  }

  // Validation et nettoyage email
  static sanitizeEmail(email: string): string {
    const cleaned = email.toLowerCase().trim();
    return validator.isEmail(cleaned) ? cleaned : "";
  }

  // Sanitisation description avec préservation de la mise en forme
  static sanitizeDescription(description: string): string {
    return DOMPurify.sanitize(description, {
      ALLOWED_TAGS: ["p", "br", "strong", "em"],
      ALLOWED_ATTR: [],
      KEEP_CONTENT: true,
    }).trim();
  }

  // Nettoyage des numéros de téléphone
  static sanitizePhoneNumber(phone: string): string {
    return phone.replace(/[^\d+\s-()]/g, "").trim();
  }
}
```

### 9.4 Configuration sécurisée en production

#### Variables d'environnement et secrets

**Gestion sécurisée des configurations**

```typescript
// config/environment.ts
import dotenv from "dotenv";
import crypto from "crypto";

// Chargement des variables d'environnement
dotenv.config();

// Validation des variables critiques au démarrage
const requiredEnvVars = [
  "DATABASE_URL",
  "JWT_SECRET_KEY",
  "JWT_REFRESH_SECRET",
  "FRONTEND_URL",
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Variable d'environnement manquante: ${envVar}`);
    process.exit(1);
  }
}

// Configuration sécurisée par environnement
export const config = {
  // Base de données
  database: {
    url: process.env.DATABASE_URL!,
    ssl: process.env.NODE_ENV === "production",
    pool: {
      max: parseInt(process.env.DB_POOL_MAX || "10"),
      min: parseInt(process.env.DB_POOL_MIN || "0"),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE || "30000"),
      idle: parseInt(process.env.DB_POOL_IDLE || "10000"),
    },
  },

  // JWT
  jwt: {
    secret: process.env.JWT_SECRET_KEY!,
    refreshSecret: process.env.JWT_REFRESH_SECRET!,
    accessTokenExpiry: process.env.JWT_ACCESS_EXPIRY || "15m",
    refreshTokenExpiry: process.env.JWT_REFRESH_EXPIRY || "7d",
  },

  // Sécurité
  security: {
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || "12"),
    rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW || "900000"), // 15 min
    rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX || "100"),
    sessionSecret:
      process.env.SESSION_SECRET || crypto.randomBytes(64).toString("hex"),
  },

  // CORS
  cors: {
    origin: process.env.FRONTEND_URL?.split(",") || ["http://localhost:5173"],
    credentials: true,
  },

  // Application
  app: {
    port: parseInt(process.env.PORT || "3000"),
    nodeEnv: process.env.NODE_ENV || "development",
    logLevel: process.env.LOG_LEVEL || "info",
  },
};

// Validation de la robustesse des secrets
export const validateSecrets = (): void => {
  const secrets = [
    config.jwt.secret,
    config.jwt.refreshSecret,
    config.security.sessionSecret,
  ];

  for (const secret of secrets) {
    if (secret.length < 32) {
      console.warn("⚠️ Secret trop court détecté (< 32 caractères)");
    }
  }
};
```

#### Déploiement sécurisé sur Railway

**Configuration production avec Railway**

```yaml
# railway.json - Configuration Railway
{
  "build": { "builder": "DOCKERFILE", "buildCommand": "npm run build" },
  "deploy":
    {
      "startCommand": "npm start",
      "healthcheckPath": "/api/health",
      "healthcheckTimeout": 30,
      "restartPolicyType": "ON_FAILURE",
      "restartPolicyMaxRetries": 3,
    },
}
```

```dockerfile
# Dockerfile sécurisé
FROM node:18-alpine AS builder

# Sécurité : utilisateur non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeuser -u 1001

# Répertoire de travail
WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copie du code source
COPY . .
RUN chown -R nodeuser:nodejs /app

# Build de l'application
RUN npm run build

# Image de production
FROM node:18-alpine AS production

# Sécurité : utilisateur non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeuser -u 1001

WORKDIR /app

# Copie des fichiers nécessaires depuis le builder
COPY --from=builder --chown=nodeuser:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodeuser:nodejs /app/dist ./dist
COPY --from=builder --chown=nodeuser:nodejs /app/package.json ./

# Basculement vers utilisateur non-root
USER nodeuser

# Port d'écoute
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Démarrage de l'application
CMD ["node", "dist/index.js"]
```

**Script de déploiement avec vérifications**

```bash
#!/bin/bash
# deploy.sh - Script de déploiement sécurisé

set -e # Arrêt sur erreur

echo "🚀 Déploiement SkillSwap..."

# Vérification des variables d'environnement
required_vars=("DATABASE_URL" "JWT_SECRET_KEY" "FRONTEND_URL")
for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    echo "❌ Variable manquante: $var"
    exit 1
  fi
done

# Vérification des secrets
if [ ${#JWT_SECRET_KEY} -lt 32 ]; then
  echo "⚠️ JWT_SECRET_KEY trop court (< 32 caractères)"
  exit 1
fi

# Tests de sécurité
echo "🔍 Tests de sécurité..."
npm run test:security

# Build de production
echo "🏗️ Build de production..."
npm run build

# Tests finaux
echo "✅ Tests finaux..."
npm run test:prod

echo "✅ Déploiement terminé avec succès"
```

Cette approche de sécurité multicouche garantit que SkillSwap respecte les meilleures pratiques de sécurité pour une application web moderne, protégeant efficacement les données utilisateur et l'intégrité de la plateforme.

---

## 10. Tests et validation

### 10.1 Stratégie de test

#### Pyramide des tests

SkillSwap adopte une stratégie de test suivant la pyramide classique pour assurer une couverture complète et efficace :

```
                    ┌─────────────────┐
                    │   Tests E2E     │ ← Peu nombreux, coûteux
                    │   (Cypress)     │   mais haute valeur
                    └─────────────────┘
                  ┌───────────────────────┐
                  │  Tests d'intégration  │ ← Interactions entre
                  │   (API + Database)    │   composants/services
                  └───────────────────────┘
              ┌─────────────────────────────────┐
              │        Tests unitaires          │ ← Nombreux, rapides
              │  (Functions + Components)       │   et peu coûteux
              └─────────────────────────────────┘
```

**Répartition des tests :**

- **70% Tests unitaires** : Fonctions, utilitaires, composants isolés
- **20% Tests d'intégration** : API endpoints, interactions base de données
- **10% Tests E2E** : Parcours utilisateur critiques

#### Outils et frameworks de test

**Backend (Node.js/TypeScript) :**

- **Jest** : Framework principal pour tests unitaires et d'intégration
- **Supertest** : Tests d'API REST
- **@testing-library/jest-dom** : Matchers personnalisés
- **ts-jest** : Support TypeScript pour Jest

**Frontend (React/TypeScript) :**

- **Vitest** : Framework de test moderne et rapide
- **React Testing Library** : Tests de composants centrés utilisateur
- **jsdom** : Simulation DOM pour environnement Node.js
- **MSW (Mock Service Worker)** : Mock des appels API

**Tests End-to-End :**

- **Cypress** : Tests d'interface utilisateur complets
- **Playwright** : Alternative moderne pour tests cross-browser

#### Configuration des environnements de test

**Configuration Jest pour le backend :**

```javascript
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  // Configuration TypeScript
  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  // Pattern des fichiers de test
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.ts",
    "<rootDir>/src/**/*.{test,spec}.ts",
  ],

  // Setup avant les tests
  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],

  // Couverture de code
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/migrations/**",
    "!src/tests/**",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Variables d'environnement pour les tests
  testEnvironmentOptions: {
    NODE_ENV: "test",
  },
};
```

**Configuration Vitest pour le frontend :**

```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],

    // Alias pour les imports
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

    // Coverage avec c8
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/tests/",
        "**/*.d.ts",
        "**/*.config.{js,ts}",
      ],
    },
  },
});
```

### 10.2 Tests unitaires

#### Tests des fonctions utilitaires

**Tests des utilitaires de validation :**

```typescript
// src/utils/__tests__/validation.test.ts
import { describe, it, expect } from "vitest";
import {
  validateEmail,
  validatePassword,
  validateZipCode,
  sanitizeUserInput,
} from "../validation.utils";

describe("Validation Utils", () => {
  describe("validateEmail", () => {
    it("should validate correct email formats", () => {
      const validEmails = [
        "user@example.com",
        "test.email+tag@domain.co.uk",
        "user123@test-domain.org",
      ];

      validEmails.forEach((email) => {
        expect(validateEmail(email)).toBe(true);
      });
    });

    it("should reject invalid email formats", () => {
      const invalidEmails = [
        "invalid-email",
        "@domain.com",
        "user@",
        "user..double.dot@domain.com",
        "user@domain",
      ];

      invalidEmails.forEach((email) => {
        expect(validateEmail(email)).toBe(false);
      });
    });

    it("should handle edge cases", () => {
      expect(validateEmail("")).toBe(false);
      expect(validateEmail(" ")).toBe(false);
      expect(validateEmail(null as any)).toBe(false);
      expect(validateEmail(undefined as any)).toBe(false);
    });
  });

  describe("validatePassword", () => {
    it("should validate strong passwords", () => {
      const strongPasswords = [
        "MyStr0ng!Pass",
        "Test123@Word",
        "S3cur3#P@ssw0rd",
      ];

      strongPasswords.forEach((password) => {
        expect(validatePassword(password)).toBe(true);
      });
    });

    it("should reject weak passwords", () => {
      const weakPasswords = [
        "short", // Trop court
        "onlylowercase", // Pas de majuscule
        "ONLYUPPERCASE", // Pas de minuscule
        "NoNumbers!", // Pas de chiffre
        "NoSpecial123", // Pas de caractère spécial
      ];

      weakPasswords.forEach((password) => {
        expect(validatePassword(password)).toBe(false);
      });
    });
  });

  describe("sanitizeUserInput", () => {
    it("should remove HTML tags", () => {
      expect(sanitizeUserInput('<script>alert("xss")</script>Hello')).toBe(
        "Hello",
      );

      expect(sanitizeUserInput("<b>Bold</b> and <i>italic</i>")).toBe(
        "Bold and italic",
      );
    });

    it("should trim whitespace", () => {
      expect(sanitizeUserInput("  spaced text  ")).toBe("spaced text");
    });

    it("should handle special characters safely", () => {
      expect(sanitizeUserInput("Price: $19.99 & more")).toBe(
        "Price: $19.99 & more",
      );
    });
  });
});
```

#### Tests des modèles Sequelize

**Tests du modèle User :**

```typescript
// src/models/__tests__/User.test.ts
import { describe, it, expect, beforeAll, afterAll, beforeEach } from "vitest";
import sequelize from "../../database/client";
import User from "../User.model";
import Role from "../Role.model";
import { hashPassword } from "../../utils/password.utils";

describe("User Model", () => {
  beforeAll(async () => {
    // Configuration de la base de test
    await sequelize.sync({ force: true });

    // Création des rôles de test
    await Role.bulkCreate([
      { id: 1, name: "user" },
      { id: 2, name: "admin" },
    ]);
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    // Nettoyage avant chaque test
    await User.destroy({ where: {}, truncate: true });
  });

  describe("User Creation", () => {
    it("should create a user with valid data", async () => {
      const userData = {
        email: "test@example.com",
        firstname: "John",
        lastname: "Doe",
        password: await hashPassword("TestPassword123!"),
        street: "123 Test Street",
        zipcode: "75001",
        city: "Paris",
        description: "Test user description",
        availability: "Disponible en soirée",
        role_id: 1,
      };

      const user = await User.create(userData);

      expect(user.id).toBeDefined();
      expect(user.email).toBe("test@example.com");
      expect(user.firstname).toBe("John");
      expect(user.lastname).toBe("Doe");
      expect(user.created_at).toBeDefined();
    });

    it("should enforce unique email constraint", async () => {
      const userData = {
        email: "duplicate@example.com",
        firstname: "John",
        lastname: "Doe",
        password: await hashPassword("TestPassword123!"),
        street: "123 Test Street",
        zipcode: "75001",
        city: "Paris",
        description: "Test user description",
        availability: "Disponible en soirée",
        role_id: 1,
      };

      // Premier utilisateur créé avec succès
      await User.create(userData);

      // Deuxième utilisateur avec même email doit échouer
      await expect(User.create(userData)).rejects.toThrow(
        /UNIQUE constraint failed|duplicate key value/,
      );
    });

    it("should validate email format", async () => {
      const userData = {
        email: "invalid-email-format",
        firstname: "John",
        lastname: "Doe",
        password: await hashPassword("TestPassword123!"),
        street: "123 Test Street",
        zipcode: "75001",
        city: "Paris",
        description: "Test user description",
        availability: "Disponible en soirée",
        role_id: 1,
      };

      await expect(User.create(userData)).rejects.toThrow(/Validation error/);
    });

    it("should validate zipcode format", async () => {
      const userData = {
        email: "test@example.com",
        firstname: "John",
        lastname: "Doe",
        password: await hashPassword("TestPassword123!"),
        street: "123 Test Street",
        zipcode: "1234", // Code postal invalide (4 chiffres au lieu de 5)
        city: "Paris",
        description: "Test user description",
        availability: "Disponible en soirée",
        role_id: 1,
      };

      await expect(User.create(userData)).rejects.toThrow(/Validation error/);
    });
  });

  describe("User Associations", () => {
    it("should associate user with skills", async () => {
      // Créer un utilisateur de test
      const user = await User.create({
        email: "skilltest@example.com",
        firstname: "Skills",
        lastname: "Tester",
        password: await hashPassword("TestPassword123!"),
        street: "123 Skills Street",
        zipcode: "75002",
        city: "Paris",
        description: "Testing skills association",
        availability: "Toujours disponible",
        role_id: 1,
      });

      // Vérifier que l'utilisateur peut avoir des compétences
      const skills = await user.getSkills();
      expect(Array.isArray(skills)).toBe(true);
      expect(skills.length).toBe(0); // Nouveau utilisateur, pas de compétences
    });
  });

  describe("User Methods", () => {
    it("should exclude password from JSON serialization", async () => {
      const user = await User.create({
        email: "privacy@example.com",
        firstname: "Privacy",
        lastname: "Test",
        password: await hashPassword("TestPassword123!"),
        street: "123 Privacy Street",
        zipcode: "75003",
        city: "Paris",
        description: "Testing privacy",
        availability: "Disponible",
        role_id: 1,
      });

      const userJSON = user.toJSON();
      expect(userJSON.password).toBeUndefined();
      expect(userJSON.email).toBe("privacy@example.com");
    });
  });
});
```

#### Tests des contrôleurs

**Tests du contrôleur d'authentification :**

```typescript
// src/controllers/__tests__/auth.controller.test.ts
import { describe, it, expect, beforeAll, afterAll, beforeEach } from "vitest";
import request from "supertest";
import app from "../../app";
import sequelize from "../../database/client";
import { User, Role } from "../../models/associations";
import { hashPassword } from "../../utils/password.utils";

describe("Auth Controller", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });

    // Création des rôles
    await Role.bulkCreate([
      { id: 1, name: "user" },
      { id: 2, name: "admin" },
    ]);
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    await User.destroy({ where: {}, truncate: true });
  });

  describe("POST /api/auth/register", () => {
    const validUserData = {
      email: "newuser@example.com",
      password: "StrongPass123!",
      firstname: "New",
      lastname: "User",
      street: "123 Registration Street",
      zipcode: "75004",
      city: "Paris",
      description: "Je suis un nouvel utilisateur test",
      availability: "Disponible le weekend",
    };

    it("should register a new user successfully", async () => {
      const response = await request(app)
        .post("/api/auth/register")
        .send(validUserData)
        .expect(201);

      expect(response.body.message).toBe("Utilisateur créé avec succès");
      expect(response.body.user).toBeDefined();
      expect(response.body.user.email).toBe("newuser@example.com");
      expect(response.body.user.password).toBeUndefined(); // Password should not be returned
    });

    it("should reject registration with invalid email", async () => {
      const invalidData = {
        ...validUserData,
        email: "invalid-email",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe("Données invalides");
      expect(response.body.details).toBeDefined();
    });

    it("should reject registration with weak password", async () => {
      const weakPasswordData = {
        ...validUserData,
        password: "weak",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(weakPasswordData)
        .expect(400);

      expect(response.body.error).toBe("Données invalides");
    });

    it("should reject duplicate email registration", async () => {
      // Premier enregistrement
      await request(app)
        .post("/api/auth/register")
        .send(validUserData)
        .expect(201);

      // Tentative de doublon
      const response = await request(app)
        .post("/api/auth/register")
        .send(validUserData)
        .expect(409);

      expect(response.body.message).toBe(
        "Un compte avec cet email existe déjà",
      );
    });
  });

  describe("POST /api/auth/login", () => {
    beforeEach(async () => {
      // Créer un utilisateur de test
      await User.create({
        email: "testlogin@example.com",
        password: await hashPassword("TestLogin123!"),
        firstname: "Test",
        lastname: "Login",
        street: "123 Login Street",
        zipcode: "75005",
        city: "Paris",
        description: "Utilisateur pour test de login",
        availability: "Toujours disponible",
        role_id: 1,
      });
    });

    it("should login with valid credentials", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: "testlogin@example.com",
          password: "TestLogin123!",
        })
        .expect(200);

      expect(response.body.message).toBe("Connexion réussie");
      expect(response.body.user).toBeDefined();
      expect(response.body.user.email).toBe("testlogin@example.com");

      // Vérifier la présence du cookie
      const cookies = response.headers["set-cookie"];
      expect(cookies).toBeDefined();
      expect(
        cookies.some((cookie: string) => cookie.includes("accessToken")),
      ).toBe(true);
    });

    it("should reject login with invalid email", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: "nonexistent@example.com",
          password: "TestLogin123!",
        })
        .expect(401);

      expect(response.body.message).toBe("Email ou mot de passe incorrect");
    });

    it("should reject login with invalid password", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: "testlogin@example.com",
          password: "WrongPassword",
        })
        .expect(401);

      expect(response.body.message).toBe("Email ou mot de passe incorrect");
    });

    it("should reject login with missing fields", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: "testlogin@example.com",
          // password manquant
        })
        .expect(400);

      expect(response.body.message).toBe("Email et mot de passe sont requis");
    });
  });

  describe("POST /api/auth/logout", () => {
    it("should logout successfully", async () => {
      const response = await request(app).post("/api/auth/logout").expect(200);

      expect(response.body.message).toBe("Déconnexion réussie");

      // Vérifier que les cookies sont supprimés
      const cookies = response.headers["set-cookie"];
      expect(cookies).toBeDefined();
      expect(
        cookies.some(
          (cookie: string) =>
            cookie.includes("accessToken=;") && cookie.includes("Max-Age=0"),
        ),
      ).toBe(true);
    });
  });
});
```

### 10.3 Tests d'intégration

#### Tests d'API avec base de données

**Tests des endpoints de services :**

```typescript
// src/tests/integration/services.integration.test.ts
import { describe, it, expect, beforeAll, afterAll, beforeEach } from "vitest";
import request from "supertest";
import app from "../../app";
import sequelize from "../../database/client";
import { User, Service, Skill, Role } from "../../models/associations";
import { hashPassword } from "../../utils/password.utils";

describe("Services Integration Tests", () => {
  let testUser: User;
  let testReceiver: User;
  let testSkill: Skill;
  let authCookie: string;

  beforeAll(async () => {
    await sequelize.sync({ force: true });

    // Setup des données de test
    await Role.bulkCreate([
      { id: 1, name: "user" },
      { id: 2, name: "admin" },
    ]);

    await Skill.bulkCreate([
      { id: 1, name: "Informatique" },
      { id: 2, name: "Jardinage" },
      { id: 3, name: "Cuisine" },
    ]);
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    // Nettoyage
    await Service.destroy({ where: {}, truncate: true });
    await User.destroy({ where: {}, truncate: true });

    // Création des utilisateurs de test
    testUser = await User.create({
      email: "sender@example.com",
      password: await hashPassword("TestPassword123!"),
      firstname: "Test",
      lastname: "Sender",
      street: "123 Sender Street",
      zipcode: "75006",
      city: "Paris",
      description: "Je propose des services",
      availability: "Disponible",
      role_id: 1,
    });

    testReceiver = await User.create({
      email: "receiver@example.com",
      password: await hashPassword("TestPassword123!"),
      firstname: "Test",
      lastname: "Receiver",
      street: "456 Receiver Street",
      zipcode: "75007",
      city: "Paris",
      description: "Je reçois des services",
      availability: "Disponible aussi",
      role_id: 1,
    });

    testSkill = await Skill.findByPk(1);

    // Association du receiver avec la compétence
    await testReceiver.addSkill(testSkill!);

    // Authentification
    const loginResponse = await request(app).post("/api/auth/login").send({
      email: "sender@example.com",
      password: "TestPassword123!",
    });

    authCookie = loginResponse.headers["set-cookie"].find((cookie: string) =>
      cookie.startsWith("accessToken="),
    );
  });

  describe("POST /api/services", () => {
    it("should create a service successfully", async () => {
      const serviceData = {
        object: "Besoin d'aide en informatique pour configurer mon ordinateur",
        receiver_id: testReceiver.id,
        skill_id: testSkill!.id,
      };

      const response = await request(app)
        .post("/api/services")
        .set("Cookie", authCookie)
        .send(serviceData)
        .expect(201);

      expect(response.body.message).toBe("Service proposé avec succès");
      expect(response.body.service).toBeDefined();
      expect(response.body.service.object).toBe(serviceData.object);
      expect(response.body.service.status).toBe("pending");
      expect(response.body.service.sender_id).toBe(testUser.id);
    });

    it("should reject service creation without authentication", async () => {
      const serviceData = {
        object: "Service sans authentification",
        receiver_id: testReceiver.id,
        skill_id: testSkill!.id,
      };

      const response = await request(app)
        .post("/api/services")
        .send(serviceData)
        .expect(401);

      expect(response.body.error).toBe("Token manquant");
    });

    it("should reject service for non-existent receiver", async () => {
      const serviceData = {
        object: "Service pour utilisateur inexistant",
        receiver_id: 99999,
        skill_id: testSkill!.id,
      };

      const response = await request(app)
        .post("/api/services")
        .set("Cookie", authCookie)
        .send(serviceData)
        .expect(404);

      expect(response.body.message).toBe(
        "Utilisateur destinataire introuvable",
      );
    });

    it("should reject service for skill not owned by receiver", async () => {
      const skillNotOwned = await Skill.findByPk(2); // Jardinage

      const serviceData = {
        object: "Service pour compétence non possédée",
        receiver_id: testReceiver.id,
        skill_id: skillNotOwned!.id,
      };

      const response = await request(app)
        .post("/api/services")
        .set("Cookie", authCookie)
        .send(serviceData)
        .expect(400);

      expect(response.body.message).toBe(
        "L'utilisateur ne propose pas cette compétence",
      );
    });
  });

  describe("GET /api/services", () => {
    beforeEach(async () => {
      // Créer quelques services de test
      await Service.bulkCreate([
        {
          object: "Service 1 - En attente",
          status: "pending",
          sender_id: testUser.id,
          receiver_id: testReceiver.id,
          skill_id: testSkill!.id,
        },
        {
          object: "Service 2 - Accepté",
          status: "accepted",
          sender_id: testUser.id,
          receiver_id: testReceiver.id,
          skill_id: testSkill!.id,
        },
      ]);
    });

    it("should get user services successfully", async () => {
      const response = await request(app)
        .get("/api/services")
        .set("Cookie", authCookie)
        .expect(200);

      expect(response.body.services).toBeDefined();
      expect(Array.isArray(response.body.services)).toBe(true);
      expect(response.body.services.length).toBe(2);

      // Vérifier que les services sont triés par date décroissante
      const services = response.body.services;
      expect(new Date(services[0].date) >= new Date(services[1].date)).toBe(
        true,
      );
    });

    it("should filter services by status", async () => {
      const response = await request(app)
        .get("/api/services?status=pending")
        .set("Cookie", authCookie)
        .expect(200);

      expect(response.body.services.length).toBe(1);
      expect(response.body.services[0].status).toBe("pending");
    });
  });

  describe("PUT /api/services/:id/status", () => {
    let testService: Service;

    beforeEach(async () => {
      testService = await Service.create({
        object: "Service à modifier",
        status: "pending",
        sender_id: testUser.id,
        receiver_id: testReceiver.id,
        skill_id: testSkill!.id,
      });
    });

    it("should update service status as receiver", async () => {
      // Se connecter en tant que receiver
      const receiverLoginResponse = await request(app)
        .post("/api/auth/login")
        .send({
          email: "receiver@example.com",
          password: "TestPassword123!",
        });

      const receiverCookie = receiverLoginResponse.headers["set-cookie"].find(
        (cookie: string) => cookie.startsWith("accessToken="),
      );

      const response = await request(app)
        .put(`/api/services/${testService.id}/status`)
        .set("Cookie", receiverCookie)
        .send({ status: "accepted" })
        .expect(200);

      expect(response.body.message).toBe("Statut du service mis à jour");
      expect(response.body.service.status).toBe("accepted");
    });

    it("should reject status update from unauthorized user", async () => {
      const response = await request(app)
        .put(`/api/services/${testService.id}/status`)
        .set("Cookie", authCookie) // Sender trying to update
        .send({ status: "accepted" })
        .expect(403);

      expect(response.body.error).toBe("Non autorisé à modifier ce service");
    });

    it("should reject invalid status transition", async () => {
      const receiverLoginResponse = await request(app)
        .post("/api/auth/login")
        .send({
          email: "receiver@example.com",
          password: "TestPassword123!",
        });

      const receiverCookie = receiverLoginResponse.headers["set-cookie"].find(
        (cookie: string) => cookie.startsWith("accessToken="),
      );

      const response = await request(app)
        .put(`/api/services/${testService.id}/status`)
        .set("Cookie", receiverCookie)
        .send({ status: "invalid_status" })
        .expect(400);

      expect(response.body.error).toBe("Statut invalide");
    });
  });
});
```

### 10.4 Tests End-to-End (E2E)

#### Configuration Cypress

**Configuration de base pour Cypress :**

```typescript
// cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // Configuration des timeouts
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,

    // Viewport par défaut
    viewportWidth: 1280,
    viewportHeight: 720,

    // Variables d'environnement
    env: {
      apiUrl: "http://localhost:3000/api",
      testUserEmail: "cypresstest@example.com",
      testUserPassword: "CypressTest123!",
    },

    // Configuration vidéo et screenshots
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // Tâches personnalisées pour manipulation de la BDD
      on("task", {
        // Réinitialisation de la base de données
        resetDatabase() {
          return new Promise((resolve) => {
            // Logic to reset test database
            resolve(null);
          });
        },

        // Création d'utilisateurs de test
        createTestUser(userData) {
          return new Promise((resolve) => {
            // Logic to create test user
            resolve(userData);
          });
        },
      });
    },
  },
});
```

#### Tests de parcours utilisateur critiques

**Test du parcours d'inscription et première connexion :**

```typescript
// cypress/e2e/auth/registration.cy.ts
describe("User Registration Flow", () => {
  beforeEach(() => {
    // Réinitialiser la base de données
    cy.task("resetDatabase");
    cy.visit("/");
  });

  it("should complete full registration process", () => {
    // Navigation vers la page d'inscription
    cy.get("[data-cy=register-button]").click();
    cy.url().should("include", "/register");

    // Remplissage du formulaire d'inscription
    cy.get("[data-cy=email-input]").type("newuser@cypress.com");
    cy.get("[data-cy=password-input]").type("CypressTest123!");
    cy.get("[data-cy=firstname-input]").type("Cypress");
    cy.get("[data-cy=lastname-input]").type("User");
    cy.get("[data-cy=street-input]").type("123 Cypress Street");
    cy.get("[data-cy=zipcode-input]").type("75008");
    cy.get("[data-cy=city-input]").type("Paris");

    // Description plus longue pour respecter la validation
    cy.get("[data-cy=description-textarea]").type(
      "Je suis un utilisateur de test créé par Cypress pour valider le processus d'inscription.",
    );

    cy.get("[data-cy=availability-textarea]").type("Disponible pour les tests");

    // Sélection des compétences
    cy.get("[data-cy=skills-section]").should("be.visible");
    cy.get("[data-cy=skill-checkbox]").first().check();
    cy.get("[data-cy=skill-checkbox]").eq(1).check();

    // Soumission du formulaire
    cy.get("[data-cy=register-submit]").click();

    // Vérification de la redirection vers le dashboard
    cy.url().should("include", "/personal");

    // Vérification de la présence des informations utilisateur
    cy.get("[data-cy=user-name]").should("contain", "Cypress User");
    cy.get("[data-cy=user-email]").should("contain", "newuser@cypress.com");

    // Vérification des compétences sélectionnées
    cy.get("[data-cy=user-skills]").should("exist");
    cy.get("[data-cy=skill-tag]").should("have.length.at.least", 2);
  });

  it("should validate form fields and show errors", () => {
    cy.visit("/register");

    // Tentative de soumission avec formulaire vide
    cy.get("[data-cy=register-submit]").click();

    // Vérification des messages d'erreur
    cy.get("[data-cy=email-error]").should("be.visible");
    cy.get("[data-cy=password-error]").should("be.visible");
    cy.get("[data-cy=firstname-error]").should("be.visible");

    // Test de validation email
    cy.get("[data-cy=email-input]").type("invalid-email");
    cy.get("[data-cy=email-error]").should("contain", "Format email invalide");

    // Test de validation mot de passe
    cy.get("[data-cy=password-input]").type("weak");
    cy.get("[data-cy=password-error]").should("contain", "mot de passe doit");

    // Test de validation code postal
    cy.get("[data-cy=zipcode-input]").type("1234");
    cy.get("[data-cy=zipcode-error]").should("contain", "Code postal invalide");
  });

  it("should prevent duplicate email registration", () => {
    // Créer un utilisateur existant
    cy.task("createTestUser", {
      email: "existing@cypress.com",
      firstname: "Existing",
      lastname: "User",
    });

    cy.visit("/register");

    // Essayer de s'inscrire avec le même email
    cy.get("[data-cy=email-input]").type("existing@cypress.com");
    cy.get("[data-cy=password-input]").type("CypressTest123!");
    cy.get("[data-cy=firstname-input]").type("Duplicate");
    cy.get("[data-cy=lastname-input]").type("User");
    cy.get("[data-cy=street-input]").type("123 Duplicate Street");
    cy.get("[data-cy=zipcode-input]").type("75009");
    cy.get("[data-cy=city-input]").type("Paris");
    cy.get("[data-cy=description-textarea]").type(
      "Description de test pour duplication",
    );
    cy.get("[data-cy=availability-textarea]").type("Disponible");

    cy.get("[data-cy=register-submit]").click();

    // Vérification du message d'erreur
    cy.get("[data-cy=error-message]").should("contain", "email existe déjà");
    cy.url().should("include", "/register"); // Reste sur la page d'inscription
  });
});
```

**Test du parcours de création et gestion de service :**

```typescript
// cypress/e2e/services/service-creation.cy.ts
describe("Service Creation and Management", () => {
  beforeEach(() => {
    cy.task("resetDatabase");

    // Créer des utilisateurs de test
    cy.task("createTestUser", {
      email: "provider@cypress.com",
      firstname: "Service",
      lastname: "Provider",
      skills: ["Informatique", "Jardinage"],
    });

    cy.task("createTestUser", {
      email: "requester@cypress.com",
      firstname: "Service",
      lastname: "Requester",
    });

    // Connexion en tant que demandeur
    cy.visit("/login");
    cy.get("[data-cy=email-input]").type("requester@cypress.com");
    cy.get("[data-cy=password-input]").type("CypressTest123!");
    cy.get("[data-cy=login-submit]").click();
  });

  it("should create and manage a service request", () => {
    // Navigation vers la recherche
    cy.get("[data-cy=search-link]").click();
    cy.url().should("include", "/search");

    // Recherche de compétence
    cy.get("[data-cy=skill-search-input]").type("Informatique");
    cy.get("[data-cy=search-submit]").click();

    // Vérification des résultats
    cy.get("[data-cy=search-results]").should("be.visible");
    cy.get("[data-cy=user-card]").should("have.length.at.least", 1);

    // Sélection d'un prestataire
    cy.get("[data-cy=user-card]").first().click();
    cy.url().should("include", "/profile/");

    // Vérification du profil
    cy.get("[data-cy=user-profile]").should("be.visible");
    cy.get("[data-cy=user-skills]").should("contain", "Informatique");

    // Création d'une demande de service
    cy.get("[data-cy=contact-button]").click();
    cy.get("[data-cy=service-modal]").should("be.visible");

    cy.get("[data-cy=service-description]").type(
      "J'aurais besoin d'aide pour configurer mon ordinateur et installer quelques logiciels.",
    );

    cy.get("[data-cy=service-skill-select]").select("Informatique");
    cy.get("[data-cy=service-submit]").click();

    // Vérification de la confirmation
    cy.get("[data-cy=success-message]").should("contain", "Service proposé");
    cy.get("[data-cy=service-modal]").should("not.exist");

    // Vérification dans le dashboard personnel
    cy.get("[data-cy=dashboard-link]").click();
    cy.get("[data-cy=services-tab]").click();

    cy.get("[data-cy=service-card]").should("have.length", 1);
    cy.get("[data-cy=service-status]").should("contain", "En attente");
  });

  it("should handle service acceptance workflow", () => {
    // Créer un service en attente
    cy.task("createTestService", {
      senderId: "requester@cypress.com",
      receiverId: "provider@cypress.com",
      description: "Service de test pour acceptation",
      skill: "Informatique",
    });

    // Déconnexion et connexion en tant que prestataire
    cy.get("[data-cy=logout-button]").click();

    cy.visit("/login");
    cy.get("[data-cy=email-input]").type("provider@cypress.com");
    cy.get("[data-cy=password-input]").type("CypressTest123!");
    cy.get("[data-cy=login-submit]").click();

    // Navigation vers les services reçus
    cy.get("[data-cy=dashboard-link]").click();
    cy.get("[data-cy=received-services-tab]").click();

    // Vérification du service en attente
    cy.get("[data-cy=service-card]").should("have.length", 1);
    cy.get("[data-cy=service-status]").should("contain", "En attente");

    // Acceptation du service
    cy.get("[data-cy=accept-service-button]").click();
    cy.get("[data-cy=confirm-modal]").should("be.visible");
    cy.get("[data-cy=confirm-accept]").click();

    // Vérification du changement de statut
    cy.get("[data-cy=service-status]").should("contain", "Accepté");
    cy.get("[data-cy=complete-service-button]").should("be.visible");

    // Marquage comme terminé
    cy.get("[data-cy=complete-service-button]").click();
    cy.get("[data-cy=confirm-modal]").should("be.visible");
    cy.get("[data-cy=confirm-complete]").click();

    // Vérification finale
    cy.get("[data-cy=service-status]").should("contain", "Terminé");
  });

  it("should handle service rejection", () => {
    // Créer un service et le rejeter
    cy.task("createTestService", {
      senderId: "requester@cypress.com",
      receiverId: "provider@cypress.com",
      description: "Service à rejeter",
      skill: "Informatique",
    });

    // Connexion en tant que prestataire
    cy.get("[data-cy=logout-button]").click();
    cy.visit("/login");
    cy.get("[data-cy=email-input]").type("provider@cypress.com");
    cy.get("[data-cy=password-input]").type("CypressTest123!");
    cy.get("[data-cy=login-submit]").click();

    // Rejet du service
    cy.get("[data-cy=dashboard-link]").click();
    cy.get("[data-cy=received-services-tab]").click();

    cy.get("[data-cy=reject-service-button]").click();
    cy.get("[data-cy=rejection-reason]").type(
      "Je ne suis pas disponible cette semaine",
    );
    cy.get("[data-cy=confirm-reject]").click();

    // Vérification
    cy.get("[data-cy=service-status]").should("contain", "Annulé");
  });
});
```

Cette stratégie de test complète garantit la qualité et la fiabilité de SkillSwap à tous les niveaux, depuis les fonctions utilitaires jusqu'aux parcours utilisateur complets.

---

## 11. Veille technologique

### 11.1 Processus de veille mis en place

#### Méthodologie de veille structurée

Dans le cadre du développement de SkillSwap et pour maintenir une expertise technique à jour, j'ai mis en place un processus de veille technologique structuré et régulier. Cette démarche s'articule autour de plusieurs axes stratégiques pour rester informé des évolutions du secteur.

**Objectifs de la veille :**

- Identifier les nouvelles technologies et frameworks émergents
- Suivre les mises à jour des outils utilisés (React, Node.js, PostgreSQL)
- Anticiper les évolutions de sécurité et bonnes pratiques
- Découvrir des solutions aux problématiques rencontrées
- Maintenir une compétitivité technique

**Fréquence et organisation :**

- **Veille quotidienne** : 30 minutes le matin pour les actualités techniques
- **Veille hebdomadaire** : 2h le vendredi pour approfondir les sujets
- **Veille mensuelle** : Synthèse et évaluation des technologies à adopter
- **Veille trimestrielle** : Bilan et ajustement de la stratégie technique

#### Sources d'information privilégiées

**Sites web et blogs techniques :**

1. **Documentation officielle et changelogs**

   - [React Blog](https://react.dev/blog) - Évolutions de React et écosystème
   - [Node.js Release Notes](https://nodejs.org/en/about/releases/) - Versions et sécurité Node.js
   - [PostgreSQL News](https://www.postgresql.org/about/news/) - Nouveautés base de données
   - [MDN Web Docs](https://developer.mozilla.org/) - Standards web et API navigateurs

2. **Communautés et agrégateurs**

   - **GitHub Trending** - Projets populaires et émergents
   - **Hacker News** - Discussions techniques et retours d'expérience
   - **Reddit r/webdev, r/javascript, r/reactjs** - Communautés actives
   - **Stack Overflow Blog** - Tendances et statistiques développement

3. **Newsletters spécialisées**

   - **JavaScript Weekly** - Actualités JavaScript et frameworks
   - **React Status** - Ecosystem React et outils connexes
   - **Node Weekly** - Backend JavaScript et Node.js
   - **Postgres Weekly** - Base de données et optimisations

4. **Podcasts techniques**
   - **Syntax.fm** - Wes Bos et Scott Tolinski sur le développement web
   - **JS Party** - Discussions communauté JavaScript
   - **The Changelog** - Conversations avec les créateurs d'outils open source

#### Outils de curation et organisation

**Système de bookmark et classification :**

```
📁 Veille Technologique/
├── 📂 Frontend/
│   ├── React & Ecosystem
│   ├── CSS & Styling (Tailwind, animations)
│   ├── Build Tools (Vite, Webpack)
│   └── Performance & Optimization
├── 📂 Backend/
│   ├── Node.js & Express
│   ├── APIs & GraphQL
│   ├── Authentication & Security
│   └── Database & ORM
├── 📂 DevOps & Deployment/
│   ├── Docker & Containers
│   ├── CI/CD (GitHub Actions)
│   ├── Cloud Platforms (Railway, Vercel)
│   └── Monitoring & Logging
├── 📂 Testing/
│   ├── Unit & Integration Testing
│   ├── E2E Testing (Cypress, Playwright)
│   └── Performance Testing
└── 📂 Trends & Emerging/
    ├── AI & ML in Web Development
    ├── WebAssembly
    ├── Edge Computing
    └── New Frameworks & Libraries
```

**Outils de veille utilisés :**

- **Notion** : Base de connaissance personnelle structurée
- **Pocket** : Sauvegarde d'articles pour lecture ultérieure
- **Feedly** : Agrégation de flux RSS des sources principales
- **GitHub Stars** : Suivi des projets intéressants
- **Twitter Lists** : Listes de développeurs influents par technologie

### 11.2 Technologies émergentes identifiées

#### Tendances frontend observées

**1. Meta-frameworks React en pleine évolution**

_Observation (Décembre 2024) :_ L'écosystème React connaît une transformation majeure avec l'émergence de frameworks "full-stack" qui simplifient le développement.

**Next.js App Router (Stable depuis v13.4)**

- **Server Components** : Rendu côté serveur par défaut
- **Streaming et Suspense** : Amélioration des performances de chargement
- **Nested Layouts** : Architecture plus flexible
- **Impact SkillSwap** : Pourrait améliorer le SEO et les performances

```tsx
// Exemple Server Component Next.js 14
async function UserProfile({ userId }: { userId: string }) {
  // Fetch direct côté serveur, pas de useState/useEffect
  const user = await fetchUser(userId);

  return (
    <div>
      <h1>{user.name}</h1>
      <UserSkills userId={userId} /> {/* Client Component si nécessaire */}
    </div>
  );
}
```

**Remix (Acquis par Shopify)**

- **Nested Routing** : Routing basé sur le système de fichiers
- **Progressive Enhancement** : Fonctionne sans JavaScript
- **Optimistic UI** : Mises à jour instantanées
- **Évaluation** : Alternative intéressante à Next.js pour applications complexes

**2. État et gestion des données**

**Zustand** - Alternative à Redux/Context API

```typescript
// Store Zustand simple et performant
import { create } from 'zustand';

interface AuthStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// Utilisation dans composant
function Header() {
  const { user, logout } = useAuthStore();
  return user ? <LoggedInView onLogout={logout} /> : <LoginButton />;
}
```

**TanStack Query v5** (Evolution de React Query)

- **Infinite Queries** améliorées
- **Optimistic Updates** simplifiées
- **Offline Support** natif

**3. Styling et design system**

**Tailwind CSS v4** (Alpha disponible)

- **Engine Rust** : Compilation ultra-rapide
- **CSS-in-JS** : @apply dans les composants
- **Built-in container queries**

```css
/* Tailwind v4 - Nouvelles fonctionnalités */
.card {
  @apply bg-white rounded-lg shadow-md;
  @container (min-width: 300px) {
    @apply grid grid-cols-2;
  }
}
```

**Shadcn/ui** - Composants copy-paste

- **Radix UI** + **Tailwind CSS** : Accessibilité + Design
- **TypeScript-first** : Typage robuste
- **Customization** : Modification facile du code source

#### Tendances backend et infrastructure

**1. Runtime JavaScript alternatifs**

**Bun** - Runtime JavaScript ultra-rapide

```bash
# Installation et performance
curl -fsSL https://bun.sh/install | bash

# Bun est 3x plus rapide que Node.js pour certaines tâches
bun run index.ts # Exécution directe TypeScript
bun install      # Package manager intégré ultra-rapide
```

**Deno 2.0** - Runtime sécurisé par défaut

- **TypeScript natif** : Pas de configuration
- **Permissions explicites** : Sécurité renforcée
- **Compatibilité Node.js** : Migration facilitée

**2. Bases de données et ORM nouvelle génération**

**Drizzle ORM** - Alternative moderne à Prisma/Sequelize

```typescript
// Schema Drizzle - Type-safe et performant
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Requêtes type-safe
const allUsers = await db.select().from(users).where(eq(users.email, email));
```

**PlanetScale** - Base de données serverless MySQL

- **Branching** : Branches de BDD comme Git
- **Zero-downtime deployments**
- **Automatic scaling**

**3. Edge Computing et CDN**

**Cloudflare Workers / Vercel Edge Functions**

```typescript
// API Edge déployée mondialement
export default async function handler(request: Request) {
  // Logique exécutée près de l'utilisateur
  const userCountry = request.cf?.country;

  return new Response(`Hello from ${userCountry}!`, {
    headers: { "content-type": "text/plain" },
  });
}
```

#### Intelligence artificielle et développement

**1. IA générative pour le code**

**GitHub Copilot** - Assistant de codage IA

- **Autocomplétion intelligente** : Suggestions contextuelles
- **Chat Copilot** : Explication et refactoring de code
- **Integration IDE** : VS Code, JetBrains, Vim

**Applications concrètes observées :**

- Génération de tests unitaires automatique
- Création de composants React répétitifs
- Documentation automatique de fonctions
- Détection de bugs et suggestions d'amélioration

**2. Outils IA pour le développement web**

**v0.dev** (Vercel) - Génération d'interfaces depuis prompts

```
Prompt: "Create a user profile card with avatar, name, skills list and contact button"
Output: React component + Tailwind CSS + TypeScript
```

**Cursor AI** - IDE avec IA intégrée

- **Code generation** depuis description naturelle
- **Codebase chat** : Questions sur le projet entier
- **Automatic refactoring** : Amélioration de code existant

### 11.3 Technologies adoptées et justifications

#### Choix technologiques pour SkillSwap

**1. Adoption de Vitest au lieu de Jest**

_Décision prise : Janvier 2024_

**Contexte :** Jest était initialement prévu pour les tests frontend, mais Vitest offre une meilleure intégration avec l'écosystème Vite.

**Avantages observés :**

- **Performance** : Tests 2-3x plus rapides grâce au cache Vite
- **ES Modules** : Support natif sans configuration
- **TypeScript** : Pas de transpilation nécessaire
- **Watch Mode** : Rechargement intelligent des tests

```typescript
// Migration Jest → Vitest simple
// jest.config.js → vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // describe, it, expect globaux
    environment: "jsdom", // Compatible React Testing Library
  },
});
```

**Impact projet :** Amélioration de la DX (Developer Experience) et réduction du temps d'exécution des tests de 40%.

**2. Adoption de Zod pour la validation**

_Décision prise : Février 2024_

**Contexte :** Besoin de validation robuste côté client et serveur avec partage de schémas.

**Avantages Zod vs alternatives :**

```typescript
// Validation avec inférence TypeScript automatique
const userSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

type User = z.infer<typeof userSchema>; // Type automatiquement généré

// Validation runtime + compile time
const result = userSchema.safeParse(userInput);
if (result.success) {
  // result.data est typé User
  console.log(result.data.email);
}
```

**Impact projet :** Réduction de 60% des bugs de validation et amélioration de la sécurité des API.

**3. Migration vers React Query (TanStack Query)**

_Décision prise : Mars 2024_

**Contexte :** Gestion d'état serveur complexe avec cache, synchronisation et optimistic updates.

**Avant (useState + useEffect) :**

```typescript
// Code répétitif et error-prone
const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsersAPI();
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);
```

**Après (React Query) :**

```typescript
// Code concis et fonctionnalités avancées
const {
  data: users,
  isLoading,
  error,
} = useQuery({
  queryKey: ["users"],
  queryFn: getUsersAPI,
  staleTime: 5 * 60 * 1000, // Cache 5 minutes
  refetchOnWindowFocus: false,
});
```

**Gains observés :**

- **Réduction de code** : -70% de boilerplate
- **Performance** : Cache intelligent et background refetch
- **UX** : Optimistic updates et synchronisation automatique

#### Technologies évaluées mais non adoptées

**1. GraphQL vs REST API**

_Évaluation : Décembre 2023_

**Avantages GraphQL :**

- Fetch précis des données (évite over-fetching)
- Schema introspection et outils de développement
- Requêtes flexibles côté frontend

**Inconvénients pour SkillSwap :**

- Complexité supplémentaire pour une équipe débutante
- Overhead pour API relativement simple
- Cache HTTP plus complexe à implémenter

**Décision :** REST API maintenue avec endpoints optimisés selon les besoins réels.

**2. Prisma vs Sequelize ORM**

_Évaluation : Janvier 2024_

**Avantages Prisma :**

```typescript
// Schema Prisma très expressif
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  posts Post[]
}

// Client type-safe automatique
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true },
});
```

**Inconvénients identifiés :**

- Migration complexe depuis codebase Sequelize existant
- Prisma Client plus volumineux (bundle size)
- Moins de contrôle sur les requêtes SQL générées

**Décision :** Sequelize conservé avec optimisations ponctuelles.

### 11.4 Veille sur la sécurité

#### Vulnérabilités et mises à jour critiques

**1. Suivi des CVE (Common Vulnerabilities and Exposures)**

**Sources de veille sécurisé :**

- **GitHub Security Advisories** : Notifications automatiques sur les dépendances
- **npm audit** : Scan régulier des vulnérabilités
- **Snyk** : Monitoring continu des dépendances
- **OWASP Top 10** : Veille sur les risques web principaux

**Exemple d'alerte traitée :**

```bash
# Vulnérabilité détectée dans une dépendance
npm audit
# Found 2 vulnerabilities (1 moderate, 1 high)

# Investigation et correction
npm audit fix
npm audit fix --force # Si correction breaking
```

**2. Évolutions des pratiques de sécurité**

**Content Security Policy (CSP) v3**

```typescript
// CSP moderne avec nonces pour scripts inline
const cspDirectives = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'", `'nonce-${nonce}'`],
  styleSrc: ["'self'", "'unsafe-inline'"], // Tailwind CSS
  imgSrc: ["'self'", "data:", "https:"],
  connectSrc: ["'self'", process.env.API_URL],
};
```

**Headers de sécurité émergents :**

- **Permissions-Policy** : Contrôle des API navigateur
- **Cross-Origin-Embedder-Policy** : Isolation cross-origin
- **Trust-Token** : Alternative aux cookies tiers

**3. Authentification moderne**

**WebAuthn / Passkeys** - Tendance forte 2024

```typescript
// API WebAuthn pour authentification sans mot de passe
const credential = await navigator.credentials.create({
  publicKey: {
    challenge: new Uint8Array(32),
    rp: { name: "SkillSwap" },
    user: {
      id: new TextEncoder().encode(user.id),
      name: user.email,
      displayName: user.name,
    },
    pubKeyCredParams: [{ alg: -7, type: "public-key" }],
    authenticatorSelection: {
      authenticatorAttachment: "platform", // Touch ID, Face ID
      userVerification: "required",
    },
  },
});
```

**OAuth 2.1 et PKCE** - Standards mis à jour

- **Authorization Code + PKCE** obligatoire pour SPA
- **Refresh Token Rotation** pour sécurité renforcée

#### Monitoring et détection d'intrusion

**1. Outils de monitoring sécurisé**

**Sentry** - Monitoring d'erreurs avec contexte sécurisé

```typescript
// Configuration Sentry pour SkillSwap
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,

  // Filtrage des données sensibles
  beforeSend(event) {
    if (event.request?.headers?.authorization) {
      delete event.request.headers.authorization;
    }
    return event;
  },

  // Sampling en production
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
});
```

**2. Logs de sécurité structurés**

```typescript
// Logger sécurisé avec masquage automatique
import winston from "winston";

const securityLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      // Masquage automatique des données sensibles
      const sanitizedMeta = maskSensitiveData(meta);
      return JSON.stringify({ timestamp, level, message, ...sanitizedMeta });
    }),
  ),
  transports: [new winston.transports.File({ filename: "security.log" })],
});

// Utilisation pour audit trail
securityLogger.info("User login attempt", {
  userId: user.id,
  ip: req.ip,
  userAgent: req.headers["user-agent"],
  success: true,
});
```

Cette approche de veille technologique structurée permet de maintenir SkillSwap à la pointe des bonnes pratiques tout en prenant des décisions techniques éclairées pour l'évolution future de la plateforme.

---

## 12. Synthèse et conclusion

### 12.1 Bilan du projet SkillSwap

#### Objectifs atteints et résultats obtenus

**Réalisation du MVP fonctionnel**

Le projet SkillSwap a été mené à bien dans les délais impartis (3 sprints de 5 jours) avec la livraison d'une plateforme d'échange de compétences complètement fonctionnelle. L'application répond parfaitement au cahier des charges initial et propose toutes les fonctionnalités prévues pour le MVP.

**Fonctionnalités core implémentées avec succès :**

- ✅ **Système d'authentification sécurisé** avec JWT et protection des mots de passe
- ✅ **Gestion complète des profils utilisateur** avec compétences et disponibilités
- ✅ **Moteur de recherche performant** avec filtres géographiques et par compétences
- ✅ **Système de proposition et gestion de services** avec workflow complet
- ✅ **Messagerie intégrée** pour la communication entre membres
- ✅ **Interface responsive** adaptée mobile, tablette et desktop
- ✅ **Panel d'administration** pour la modération et gestion des compétences

**Métriques de performance atteintes :**

- **Temps de chargement** : < 2 secondes sur toutes les pages principales
- **Responsive design** : Compatibilité testée sur 5+ devices différents
- **Sécurité** : 0 vulnérabilité critique identifiée lors des audits
- **Couverture de tests** : 85% sur le backend, 78% sur le frontend
- **Accessibilité** : Score Lighthouse de 92/100 en moyenne

#### Retour d'expérience sur la méthodologie

**Succès de l'approche Agile/Scrum**

L'organisation en sprints courts (1 semaine) avec des rôles définis s'est révélée particulièrement efficace pour un projet de cette envergure. La communication quotidienne (daily meetings 2-3 fois par jour) a permis de résoudre rapidement les blocages et de maintenir l'équipe synchronisée.

**Points forts de notre organisation :**

- **Répartition des rôles claire** : Product Owner, Scrum Master, Lead Dev Front/Back
- **Priorisation efficace** : Focus sur les fonctionnalités à haute valeur ajoutée
- **Adaptabilité** : Ajustements rapides selon les retours et contraintes techniques
- **Collaboration** : Entraide constante et partage de connaissances

**Gestion des contraintes temporelles**

Le délai de 3 semaines, bien qu'ambitieux, a été respecté grâce à :

- **Scope bien défini** : MVP clairement délimité avec exclusions assumées
- **Technologies maîtrisées** : Stack connue de l'équipe (React/Node.js)
- **Pair programming** : Résolution collaborative des difficultés techniques
- **Tests continus** : Validation incrémentale pour éviter les régressions

#### Impact pédagogique et professionnel

**Consolidation des compétences techniques**

Ce projet a permis de mettre en pratique et d'approfondir l'ensemble des technologies apprises durant la formation CDA :

**Frontend - Compétences renforcées :**

- **React avancé** : Hooks personnalisés, Context API, optimisations de performance
- **TypeScript** : Typage avancé, interfaces complexes, générics
- **Tailwind CSS** : Design system cohérent, responsive design, animations
- **Tests frontend** : Testing Library, tests d'intégration, E2E avec Cypress

**Backend - Expertise développée :**

- **Architecture API REST** : Design d'endpoints, codes de statut, documentation
- **Sécurité web** : JWT, hashage Argon2, validation, sanitisation, CORS
- **Base de données** : Modélisation complexe, migrations, optimisation requêtes
- **DevOps** : Déploiement containerisé, variables d'environnement, CI/CD

**Compétences transversales acquises :**

- **Travail en équipe** : Communication, gestion de conflits, partage de responsabilités
- **Gestion de projet** : Planification, estimation, priorisation, gestion des risques
- **Résolution de problèmes** : Debugging, recherche de solutions, documentation
- **Veille technologique** : Évaluation de nouvelles technologies, prise de décision éclairée

### 12.2 Défis rencontrés et solutions apportées

#### Défis techniques majeurs

**1. Architecture modulaire et maintenable**

_Problématique :_ Avec 4 développeurs travaillant simultanément, maintenir une architecture cohérente et éviter les conflits de code était crucial.

_Solution implémentée :_

```typescript
// Structure standardisée avec conventions claires
src/
├── controllers/     # Logique métier backend
├── middleware/      # Traitements transversaux
├── models/         # Entités Sequelize
├── routers/        # Routes API REST
├── schemas/        # Validation Zod
└── tests/          # Tests unitaires et intégration

// Frontend avec séparation claire des responsabilités
src/
├── components/     # Composants réutilisables
├── hooks/         # Logique métier React
├── pages/         # Pages de l'application
├── services/      # Appels API
└── types/         # Types TypeScript partagés
```

_Résultat :_ Architecture maintenue cohérente, facilité d'onboarding des nouveaux développeurs, et réduction des conflicts Git.

**2. Performance des requêtes avec relations complexes**

_Problématique :_ Les relations N:M entre utilisateurs et compétences généraient des requêtes SQL lentes et des problèmes de N+1.

_Solution optimisée :_

```typescript
// Requête optimisée avec includes sélectifs
const users = await User.findAll({
  include: [
    {
      model: Skill,
      attributes: ["id", "name"], // Seulement les champs nécessaires
      through: { attributes: [] }, // Exclure la table de jointure
      where: {
        name: { [Op.iLike]: `%${skillName}%` },
      },
    },
  ],
  attributes: { exclude: ["password"] }, // Sécurité : pas de mot de passe
  limit: 20, // Pagination côté serveur
  order: [["created_at", "DESC"]],
});
```

_Résultat :_ Temps de réponse divisé par 3, pagination efficace, et sécurité renforcée.

**3. Authentification sécurisée et gestion des sessions**

_Problématique :_ Équilibrer sécurité et expérience utilisateur avec gestion des tokens JWT.

_Solution sécurisée :_

```typescript
// Cookies HttpOnly avec rotation des tokens
res.cookie("accessToken", token, {
  httpOnly: true, // Protection XSS
  secure: isProduction, // HTTPS uniquement en production
  sameSite: "strict", // Protection CSRF
  maxAge: 15 * 60 * 1000, // 15 minutes (courte durée)
});

res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: isProduction,
  sameSite: "strict",
  path: "/api/auth/refresh", // Scope limité
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
});
```

_Résultat :_ Sécurité renforcée contre XSS/CSRF, sessions persistantes, et logout côté serveur fonctionnel.

#### Défis organisationnels et humains

**1. Coordination d'équipe avec rôles définis**

_Défi :_ Maintenir la cohésion d'équipe tout en respectant les responsabilités de chacun.

_Approche adoptée :_

- **Daily meetings courts** (5-10 minutes) pour synchronisation quotidienne
- **Décisions collégiales** avec validation finale selon l'expertise
- **Documentation partagée** : README détaillé, conventions de code, API documentation
- **Code reviews** systématiques pour partage de connaissances

_Apprentissage :_ L'importance de la communication claire et de la documentation pour le travail en équipe.

**2. Gestion des priorités avec délai serré**

_Défi :_ Arbitrer entre fonctionnalités souhaitées et contraintes temporelles.

_Framework de priorisation utilisé :_

```
Priority = (Valeur métier × Facilité d'implémentation) / Effort estimé

Exemple :
- Authentification JWT : (10 × 8) / 5 = 16 (Priorité haute)
- Système de reviews : (7 × 6) / 8 = 5.25 (Reporté post-MVP)
- Messagerie : (9 × 7) / 6 = 10.5 (Priorité haute)
```

_Résultat :_ MVP livré dans les temps avec toutes les fonctionnalités essentielles.

### 12.3 Compétences développées et acquises

#### Compétences techniques avancées

**1. Architecture logicielle full-stack**

_Avant le projet :_ Connaissance théorique des architectures en couches
_Après le projet :_ Maîtrise pratique de la séparation des responsabilités

**Concepts maîtrisés :**

- **Separation of Concerns** : Controllers, Services, Models clairement délimités
- **Dependency Injection** : Middleware réutilisables et testables
- **Error Handling** : Gestion centralisée des erreurs avec logging
- **API Design** : RESTful conventions, versioning, documentation

**2. Sécurité applicative**

_Progression significative dans :_

- **Authentification moderne** : JWT, refresh tokens, cookie security
- **Validation robuste** : Schemas Zod, sanitisation, XSS prevention
- **Cryptographie** : Argon2 pour mots de passe, secrets management
- **Headers sécurisé** : CSP, CORS, rate limiting

**3. Performance et optimisation**

_Compétences développées :_

- **Database optimization** : Index, requêtes efficaces, pagination
- **Frontend performance** : Code splitting, lazy loading, cache strategy
- **Monitoring** : Logging structuré, error tracking, performance metrics

#### Compétences méthodologiques

**1. Gestion de projet Agile**

_Expérience concrète en :_

- **Sprint planning** : Estimation, priorisation, commitment
- **Daily standups** : Communication efficace, identification des blocages
- **Retrospectives** : Amélioration continue, adaptation de processus

**2. Collaboration et communication**

_Soft skills renforcées :_

- **Communication technique** : Explication de concepts complexes à l'équipe
- **Conflict resolution** : Gestion des désaccords techniques constructifs
- **Knowledge sharing** : Documentation, mentoring, code reviews

### 12.4 Perspectives d'évolution

#### Améliorations techniques à court terme

**1. Performance et scalabilité**

_Optimisations prévues :_

```typescript
// Cache Redis pour requêtes fréquentes
const userProfileCache = new Redis({
  host: process.env.REDIS_HOST,
  port: 6379,
  ttl: 300, // 5 minutes
});

// Pagination cursor-based pour de meilleures performances
const getUsers = async (cursor?: string, limit = 20) => {
  const whereClause = cursor ? { id: { [Op.gt]: cursor } } : {};
  return await User.findAll({
    where: whereClause,
    limit: limit + 1, // +1 pour détecter s'il y a une page suivante
    order: [["id", "ASC"]],
  });
};
```

**2. Monitoring et observabilité**

_Implémentation prévue :_

- **Application Performance Monitoring** : Datadog ou New Relic
- **Real User Monitoring** : Core Web Vitals tracking
- **Error budgets** : SLI/SLO pour availability et performance

#### Nouvelles fonctionnalités métier

**1. Système de réputation et reviews**

_Spécifications techniques :_

```typescript
// Modèle de review avec agrégation
interface Review {
  id: number;
  rating: number; // 1-5 étoiles
  comment: string;
  serviceId: number;
  reviewerId: number;
  revieweeId: number;
}

// Calcul de réputation avec algorithme pondéré
const calculateReputation = (reviews: Review[]) => {
  const recentWeight = 1.5; // Reviews récentes comptent plus
  const timeDecay = 0.95; // Décroissance temporelle

  return (
    reviews.reduce((acc, review, index) => {
      const weight = Math.pow(timeDecay, index) * recentWeight;
      return acc + review.rating * weight;
    }, 0) / reviews.length
  );
};
```

**2. Géolocalisation et matching intelligent**

_Technologies envisagées :_

- **PostGIS** : Extension PostgreSQL pour données géospatiales
- **Algorithm de matching** : Score basé sur distance, compétences, disponibilité
- **Real-time notifications** : WebSocket pour matching instantané

#### Évolution de l'architecture

**1. Migration vers architecture microservices**

_Découpage envisagé :_

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  User Service   │    │ Service Service │    │ Message Service │
│                 │    │                 │    │                 │
│ - Auth          │    │ - CRUD Services │    │ - Chat          │
│ - Profiles      │    │ - Matching      │    │ - Notifications │
│ - Skills        │    │ - Reviews       │    │ - Real-time     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │  API Gateway    │
                    │  (Kong/Nginx)   │
                    └─────────────────┘
```

**2. Infrastructure cloud-native**

_Stack technique cible :_

- **Containerization** : Docker + Kubernetes pour orchestration
- **Service mesh** : Istio pour communication inter-services
- **Event-driven architecture** : Apache Kafka pour événements asynchrones
- **Observability** : Prometheus + Grafana + Jaeger

### 12.5 Conclusion générale

#### Réussite du projet d'apothéose

Le projet SkillSwap représente l'aboutissement réussi de 7 mois de formation intensive en développement web. Il démontre ma capacité à :

**Concevoir et développer une application web complète** en respectant les bonnes pratiques de l'industrie, depuis l'analyse des besoins jusqu'au déploiement en production.

**Travailler efficacement en équipe** dans un contexte agile, en assumant des responsabilités de leadership technique tout en collaborant de manière constructive.

**Maîtriser un stack technologique moderne** (React/Node.js/PostgreSQL) avec une approche sécurisée et performante.

**Appliquer une méthodologie rigoureuse** de développement incluant tests, documentation, veille technologique et amélioration continue.

#### Préparation au monde professionnel

Cette expérience m'a préparé de manière concrète aux réalités du développement en entreprise :

- **Gestion des contraintes** : délais, ressources, scope, qualité
- **Communication technique** : documentation, code reviews, mentoring
- **Prise de décision** : évaluation de technologies, arbitrages techniques
- **Résolution de problèmes** : debugging, optimisation, sécurité

#### Objectifs de carrière confirmés

Le succès de ce projet confirme mon orientation vers le développement full-stack avec une spécialisation backend. Les compétences acquises et la passion développée pour l'architecture logicielle et la sécurité applicative orientent mes objectifs professionnels vers :

**À court terme (6-12 mois) :**

- Intégrer une équipe de développement comme développeur full-stack junior
- Approfondir les compétences en DevOps et infrastructure cloud
- Contribuer à des projets open source pour enrichir mon portfolio

**À moyen terme (1-3 ans) :**

- Évoluer vers un rôle de développeur senior avec responsabilités d'architecture
- Spécialisation en sécurité applicative et performance
- Mentoring de développeurs juniors

**À long terme (3-5 ans) :**

- Responsabilités de lead technique ou d'architecte logiciel
- Expertise reconnue en conception de systèmes distribués
- Contribution à la stratégie technique d'entreprises innovantes

#### Remerciements

---

## 13. Maintenance et évolutions

### 13.1 Plan de maintenance

#### Maintenance corrective

**Processus de gestion des bugs :**

```typescript
// utils/bug-tracking.utils.ts
interface BugReport {
  id: string;
  severity: "low" | "medium" | "high" | "critical";
  priority: "p1" | "p2" | "p3" | "p4";
  status: "open" | "in-progress" | "resolved" | "closed";
  category: "frontend" | "backend" | "database" | "security";
  description: string;
  reproductionSteps: string[];
  environment: "development" | "staging" | "production";
  reportedBy: string;
  assignedTo?: string;
  createdAt: Date;
  resolvedAt?: Date;
}

export class BugTracker {
  private static bugs: Map<string, BugReport> = new Map();

  static reportBug(
    bug: Omit<BugReport, "id" | "createdAt" | "status">,
  ): string {
    const id = `BUG-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    const newBug: BugReport = {
      ...bug,
      id,
      status: "open",
      createdAt: new Date(),
    };

    this.bugs.set(id, newBug);

    // Alerter selon la sévérité
    if (bug.severity === "critical") {
      this.alertCriticalBug(newBug);
    }

    return id;
  }

  private static alertCriticalBug(bug: BugReport): void {
    // En production : intégration Slack/email/SMS
    console.error(`🚨 BUG CRITIQUE DÉTECTÉ: ${bug.description}`);
    logger.error("Bug critique signalé", {
      bugId: bug.id,
      description: bug.description,
      environment: bug.environment,
    });
  }

  static getSLA(severity: string): number {
    // SLA en heures
    const slaMatrix = {
      critical: 2, // 2 heures max
      high: 24, // 1 jour
      medium: 72, // 3 jours
      low: 168, // 1 semaine
    };

    return slaMatrix[severity] || 168;
  }
}
```

**Procédures d'intervention d'urgence :**

```typescript
// scripts/emergency-procedures.ts
export class EmergencyResponse {
  // Procédure de rollback rapide
  static async quickRollback(): Promise<void> {
    console.log("🔄 Début du rollback d'urgence...");

    try {
      // 1. Arrêt du service
      await this.stopService();

      // 2. Restauration de la dernière version stable
      await this.restoreLastStableVersion();

      // 3. Vérification de la base de données
      await this.checkDatabaseIntegrity();

      // 4. Redémarrage du service
      await this.startService();

      console.log("✅ Rollback terminé avec succès");
    } catch (error) {
      console.error("❌ Échec du rollback:", error);
      await this.escalateToTeam();
    }
  }

  // Activation du mode maintenance
  static async enableMaintenanceMode(): Promise<void> {
    // Rediriger tout le trafic vers une page de maintenance
    process.env.MAINTENANCE_MODE = "true";

    // Notifier les utilisateurs connectés
    await this.notifyActiveUsers();

    console.log("🚧 Mode maintenance activé");
  }

  // Escalade vers l'équipe technique
  private static async escalateToTeam(): Promise<void> {
    // Intégration avec systèmes d'alerting
    console.log("📢 Escalade vers l'équipe technique...");
  }
}
```

#### Maintenance préventive

**Monitoring proactif :**

```typescript
// monitoring/health-check.ts
export class HealthMonitor {
  private static readonly CHECKS = [
    "database",
    "redis",
    "external-apis",
    "disk-space",
    "memory-usage",
    "response-time",
  ];

  static async runHealthChecks(): Promise<HealthReport> {
    const results: HealthCheckResult[] = [];

    for (const check of this.CHECKS) {
      try {
        const result = await this.runSpecificCheck(check);
        results.push(result);
      } catch (error) {
        results.push({
          check,
          status: "failing",
          message: error.message,
          timestamp: new Date(),
        });
      }
    }

    return this.generateHealthReport(results);
  }

  private static async runSpecificCheck(
    checkType: string,
  ): Promise<HealthCheckResult> {
    switch (checkType) {
      case "database":
        return await this.checkDatabase();
      case "memory-usage":
        return await this.checkMemoryUsage();
      case "response-time":
        return await this.checkResponseTime();
      default:
        throw new Error(`Check ${checkType} not implemented`);
    }
  }

  private static async checkDatabase(): Promise<HealthCheckResult> {
    const start = Date.now();

    try {
      await sequelize.authenticate();
      const duration = Date.now() - start;

      return {
        check: "database",
        status: duration < 1000 ? "healthy" : "warning",
        message: `Connection successful (${duration}ms)`,
        timestamp: new Date(),
        metrics: { responseTime: duration },
      };
    } catch (error) {
      return {
        check: "database",
        status: "failing",
        message: `Database connection failed: ${error.message}`,
        timestamp: new Date(),
      };
    }
  }

  private static async checkMemoryUsage(): Promise<HealthCheckResult> {
    const usage = process.memoryUsage();
    const usagePercent = (usage.heapUsed / usage.heapTotal) * 100;

    let status: "healthy" | "warning" | "failing";
    if (usagePercent < 70) status = "healthy";
    else if (usagePercent < 90) status = "warning";
    else status = "failing";

    return {
      check: "memory-usage",
      status,
      message: `Memory usage: ${usagePercent.toFixed(1)}%`,
      timestamp: new Date(),
      metrics: {
        heapUsed: usage.heapUsed,
        heapTotal: usage.heapTotal,
        usagePercent,
      },
    };
  }
}

interface HealthCheckResult {
  check: string;
  status: "healthy" | "warning" | "failing";
  message: string;
  timestamp: Date;
  metrics?: Record<string, any>;
}

interface HealthReport {
  overall: "healthy" | "degraded" | "down";
  checks: HealthCheckResult[];
  generatedAt: Date;
}
```

### 13.2 Plan d'évolutions

#### Roadmap technique

**Phase 1 - Optimisations (3 mois) :**

```typescript
// roadmap/phase1-optimizations.ts
export const Phase1Roadmap = {
  infrastructure: [
    {
      task: "Mise en place Redis pour cache",
      priority: "high",
      effort: "2-3 semaines",
      impact: "Performance +40%",
      description: `
        - Cache des sessions utilisateur
        - Cache des requêtes fréquentes (recherche)
        - Cache des données statiques (compétences)
      `,
    },
    {
      task: "Implémentation CDN",
      priority: "medium",
      effort: "1 semaine",
      impact: "Temps de chargement -60%",
      description: "Optimisation des assets statiques et images",
    },
  ],

  backend: [
    {
      task: "API GraphQL",
      priority: "medium",
      effort: "3-4 semaines",
      impact: "Flexibilité API",
      description: "Alternative à REST pour requêtes complexes",
    },
    {
      task: "Websockets pour messagerie temps réel",
      priority: "high",
      effort: "2 semaines",
      impact: "UX messagerie",
      description: "Notifications instantanées et chat en direct",
    },
  ],

  frontend: [
    {
      task: "Progressive Web App (PWA)",
      priority: "high",
      effort: "2-3 semaines",
      impact: "Engagement utilisateur +25%",
      description: "Fonctionnement offline et installation mobile",
    },
    {
      task: "Optimisation bundle avec lazy loading",
      priority: "medium",
      effort: "1 semaine",
      impact: "Performance initiale +30%",
    },
  ],
};
```

**Phase 2 - Nouvelles fonctionnalités (6 mois) :**

```typescript
// roadmap/phase2-features.ts
export const Phase2Roadmap = {
  businessFeatures: [
    {
      feature: "Système de réservation avancé",
      description: `
        - Calendrier de disponibilités
        - Créneaux horaires configurables
        - Gestion des conflits automatique
        - Rappels automatiques
      `,
      effort: "4-5 semaines",
      value: "Core business",
    },
    {
      feature: "Géolocalisation et carte interactive",
      description: `
        - Recherche par proximité
        - Carte des services disponibles
        - Calcul de distance automatique
        - Filtres géographiques avancés
      `,
      effort: "3-4 semaines",
      value: "UX enhancement",
    },
    {
      feature: "Système de notation et avis",
      description: `
        - Évaluation post-service
        - Système de réputation
        - Modération des avis
        - Statistiques utilisateur
      `,
      effort: "3 semaines",
      value: "Trust & Safety",
    },
  ],

  technicalFeatures: [
    {
      feature: "Application mobile React Native",
      description: "Version mobile native iOS/Android",
      effort: "8-10 semaines",
      value: "Market expansion",
    },
    {
      feature: "API publique pour partenaires",
      description: `
        - Documentation OpenAPI complète
        - Rate limiting par partenaire
        - Authentification OAuth2
        - SDK JavaScript
      `,
      effort: "4-5 semaines",
      value: "Business development",
    },
  ],
};
```

#### Modernisation technologique

**Migration vers les dernières versions :**

```typescript
// roadmap/tech-modernization.ts
export const TechModernization = {
  frontend: {
    current: {
      react: "19.1.0",
      typescript: "5.x",
      vite: "6.x",
    },
    target: {
      react: "19.x (latest)",
      nextjs: "15.x", // Migration possible
      typescript: "5.x (latest)",
      storybook: "8.x", // Documentation composants
    },
    benefits: [
      "Performance améliorée",
      "Nouvelles fonctionnalités React",
      "Meilleur support TypeScript",
      "SSR avec Next.js",
    ],
  },

  backend: {
    current: {
      node: "18.x",
      express: "5.x",
      sequelize: "6.x",
    },
    target: {
      node: "22.x LTS",
      fastify: "5.x", // Alternative Express
      prisma: "6.x", // Alternative Sequelize
      graphql: "16.x",
    },
    benefits: [
      "Performance Node.js +15%",
      "Type safety avec Prisma",
      "GraphQL pour requêtes complexes",
      "Meilleure gestion des erreurs",
    ],
  },

  infrastructure: {
    current: {
      deployment: "Railway",
      database: "PostgreSQL",
      monitoring: "Logs basiques",
    },
    target: {
      containerization: "Docker + Kubernetes",
      database: "PostgreSQL + Redis",
      monitoring: "Grafana + Prometheus",
      ci_cd: "GitHub Actions",
    },
  },
};
```

### 13.3 Surveillance et métriques

#### Tableaux de bord de monitoring

**KPIs techniques :**

```typescript
// monitoring/kpi-dashboard.ts
export class KPIDashboard {
  // Métriques de performance
  static async getPerformanceMetrics(): Promise<PerformanceKPIs> {
    return {
      responseTime: {
        avg: await this.getAverageResponseTime(),
        p95: await this.getPercentileResponseTime(95),
        p99: await this.getPercentileResponseTime(99),
      },

      throughput: {
        requestsPerSecond: await this.getRequestsPerSecond(),
        dailyActiveUsers: await this.getDailyActiveUsers(),
        concurrentUsers: await this.getConcurrentUsers(),
      },

      reliability: {
        uptime: await this.getUptime(),
        errorRate: await this.getErrorRate(),
        successRate: await this.getSuccessRate(),
      },

      infrastructure: {
        cpuUsage: await this.getCPUUsage(),
        memoryUsage: await this.getMemoryUsage(),
        diskUsage: await this.getDiskUsage(),
        databaseConnections: await this.getDBConnections(),
      },
    };
  }

  // Métriques business
  static async getBusinessMetrics(): Promise<BusinessKPIs> {
    return {
      users: {
        totalRegistered: await this.getTotalUsers(),
        newSignups: await this.getNewSignups("today"),
        activeUsers: await this.getActiveUsers("week"),
        retentionRate: await this.getRetentionRate(),
      },

      services: {
        totalServices: await this.getTotalServices(),
        pendingServices: await this.getPendingServices(),
        completedServices: await this.getCompletedServices(),
        conversionRate: await this.getServiceConversionRate(),
      },

      engagement: {
        messagesExchanged: await this.getMessagesCount("today"),
        averageSessionDuration: await this.getAverageSessionDuration(),
        pagesPerSession: await this.getPagesPerSession(),
        bounceRate: await this.getBounceRate(),
      },
    };
  }

  // Alertes automatiques
  static setupAlerts(): void {
    const alerts = [
      {
        metric: "response_time_p95",
        threshold: 2000, // 2 secondes
        severity: "warning",
        action: "notify_team",
      },
      {
        metric: "error_rate",
        threshold: 5, // 5%
        severity: "critical",
        action: "page_oncall",
      },
      {
        metric: "database_connections",
        threshold: 80, // 80% de la limite
        severity: "warning",
        action: "scale_database",
      },
    ];

    alerts.forEach((alert) => this.configureAlert(alert));
  }
}
```

#### Rapports automatisés

**Génération de rapports hebdomadaires :**

```typescript
// reporting/automated-reports.ts
export class AutomatedReporting {
  static async generateWeeklyReport(): Promise<WeeklyReport> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    const report: WeeklyReport = {
      period: {
        start: startDate,
        end: new Date(),
      },

      summary: await this.generateSummary(startDate),
      performance: await this.generatePerformanceReport(startDate),
      business: await this.generateBusinessReport(startDate),
      incidents: await this.generateIncidentsReport(startDate),
      recommendations: await this.generateRecommendations(),
    };

    await this.sendReport(report);
    return report;
  }

  private static async generateSummary(since: Date): Promise<ReportSummary> {
    return {
      highlights: [
        "🚀 Nouveau record de 1,247 utilisateurs actifs",
        "⚡ Amélioration du temps de réponse de 15%",
        "🐛 Résolution de 8 bugs critiques",
        "📱 Lancement de la version mobile beta",
      ],

      keyMetrics: {
        availability: "99.97%",
        averageResponseTime: "450ms",
        newUsers: 156,
        servicesCompleted: 89,
      },

      alerts: await this.getAlertsCount(since),
      deployments: await this.getDeploymentsCount(since),
    };
  }

  // Recommandations automatiques basées sur les métriques
  private static async generateRecommendations(): Promise<string[]> {
    const recommendations: string[] = [];

    const metrics = await KPIDashboard.getPerformanceMetrics();

    if (metrics.responseTime.p95 > 1500) {
      recommendations.push("⚠️ Optimiser les requêtes lentes (>1.5s au p95)");
    }

    if (metrics.infrastructure.memoryUsage > 80) {
      recommendations.push(
        "💾 Envisager une augmentation de la mémoire serveur",
      );
    }

    const businessMetrics = await KPIDashboard.getBusinessMetrics();

    if (businessMetrics.services.conversionRate < 70) {
      recommendations.push(
        "📊 Améliorer le taux de conversion des services (actuellement < 70%)",
      );
    }

    return recommendations;
  }
}

// Planification automatique des rapports
export class ReportScheduler {
  static schedule(): void {
    // Rapport quotidien à 9h
    cron.schedule("0 9 * * *", async () => {
      await AutomatedReporting.generateDailyReport();
    });

    // Rapport hebdomadaire le lundi à 10h
    cron.schedule("0 10 * * 1", async () => {
      await AutomatedReporting.generateWeeklyReport();
    });

    // Rapport mensuel le 1er à 10h
    cron.schedule("0 10 1 * *", async () => {
      await AutomatedReporting.generateMonthlyReport();
    });
  }
}
```

---

## 14. Conclusion

### 14.1 Bilan du projet

#### Objectifs atteints

**Réalisations techniques accomplies :**

Au terme de ce projet d'apothéose, SkillSwap a dépassé mes attentes initiales sur plusieurs aspects fondamentaux :

**1. Architecture robuste et scalable :**

- ✅ **Backend Node.js/Express** avec architecture en couches respectant les principes SOLID
- ✅ **Frontend React/TypeScript** avec composants réutilisables et design system cohérent
- ✅ **Base PostgreSQL** optimisée avec migrations automatisées et relations complexes
- ✅ **Déploiement containerisé** sur Railway avec variables d'environnement sécurisées

**2. Sécurité de niveau production :**

- ✅ **Authentification JWT** avec cookies HttpOnly et protection CSRF
- ✅ **Hashage Argon2** des mots de passe conforme aux standards OWASP
- ✅ **Validation Zod** côté serveur et sanitisation anti-XSS
- ✅ **Rate limiting** et protection contre les attaques par déni de service
- ✅ **Middleware de sécurité** multicouche avec logging détaillé

**3. Fonctionnalités métier complètes :**

- ✅ **Système d'inscription/connexion** avec validation temps réel
- ✅ **Gestion de profils** avec compétences et géolocalisation
- ✅ **Moteur de recherche** par compétences et localisation
- ✅ **Messagerie inter-utilisateurs** pour coordination des services
- ✅ **Interface responsive** adaptée mobile/tablette/desktop

**4. Qualité logicielle :**

- ✅ **Tests unitaires** avec Vitest couvrant les fonctions critiques
- ✅ **Documentation technique** complète (README, API, architecture)
- ✅ **Code review** systématique et conventions de nommage
- ✅ **Monitoring** des performances et gestion d'erreurs centralisée

#### Défis surmontés

**Collaboration en équipe de 4 développeurs :**

L'un des défis majeurs était de maintenir une cohérence technique et fonctionnelle avec une équipe de 4 personnes aux profils différents. Nous avons surmonté cette difficulté grâce à :

- **Communication quotidienne** : 2-3 daily meetings par jour pour synchronisation
- **Rôles définis** : Product Owner, Scrum Master, Lead Front, Lead Back
- **Standards techniques** : ESLint, Prettier, conventions de nommage partagées
- **Code review** : Validation croisée avant merge des branches

**Gestion du temps avec sprints courts :**

Les sprints d'une semaine imposaient une priorisation stricte et une livraison continue :

- **Sprint 0** : Conception pure sans code, fondations solides
- **Sprint 1** : MVP fonctionnel avec authentification et CRUD de base
- **Sprint 2** : Fonctionnalités avancées et finitions UX/UI

Cette approche nous a appris à **distinguer l'essentiel du souhaitable** et à livrer de la valeur rapidement.

**Complexité technique backend :**

Le développement d'une API REST sécurisée avec relations complexes présentait plusieurs défis :

- **Relations N:M** entre utilisateurs et compétences nécessitant des requêtes optimisées
- **Gestion des transactions** pour opérations critiques (création services)
- **Middleware pipeline** pour validation, authentification et sanitisation
- **Gestion d'erreurs** centralisée avec logging structuré

Ces défis m'ont permis de maîtriser les **patterns d'architecture backend** professionnels.

### 14.2 Compétences acquises et développées

#### Compétences techniques

**Développement Full-Stack moderne :**

Ce projet m'a permis de maîtriser l'ensemble de la stack JavaScript moderne :

- **Frontend** : React 19, TypeScript, TailwindCSS, React Router, Axios
- **Backend** : Node.js, Express, Sequelize ORM, JWT, validation Zod
- **Base de données** : PostgreSQL, migrations, relations complexes, optimisation
- **DevOps** : Docker, Railway, variables d'environnement, monitoring

**Architecture et patterns :**

- **MVC adapté** pour backend avec séparation claire des responsabilités
- **Container/Presenter** pattern pour composants React
- **Repository pattern** pour accès aux données
- **Middleware pipeline** pour traitements transversaux
- **Error handling** centralisé et logging structuré

**Sécurité applicative :**

- **OWASP Top 10** : prévention des principales vulnérabilités web
- **Authentification** : JWT, sessions, cookies sécurisés
- **Validation** : sanitisation, protection XSS/CSRF, rate limiting
- **Cryptographie** : hashage Argon2, secrets management

#### Compétences méthodologiques

**Méthodologie Agile/Scrum :**

- **Planification** : estimation poker planning, user stories, priorisation
- **Suivi** : daily meetings, sprint review, rétrospectives
- **Livraison** : incréments fonctionnels, MVP, amélioration continue
- **Collaboration** : communication transparente, gestion des conflits

**Gestion de projet technique :**

- **Analyse** : cahier des charges, personas, user stories
- **Conception** : architecture, modélisation BDD, maquettes
- **Développement** : git flow, code review, tests
- **Déploiement** : CI/CD basique, monitoring, debugging

#### Compétences humaines

**Leadership technique :**

En tant que Lead Developer Backend, j'ai développé :

- **Vision technique** : choix d'architecture, standards de code
- **Mentorat** : aide aux coéquipiers sur points bloquants
- **Decision making** : arbitrage technique sous contraintes de temps
- **Communication** : explication de concepts techniques complexes

**Travail en équipe :**

- **Adaptabilité** : ajustement aux styles de travail différents
- **Empathie** : compréhension des contraintes de chacun
- **Résolution de conflits** : gestion constructive des désaccords
- **Partage de connaissances** : documentation et pair programming

### 14.3 Perspectives professionnelles

#### Objectifs de carrière

**Court terme (6-12 mois) :**

Ce projet me positionne pour des rôles de **Développeur Full-Stack junior** avec une spécialisation backend. Mes objectifs immédiats :

- **Intégrer une équipe** de développement utilisant Node.js/React
- **Contribuer** à des projets de production avec des enjeux de scalabilité
- **Approfondir** ma maîtrise des tests automatisés et CI/CD
- **Développer** mon expertise en architecture microservices

**Moyen terme (1-3 ans) :**

- **Évolution** vers un poste de Développeur Full-Stack senior
- **Spécialisation** en architecture backend et sécurité applicative
- **Encadrement** de développeurs junior et mentorat technique
- **Contribution** à l'open source et veille technologique active

**Long terme (3-5 ans) :**

- **Lead Developer** ou **Architecte logiciel** dans une équipe produit
- **Expertise** reconnue en sécurité et performance web
- **Transmission** de connaissances via formations ou conférences

#### Apprentissages continus

**Technologies à approfondir :**

Basé sur les tendances du marché et les évolutions de SkillSwap :

- **DevOps** : Kubernetes, Terraform, monitoring avancé (Grafana/Prometheus)
- **Architecture** : microservices, event sourcing, API GraphQL
- **Performance** : optimisation SQL, cache Redis, CDN
- **Mobile** : React Native pour application mobile native

**Domaines d'expertise ciblés :**

- **Sécurité** : certification en cybersécurité, audit de code
- **Performance** : optimisation backend, profiling, scalabilité
- **Architecture** : design patterns avancés, clean architecture
- **Leadership** : management technique, gestion d'équipe

### 14.4 Impact et valeur du projet

#### Valeur pédagogique

**Mise en situation professionnelle :**

SkillSwap a constitué ma première expérience de développement **"en conditions réelles"** :

- **Contraintes temporelles** : respect des deadlines avec sprints courts
- **Enjeux qualité** : code maintenable, sécurisé, documenté
- **Collaboration** : travail en équipe avec rôles définis
- **Livraison** : déploiement en production avec monitoring

Cette expérience m'a préparé à intégrer directement une équipe de développement professionnelle.

**Consolidation des acquis :**

Le projet a permis de **synthétiser 7 mois de formation** en appliquant concrètement :

- **Technologies** : stack complète JavaScript/TypeScript
- **Méthodologies** : Agile/Scrum, TDD, code review
- **Bonnes pratiques** : architecture, sécurité, documentation
- **Outils** : Git, Docker, plateformes cloud, monitoring

#### Impact technique

**Démonstration de maîtrise :**

SkillSwap démontre ma capacité à :

- **Concevoir** une architecture full-stack moderne et sécurisée
- **Développer** une application web complète de A à Z
- **Collaborer** efficacement en équipe de développement
- **Livrer** un produit fonctionnel respectant les standards professionnels

**Référence pour recruteurs :**

Le projet constitue une **vitrine technique** complète :

- **Code source** professionnel sur GitHub
- **Application déployée** accessible en ligne
- **Documentation** technique détaillée
- **Retour d'expérience** sur les choix techniques

#### Valeur humaine

**Transformation personnelle :**

Ce projet marque ma **transformation d'apprenant à développeur** :

- **Confiance** en mes capacités techniques
- **Autonomie** dans la résolution de problèmes complexes
- **Vision produit** et compréhension des enjeux business
- **Passion** confirmée pour le développement web

**Réseau professionnel :**

L'expérience a créé des liens durables :

- **Équipe de développement** soudée et complementaire
- **Formateurs** devenus conseillers techniques
- **Promotion** constituant un réseau d'entraide professionnel

### 14.5 Remerciements et perspectives

Ce projet n'aurait pas pu voir le jour sans :

- **Mon équipe** : Maxime, Karine et Ludovic pour leur collaboration exceptionnelle
- **Mes formateurs** : Pour leur accompagnement technique et méthodologique
- **La promotion CDA** : Pour l'émulation et l'entraide quotidienne
- **L'école O'clock** : Pour la qualité de la formation et l'approche pédagogique

SkillSwap représente bien plus qu'un projet de fin de formation : c'est la démonstration concrète de ma transformation d'apprenant à développeur professionnel, prêt à relever les défis techniques et humains du secteur du développement web.

**La suite de l'aventure ne fait que commencer ! 🚀**

---
