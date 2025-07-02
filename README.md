# SkillSwap

## Lancer le projet

1. Assurez-vous d’avoir Docker et Node.js installés.
2. Installez les dépendances à la racine du monorepo :
   ```sh
   npm install
   ```
3. Lancez le projet (backend via Docker + frontend en mode dev) :
   ```sh
   npm run dev
   ```

Le backend (API + BDD) sera lancé dans des conteneurs Docker, et le frontend sera accessible sur http://localhost:5173.

## Scripts npm à la racine

### Démarrage et développement

- **npm run dev** : Lance le backend via Docker (API + BDD) et le frontend en mode développement (Vite) en parallèle.
- **npm run dev:all** : Démarre le backend via Docker puis le frontend en mode développement (équivalent à lancer d'abord la BDD/API puis le front).
- **npm run dev:front** : Lance uniquement le frontend en mode développement (Vite).

### Docker backend (API + BDD)

- **npm run docker:back** : Démarre le backend (API) et la base de données via Docker Compose (en arrière-plan).
- **npm run docker:back:down** : Arrête les conteneurs Docker du backend (API + BDD), mais garde les volumes de données.
- **npm run docker:all** : Alias pour démarrer tous les services Docker du backend (API + BDD).
- **npm run stop:all** : Arrête tous les services Docker du backend (API + BDD), sans supprimer les volumes.
- **npm run rm:back** : Supprime les conteneurs Docker du backend, mais garde les volumes de données (les données de la BDD sont conservées).
- **npm run rm:back:all** : Supprime les conteneurs Docker du backend ET les volumes (toutes les données de la BDD sont effacées).
