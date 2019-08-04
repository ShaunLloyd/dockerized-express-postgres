# Express API Starter

Template repository for creating a Node.js + Express server with TypeScript

## Getting Started

For this project, were are using docker to contain the application.

```bash
# Build the docker container for the first time
docker-compose up --build

# Run the existed docker container
docker-compose up

# Tear down the docker container
docker-compose down
```

## Environment Variables

The express server expects a few environment variables to be included via a `dev.env` file.
Create this file in the root of your project with the following keys:

```
SERVER_PORT=8081
DATABASE_HOST="localhost"
DATABASE_USER="starter"
DATABASE_PASSWORD="starter-dev"
DATABASE_NAME="express-starter-db"
DATABASE_PORT=5432
```

**NOTE:** The variables above are what this starter expects out of the box.

## Database

This project is setup with a Docker Postgres image and uses pg for database migrations.
All files for this database are inside of the `./postgres` folder.

### Tables

To set up your database tables, add your sql scripts inside of the `./postgres/tables` folder. Once your files are in there, make sure to import them all in the `./posgres/deploy_tables.sql` script.

### Migrations

All migrations scripts can be found inside of the `./postgres/migrations` folder.
In the `package.json` there is a set of scripts for creating and running database migrations:

```bash
# Create a new migration file
yarn db:migrate-create <name_of_new_migration>

# Run all pending 'up' migrations
yarn db:migrate-up

# Run a single 'down' migration
yarn db:migrate-down

# Run N 'up' migrations
yarn db:migrate-up <number_to_run>

# Run N 'down' migrations
yarn db:migrate-down <number_to_run>
```

**NOTE:** these scripts must be run inside of the docker image's bash shell while it's running and can be accessed with the following command:

```bash
docker exec -it express-starter-api bash
```

### Entering the `psql` terminal

To make use of the psql terminal run the following command while the postgres container is running:

```bash
docker exec -it express-starter-postgres psql -U starter -d express-starter-db
```

## Available Endpoints

```
GET /v1/health - returns that the api is running
```
