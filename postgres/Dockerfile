FROM postgres:latest

ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD init.sh deploy_schemas.sql /docker-entrypoint-initdb.d/
