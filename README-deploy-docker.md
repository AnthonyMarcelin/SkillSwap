# Déploiement via Docker — SkillSwap

Ce document décrit comment déployer SkillSwap sur un serveur personnel à l'aide de Docker et Docker Compose. Il explique comment préparer les variables d'environnement, builder et lancer les services (Postgres, backend, frontend) et comment importer un dump SQL (Railway) dans la base.

Important : ne commite jamais le fichier `.env` contenant des secrets sur Git.

## Prérequis

- Docker et Docker Compose installés sur le serveur.
- Git (pour cloner le repo) ou accès direct aux fichiers.
- Au moins 1.5–2 GB de RAM pour builder certains modules natifs (argon2). Si ton VPS est petit, build sur une machine plus puissante puis pousse l'image vers un registry.

## Récupérer le code

Sur ton serveur :

```bash
git clone https://github.com/AnthonyMarcelin/SkillSwap.git
cd SkillSwap
git fetch origin
git checkout feature/docker-deploy
```

## Préparer les variables d'environnement

Copie `.env.example` en `.env` et édite-le :

```bash
cp .env.example .env
nano .env
```

Remplace les valeurs sensibles : `POSTGRES_PASSWORD`, `JWT_SECRET_KEY`, etc.

Sécurise le fichier :

```bash
chmod 600 .env
```

Note : Docker Compose lit automatiquement `.env` dans le dossier contenant `docker-compose.yml`. Si tu veux spécifier un autre fichier :

```bash
docker compose --env-file /chemin/vers/.env up --build -d
```

## Lancer la stack

Depuis la racine du repo (où se trouve `docker-compose.yml`) :

```bash
docker compose up --build -d
```

Cela construira et démarrera :
- `db` — Postgres
- `back` — backend Node/TS
- `front` — frontend servi par nginx (port 8080 exposé)

Vérifie les services :

```bash
docker compose ps
docker compose logs -f back
docker compose logs -f front
```

## Importer un dump SQL (Railway)

Copie le dump sur le serveur (scp) ou téléverse-le dans `/home/tonuser`.

Puis (si c'est un fichier SQL non compressé) :

```bash
DB_CONTAINER=$(docker compose ps -q db)
docker cp /chemin/vers/dump.sql ${DB_CONTAINER}:/tmp/dump.sql
docker exec -u postgres -i ${DB_CONTAINER} psql -U $POSTGRES_USER -d $POSTGRES_DB -f /tmp/dump.sql
```

Si le dump est compressé `.sql.gz` :

```bash
DB_CONTAINER=$(docker compose ps -q db)
docker cp /chemin/vers/dump.sql.gz ${DB_CONTAINER}:/tmp/dump.sql.gz
docker exec -u postgres -i ${DB_CONTAINER} sh -c "gunzip -c /tmp/dump.sql.gz | psql -U $POSTGRES_USER -d $POSTGRES_DB"
```

Après import, vérifie que les tables existent :

```bash
docker exec -u postgres -it ${DB_CONTAINER} psql -U $POSTGRES_USER -d $POSTGRES_DB -c "\dt"
```

## Migrations & seeds

Le `docker-compose` et les Dockerfiles configurés dans cette branche exécutent les migrations/seeds au démarrage du conteneur `back` (commande `npm run db:create` etc.). En production, il est préférable d'exécuter ces migrations manuellement via un job CI ou une commande CLI contrôlée.

Commande manuelle (si besoin) :

```bash
docker compose exec back npm run db:create
docker compose exec back npm run db:alter:service-status
docker compose exec back npm run db:seed
```

## Vérifications et debugging

- Voir les logs du backend : `docker compose logs -f back`.
- Tester l'API : `curl http://localhost:3000/health` (ou la route health disponible).
- Si `argon2` ou un module natif échoue au build : privilégie une image avec les outils de build installés (notre Dockerfile back inclut `build-essential` et `python3`). Si ton VPS manque de RAM, build en local et push l'image vers un registry.

## Bonnes pratiques pour la production

- Utilise un reverse-proxy (nginx/Traefik) pour TLS et gestion des ports.
- Ne laisse pas Postgres exposé publiquement ; communique uniquement sur le réseau interne du compose ou via VPN.
- Utilise des Docker secrets pour les vraies clés (surtout en production).
- Prévois des sauvegardes régulières de la base (cron + pg_dump vers un stockage externe).

## Script d'import rapide (optionnel)

Crée `scripts/import_dump.sh` sur le serveur avec le contenu suivant et rends-le exécutable :

```bash
#!/usr/bin/env bash
set -euo pipefail
if [ -z "${1-}" ]; then
  echo "Usage: $0 /chemin/vers/dump.sql[.gz]"
  exit 1
fi
DUMP_PATH=$1
DB_CONTAINER=$(docker compose ps -q db)
if [[ $DUMP_PATH == *.gz ]]; then
  docker cp "$DUMP_PATH" ${DB_CONTAINER}:/tmp/dump.sql.gz
  docker exec -u postgres -i ${DB_CONTAINER} sh -c "gunzip -c /tmp/dump.sql.gz | psql -U $POSTGRES_USER -d $POSTGRES_DB"
else
  docker cp "$DUMP_PATH" ${DB_CONTAINER}:/tmp/dump.sql
  docker exec -u postgres -i ${DB_CONTAINER} psql -U $POSTGRES_USER -d $POSTGRES_DB -f /tmp/dump.sql
fi
echo "Import ok"
```

Puis exécute `chmod +x scripts/import_dump.sh` et lance `./scripts/import_dump.sh /home/user/dump.sql.gz`.

## Questions / problèmes connus

- Si `npm ci` échoue pendant le build du back, copie l'erreur exacte et je la corrige (souvent dépendances natives).
- Si `vite build` échoue pour le front, vérifie la version de Node et donne-moi les logs.

---

Si tu veux, je peux :
- générer `scripts/import_dump.sh` dans le repo et le committer, ou
- transformer le Dockerfile du backend en multi-stage production ready (build TS puis run) et fournir un compose de production + config nginx.

Dis-moi ce que tu préfères et j'ajoute les fichiers correspondants.
