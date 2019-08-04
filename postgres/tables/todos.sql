BEGIN TRANSACTION;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS todos (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title varchar(60),
  body text,
  is_complete boolean,
  timestamp timestamp NOT NULL
);

COMMIT;
