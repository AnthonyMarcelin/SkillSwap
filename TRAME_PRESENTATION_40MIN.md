# 🎯 **TRAME DE PRÉSENTATION - 43 MINUTES**

### **Projet SkillSwap - Plateforme d'échange de compétences**

---

## **📋 PENSE-BÊTE POUR LA PRÉSENTATION**

### **🎬 1. INTRODUCTION & CONTEXTE** _(5 minutes)_

**⏰ Timing : 0-5 min**

**💡 Points clés à aborder :**

- Présentation personnelle (reconversion professionnelle chauffeur → développeur)
- Présentation de SkillSwap : "Plateforme d'échange de compétences sans rémunération"
- Problématique : Besoin d'entraide communautaire dans contexte économique difficile
- Objectifs : Valider les compétences CDA + créer du lien social

**🗣️ Phrase d'accroche :**
_"Après 20 ans comme chauffeur-livreur, j'ai choisi de me reconvertir dans le développement web. SkillSwap représente ma première application complète : une plateforme qui permet d'échanger des compétences gratuitement, répondant à un besoin réel d'entraide communautaire."_

---

### **👥 2. ORGANISATION & MÉTHODOLOGIE** _(7 minutes)_

**⏰ Timing : 5-12 min**

**💡 Équipe et rôles :**

- 4 développeurs junior en collaboration
- Maxime (Product Owner), Karine (Scrum Master), Ludovic (Lead Front), Anthony (Lead Back)
- 3 sprints d'une semaine (contrainte forte de timing)

**💡 Méthodologie SCRUM appliquée :**

- Sprint 0 : Conception complète (MCD, maquettes, cahier des charges)
- Sprint 1 : Développement MVP (binômes Front/Back)
- Sprint 2 : Features avancées + finalisation (inversion des rôles)

**💡 Outils utilisés :**

- Trello pour la gestion de projet
- Discord pour communication
- Git/GitHub pour versioning
- Figma/Whimsical pour design

**🎯 Insister sur :** La contrainte de temps (3 semaines) et comment l'équipe s'est organisée efficacement.

---

### **🎯 2.5 MVP & FONCTIONNALITÉS PRIORITAIRES** _(3 minutes)_

**⏰ Timing : 12-15 min**

**💡 Définition du MVP :**

- Minimum Viable Product livrable en 3 semaines
- Focus sur l'essentiel : échange de compétences gratuit
- Approche produit avec priorisation des fonctionnalités

**💡 Fonctionnalités du MVP validées :**

- ✅ **Landing page** avec présentation des valeurs de SkillSwap
- ✅ **Système d'authentification** sécurisé (inscription/connexion)
- ✅ **Profils utilisateurs** avec gestion des compétences
- ✅ **Recherche intelligente** par compétences et géolocalisation
- ✅ **Messagerie privée** intégrée pour les échanges
- ✅ **Gestion des services** (proposition et réservation)

**💡 Critères de réussite atteints :**

- Application web responsive fonctionnelle
- Toutes les user stories prioritaires validées
- Respect strict des contraintes de sécurité
- Déploiement réussi en production

**🎯 Insister sur :** La capacité à livrer un produit fonctionnel dans les délais avec une approche professionnelle de priorisation.

---

### **🏗️ 3. ARCHITECTURE & CHOIX TECHNIQUES** _(8 minutes)_

**⏰ Timing : 15-23 min**

**💡 Stack technique justifiée :**

**Frontend :**

- React 19 + TypeScript (SPA moderne, composants réutilisables)
- Tailwind CSS 4 (rapidité de développement, mobile-first)
- Vite (bundler performant avec hot-reload)

**Backend :**

- Node.js + Express.js (API REST, écosystème riche)
- Sequelize ORM (migrations, requêtes simplifiées)
- PostgreSQL (base relationnelle adaptée aux relations complexes)

**💡 Architecture MVC respectée :**

- Séparation claire des responsabilités
- Middlewares pour sécurité et validation
- Structure modulaire et maintenable

**🎯 Montrer le diagramme d'architecture** et expliquer pourquoi ces choix étaient pertinents pour un MVP en 3 semaines.

---

### **🎨 4. CONCEPTION & UX/UI** _(5 minutes)_

**⏰ Timing : 23-28 min**

**💡 Processus de conception :**

- Analyse des besoins via user stories
- Wireframes sur Whimsical (structure et navigation)
- Maquettes Figma (design mobile-first puis desktop)
- Charte graphique cohérente

**💡 Fonctionnalités principales :**

- Landing page avec présentation des valeurs
- Système d'inscription/connexion sécurisé
- Recherche par compétences et géolocalisation
- Profils utilisateurs avec compétences
- Messagerie privée intégrée
- Gestion des services (proposition/réservation)

