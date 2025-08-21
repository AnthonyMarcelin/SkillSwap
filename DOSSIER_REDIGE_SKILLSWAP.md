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

Les enjeux de ce type de plateforme sont multiples. SkillSwap permet de profiter de services d'autres membres de la communauté tout en mettant en avant ses propres compétences. Cela est très utile lorsque nous avons un besoin ponctuel dans une catégorie spécifique.

**Exemple concret :** Je suis inscrit sur la plateforme SkillSwap en ayant renseigné "informatique" dans mes compétences. Pour un besoin ponctuel, je veux monter un meuble et je ne suis absolument pas manuel. Je peux donc faire une recherche de "bricolage" sur SkillSwap dans mon département pour trouver un autre membre autour de chez moi qui propose ce service. Cela m'évite de devoir m'équiper en outillage par exemple juste pour un besoin ponctuel.

**Autre exemple :** J'ai du temps libre et je veux m'initier au jardinage. Dans le même temps, j'ai des compétences en mécanique. Je peux très bien contacter un autre membre et pourquoi pas obtenir de l'aide pour avoir des astuces en jardinage et en échange donner des cours de mécanique ou aider un membre à réparer son véhicule.

Dans un contexte économique compliqué, cela peut éviter des frais onéreux tout en ayant comblé un besoin nécessaire. De plus, cela peut permettre de créer des liens sociaux, de rompre la solitude pour certaines personnes isolées ou seules.

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

Pour tout cela, nous voulions une architecture moderne facilement maintenable, rapidement mise en place au vu de la courte durée disponible pour réaliser le projet, et une scalabilité pour le backend en cas de montée en charge des serveurs suivant l'évolution et le nombre d'utilisateurs de la plateforme.

Le but était aussi et avant tout pédagogique et devait nous permettre de mettre en œuvre le maximum de stack technique que nous avions appris durant notre formation afin de démontrer notre capacité à développer une application sécurisée en couches et prévoir le déploiement de celle-ci avec les outils mis à notre disposition. Le tout en respectant les bonnes pratiques usuelles du développement.

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

Nous avons réfléchi au fonctionnement de notre application dans les grandes lignes :

1. **Landing page** avec la présentation de SkillSwap, quelques profils aléatoires et les derniers inscrits
2. **Système d'inscription/connexion** sécurisé
3. **Gestion de profil avancée** avec ses compétences, ses intérêts et ses disponibilités
4. **Moteur de recherche** par catégorie de compétences et géographique
5. **Système de messagerie** entre membres pour entamer un échange
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

J'ai ressenti une petite frustration à l'issue du projet : le délai imparti étant relativement court, nous avions beaucoup d'idées à intégrer dans notre projet, et tout n'a pas pu être mis en place. C'est pour moi la première mise en situation pseudo-professionnelle où l'on avait la mainmise sur un cas concret à créer de A à Z en équipe.

Nous avions 3 sprints d'une semaine chacun, avec à l'issue une présentation rapide devant les autres membres de notre promotion, avec 8 minutes de présentation et 8 minutes de questions/réponses sur ce qui avait été fait lors du dernier sprint. Donc 4,5 jours à travailler concrètement sur le projet.

Néanmoins, cela nous a appris à prioriser et à livrer un MVP fonctionnel.

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

_[À continuer avec les sections 6 à 16 selon le plan établi : spécifications fonctionnelles, techniques, réalisations, sécurité, tests, veille, etc.]_
