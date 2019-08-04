import * as express from 'express';
import * as http from 'http';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';

import { applyV1Routes } from './routes';

// Create an express server
export const app: express.Application = express();

// Create express router
const v1Router: express.Router = express.Router();

// Apply the v1 Routes to the express router
applyV1Routes(v1Router);

app
  .use(morgan('combined'))
  .use(helmet())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/v1', v1Router);

const port: number | string = Number(process.env.SERVER_PORT) || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