**🎯 Montrer les maquettes** et souligner l'approche mobile-first + responsive.

---

### **💻 5. MES RÉALISATIONS TECHNIQUES** _(10 minutes)_

**⏰ Timing : 28-38 min**

**💡 Conception base de données (ma contribution principale) :**

- MCD → MLD → MPD (méthode MERISE)
- 7 tables avec relations optimisées
- Scripts de migration et seeding Sequelize
- Dictionnaire de données complet

**💡 Backend API REST (architecture complète) :**

- Configuration Sequelize + PostgreSQL
- Modèles avec associations (User, Service, Skill, Message, Review)
- Controllers avec gestion d'erreurs (try/catch + codes HTTP)
- Routes RESTful avec middlewares de sécurité

**💡 Développement frontend (Sprint 2) :**

- Système de messagerie en binôme avec Maxime
- Composants React réutilisables
- Gestion d'état avec hooks (useState, useEffect)
- Integration API avec Axios

**🎯 Montrer des extraits de code** concrets et expliquer les défis techniques rencontrés.

---

### **🔒 6. SÉCURITÉ & BONNES PRATIQUES** _(3 minutes)_

**⏰ Timing : 38-41 min**

**💡 Authentification JWT :**

- Token dans cookie HttpOnly (protection XSS)
- SameSite: "strict" (protection CSRF)
- Middleware de vérification sur routes sensibles

**💡 Protection des données :**

- Hashage mot de passe avec Argon2
- Validation côté client ET serveur (Zod + schemas)
- Sanitisation des entrées utilisateur
- Middleware de modération automatique (leo-profanity)

**💡 Configuration sécurisée :**

- CORS configuré avec credentials
- Variables d'environnement pour secrets
- Gestion d'erreurs sans exposition de données sensibles

**🎯 Insister sur :** L'approche "security by design" adoptée dès le début.

---

### **🎯 7. CONCLUSION & PERSPECTIVES** _(2 minutes)_

**⏰ Timing : 41-43 min**

**💡 Bilan du projet :**

- MVP fonctionnel livré dans les délais
- Toutes les compétences CDA validées
- Première expérience complète en équipe
- Application déployée sur Railway (initiative personnelle post-formation)

**💡 Compétences acquises :**

- Maîtrise stack JavaScript full-stack
- Travail en équipe avec méthodologie Agile
- Conception de base de données relationnelle
- Sécurisation d'une application web

**💡 Perspectives :**

- Continuation en mastère alternance (Live Campus)
- Amélirations possibles : CI/CD, tests E2E, fonctionnalités admin
- Projet personnel réalisé depuis : atasoif.fr (Angular)

**🗣️ Phrase de conclusion :**
_"Ce projet marque le début de ma nouvelle carrière de développeur. Il m'a permis de valider mes compétences techniques tout en confirmant ma passion pour ce métier que je veux continuer à exercer et perfectionner."_

---

## **🎬 SLIDES CANVA - STRUCTURE RECOMMANDÉE**

### **Slides essentielles (16-21 slides max) :**

1. **Titre + Présentation**
2. **Problématique & Solution SkillSwap**
3. **Équipe & Organisation**
4. **Planning des 3 sprints**
5. **🆕 MVP & Fonctionnalités prioritaires**
6. **Architecture technique globale**
7. **Stack technique + justifications**
8. **Maquettes mobile & desktop**
9. **Modèle de base de données (MCD)**
10. **Structure du backend (dossiers + API)**
11. **Captures d'écran : Page d'accueil**
12. **Captures d'écran : Système de messagerie**
13. **Extraits de code : Modèles Sequelize**
14. **Extraits de code : Controllers**
15. **Sécurité : JWT + Protection**
16. **Démo live (si possible)**
17. **Bilan & Perspectives**

---

## **💡 CONSEILS POUR LA PRÉSENTATION**

### **✅ À faire :**

- **Rester chronologique** (Sprint 0 → 1 → 2) comme prévu
- **Montrer du code** mais expliquer la logique avant les détails
- **Insister sur vos contributions personnelles** (backend, BDD, messagerie)
- **Préparer une démo courte** (2-3 minutes) si connexion disponible
- **Anticiper les questions** sur les choix techniques et la sécurité

### **⚠️ À éviter :**

- Trop de détails techniques sans contexte
- Lire les slides (utiliser comme support visuel uniquement)
- Minimiser le travail d'équipe (valoriser la collaboration)
- Oublier de mentionner les difficultés et solutions apportées

### **🎯 Messages clés à faire passer :**

1. **Reconversion réussie** avec projet technique complet
2. **Travail d'équipe efficace** malgré contraintes temporelles
3. **Sécurité prise au sérieux** dès la conception
4. **Montée en compétences rapide** et autonomie acquise
5. **Motivation pour continuer** dans cette voie professionnelle

