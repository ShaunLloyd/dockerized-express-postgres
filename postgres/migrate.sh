pg_migrate_path=$1

if [ ! -f ${pg_migrate_path} ]; then
  echo "No pg-migrate executeable supplied"
fi

URL="postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}"

base_cmd="${pg_migrate_path} --migrations-dir=$(dirname $0)/migrations"
migrate_cmd="DATABASE_URL=${URL} ${base_cmd}"

if [ "$2" = "up" ]; then
  eval "${migrate_cmd} up $3"
elif [ "$2" = "down" ]; then
  eval "${migrate_cmd} down $3"
elif [ "$2" = "create" ]; then
  eval "${base_cmd} create $3"
elif [ "$2" = "unlock" ]; then
  eval "${base_cmd} unlock $3"
fi
