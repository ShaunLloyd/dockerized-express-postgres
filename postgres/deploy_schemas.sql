-- Deploy a fresh database including schemas and some static data.
-- The order of the scripts below is important.

-- SQL table files go here
\i '/docker-entrypoint-initdb.d/tables/todos.sql'
