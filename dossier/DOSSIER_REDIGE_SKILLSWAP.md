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

#### Couche présentation (Frontend)

**React + TypeScript + Tailwind CSS**

L'architecture frontend suit le pattern **Container/Presenter** avec une organisation modulaire :

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base
│   ├── forms/          # Formulaires spécialisés
│   └── layout/         # Mise en page
├── pages/              # Pages de l'application
├── hooks/              # Hooks personnalisés
├── services/           # Services API
├── types/              # Types TypeScript
└── lib/                # Utilitaires
```

**Composants principaux :**

- **Layout** : Navigation, header, footer
- **Forms** : Authentification, profil, services
- **Cards** : Profils utilisateurs, services
- **Modals** : Confirmations, détails
- **Router** : Gestion des routes protégées

**État de l'application :**

- **React Query** : Cache et synchronisation serveur
- **Context API** : État d'authentification global
- **Local Storage** : Persistance du token JWT

#### Couche métier (Backend)

**Node.js + Express + TypeScript**

Architecture en couches respectant les principes SOLID :

```
src/
├── controllers/        # Logique de contrôle
├── middleware/         # Traitements transversaux
├── models/            # Modèles Sequelize
├── routers/           # Définition des routes
├── schemas/           # Validation Zod
├── migrations/        # Scripts de base de données
└── tests/             # Tests unitaires et intégration
```

**Middleware stack :**

1. **CORS** : Configuration cross-origin
2. **Body parsing** : JSON et URL-encoded
3. **Cookie parser** : Gestion des cookies JWT
4. **Auth middleware** : Vérification des tokens
5. **Validation** : Schemas Zod pour les entrées
6. **Sanitization** : Nettoyage des données
7. **Error handling** : Gestion centralisée des erreurs

**Controllers responsabilités :**

- **AuthController** : Authentification et autorisation
- **UserController** : Gestion des profils utilisateurs
- **ServiceController** : CRUD des services
- **MessageController** : Système de messagerie
- **SkillController** : Gestion des compétences

#### Couche données (Database)

**PostgreSQL + Sequelize ORM**

Configuration robuste avec gestion des environnements :

```typescript
// database/client.ts
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  logging: process.env.NODE_ENV !== "production",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
```

**Modèles Sequelize :**

- Relations automatiques entre entités
- Validations au niveau ORM
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

**Avantages :**

- Séparation claire des responsabilités
- Code réutilisable et testable
- Facilite la maintenance et évolution

**Pattern Container/Presenter (Frontend) :**

J'ai appliqué ce pattern pour séparer la logique métier de l'affichage :

```tsx
// Container : Gestion de l'état et logique
function PersonalPageContainer() {
  const [services, setServices] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);

  // Logique de chargement des données
  useEffect(() => {
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
    <div>
      {services.map((service) => (
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

#### Architecture des composants React

**Hiérarchie et réutilisabilité :**

```
App
├── Layout Components
│   ├── Header (navigation, user menu)
│   ├── Footer (links, copyright)
│   └── Sidebar (filters, categories)
├── Page Components
│   ├── HomePage (landing, recent users)
│   ├── PersonalPage (dashboard, services)
│   └── SearchPage (filters, results)
├── Feature Components
│   ├── ServiceCard (display, actions)
│   ├── UserCard (profile preview)
│   └── MessageModal (communication)
└── UI Components
    ├── Button (variants, sizes)
    ├── Card (container styling)
    └── Form (inputs, validation)
```

**Exemple de composant réutilisable :**

```tsx
// components/ui/Button.tsx
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      loading,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          // Styles de base
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

          // Variants
          {
            "bg-blue-600 text-white hover:bg-blue-700": variant === "default",
            "border border-gray-300 bg-transparent hover:bg-gray-50":
              variant === "outline",
            "bg-transparent hover:bg-gray-100": variant === "ghost",
          },

          // Sizes
          {
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4": size === "md",
            "h-12 px-8 text-lg": size === "lg",
          },

          className,
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Spinner className="mr-2 h-4 w-4" />}
        {children}
      </button>
    );
  },
);

export { Button };
```

#### Organisation du code backend

**Structure modulaire par fonctionnalité :**

```
src/
├── controllers/
│   ├── auth.controller.ts      # Authentification
│   ├── user.controller.ts      # Gestion utilisateurs
│   ├── service.controller.ts   # Services/réservations
│   └── message.controller.ts   # Messagerie
├── middleware/
│   ├── auth.middleware.ts      # Vérification JWT
│   ├── validation.middleware.ts # Validation Zod
│   └── sanitizer.middleware.ts # Nettoyage données
├── models/
│   ├── User.model.ts          # Modèle utilisateur
│   ├── Service.model.ts       # Modèle service
│   └── associations.ts       # Relations Sequelize
├── routers/
│   ├── auth.router.ts         # Routes auth
│   ├── user.router.ts         # Routes users
│   └── service.router.ts      # Routes services
└── schemas/
    ├── auth.schema.ts         # Validation auth
    └── service.schema.ts      # Validation services
```

**Middleware pipeline bien organisé :**

```typescript
// routers/service.router.ts
import { Router } from "express";
import { verifyToken } from "../middleware/auth.middleware";
import { bodySanitizerMiddleware } from "../middleware/body-sanitizer";
import { validateService } from "../schemas/service.schema";
import serviceController from "../controllers/service.controller";

const serviceRouter = Router();

// Pipeline middleware pour création de service
serviceRouter.post(
  "/",
  verifyToken, // 1. Authentification
  bodySanitizerMiddleware, // 2. Sanitisation
  validateService, // 3. Validation
  serviceController.create, // 4. Logique métier
);

export default serviceRouter;
```

Cette architecture modulaire et ces choix techniques nous ont permis de livrer une application robuste, sécurisée et maintenable dans les délais impartis du projet d'apothéose.

---

_[À continuer avec les sections 9 à 16 selon le plan établi : sécurité, tests, veille, etc.]_