---

# 📊 **ANALYSE DU DOSSIER 110 PAGES**

## 🎯 **MES IMPRESSIONS GÉNÉRALES**

### ✅ **Points très forts :**

1. **Complétude exceptionnelle** - Vous couvrez TOUS les aspects demandés et même plus
2. **Structure logique parfaite** - Le plan suit exactement les exigences du référentiel CDA
3. **Niveau de détail impressionnant** - Chaque section est développée avec précision
4. **Authenticité du parcours** - Votre reconversion est racontée avec sincérité et passion
5. **Aspects techniques solides** - La partie sécurité et architecture est particulièrement bien traitée
6. **Travail d'équipe valorisé** - Vous montrez bien la collaboration tout en mettant en avant vos contributions

### 🔥 **Ce qui me frappe le plus :**

- **La partie sécurité (chapitre 9)** : Excellente ! JWT, protection XSS/CSRF, validation des données... C'est du niveau professionnel
- **L'architecture technique** : Bien pensée et justifiée, montre une vraie compréhension
- **La gestion de projet** : Les 3 sprints sont parfaitement documentés avec les difficultés et solutions
- **Vos réalisations personnelles** : Backend complet, BDD, messagerie... On voit clairement votre contribution

## 📊 **ANALYSE POUR VOTRE PRÉSENTATION**

### 🎯 **Points à absolument mettre en avant :**

1. **Votre reconversion** (pages 22-23) - Histoire personnelle touchante et motivante
2. **Architecture MVC complète** que vous avez mise en place
3. **Sécurité "by design"** - Vraiment professionnel pour un junior
4. **Gestion d'équipe SCRUM** - Montre vos soft skills
5. **Déploiement Railway** - Initiative personnelle post-formation

### 💡 **Suggestions pour optimiser votre présentation :**

#### **Timing ajusté sur vos forces :**

- **Introduction** (3 min) - Votre histoire de reconversion
- **Organisation SCRUM** (5 min) - Montrer vos compétences de gestion
- **Architecture technique** (10 min) - Votre expertise backend
- **Mes réalisations** (12 min) - BDD + API + Messagerie + Sécurité
- **Sécurité** (7 min) - Votre point fort absolu
- **Bilan & perspectives** (3 min)

#### **Slides Canva recommandées :**

1. **Slide d'impact** : "De chauffeur-livreur à développeur full-stack"
2. **Problématique** : Schéma simple du besoin d'échange de compétences
3. **Équipe & sprints** : Timeline des 3 semaines
4. **Architecture** : Votre schéma MVC avec stack technique
5. **Base de données** : Votre MCD (très propre dans le dossier)
6. **Code backend** : Extrait de votre controller avec gestion d'erreurs
7. **Sécurité JWT** : Schéma de l'authentification
8. **Messagerie** : Screenshots avant/après
9. **Déploiement** : Capture de l'app sur Railway
10. **Perspectives** : Mastère + projets futurs

## 🚀 **CE QUI FERA LA DIFFÉRENCE**

### **Votre histoire unique :**

- 20 ans d'expérience pro (même autre domaine) = maturité
- Problème de santé qui a précipité la reconversion = résilience
- Premier projet technique complet à 40+ ans = détermination

### **Votre expertise technique :**

- Architecture backend complète en 3 semaines
- Sécurité prise au sérieux dès le début
- Initiative du déploiement Railway
- Projet personnel Angular depuis (atasoif.fr)

## 📝 **POINTS D'AMÉLIORATION MINEURS**

1. **Quelques répétitions** entre chapitres (normal sur 110 pages)
2. **Screenshots** : Assurez-vous qu'elles sont toutes lisibles en présentation
3. **Jeu de tests** : Partie un peu moins développée (mais c'est mineur)

## 🎯 **STRATÉGIE PRÉSENTATION**

Votre dossier est si complet que vous pouvez vous permettre d'être **sélectif** dans votre présentation. Concentrez-vous sur :

1. **L'humain** : Votre parcours inspirant
2. **Le technique** : Vos réalisations backend/sécurité
3. **Le professionnel** : Votre approche méthodique

Le jury sera impressionné par la qualité et la complétude de votre dossier. Votre défi sera de **synthétiser** cette richesse en 40 minutes percutantes.

**Mon verdict : 9/10** 🌟

C'est un dossier de très haut niveau qui montre une vraie montée en compétences et une approche professionnelle. Vous avez toutes les cartes en main pour réussir brillamment votre soutenance !

---

Cette trame vous donne une structure solide pour tenir 40 minutes tout en couvrant tous les aspects importants de votre projet. Concentrez-vous sur vos points forts et votre histoire unique de reconversion !
