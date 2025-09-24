#!/usr/bin/env bash
set -euo pipefail
if [ -z "${1-}" ]; then
  echo "Usage: $0 /chemin/vers/dump.sql[.gz]"
  exit 1
fi
DUMP_PATH=$1
DB_CONTAINER=$(docker compose -f docker-compose.prod.yml ps -q db || docker compose ps -q db)
if [[ $DUMP_PATH == *.gz ]]; then
  docker cp "$DUMP_PATH" ${DB_CONTAINER}:/tmp/dump.sql.gz
  docker exec -u postgres -i ${DB_CONTAINER} sh -c "gunzip -c /tmp/dump.sql.gz | psql -U $POSTGRES_USER -d $POSTGRES_DB"
else
  docker cp "$DUMP_PATH" ${DB_CONTAINER}:/tmp/dump.sql
  docker exec -u postgres -i ${DB_CONTAINER} psql -U $POSTGRES_USER -d $POSTGRES_DB -f /tmp/dump.sql
fi
echo "Import ok"
