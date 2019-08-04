import * as Knex from 'knex';

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
} = process.env;

// Connects to the postgres db created in
// docker comtainer
export const db: Knex = Knex({
  client: 'pg',
  connection: {
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    port: Number(DATABASE_PORT),
  },
});
