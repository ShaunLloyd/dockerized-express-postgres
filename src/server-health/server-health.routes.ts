import { Router } from 'express';

import { getServerHealthStatus } from './server-health.controller';
import { RouteApplier } from '../utils';

export const applyServerHealthRoutes: RouteApplier = (app: Router) => {
  app.get('/health', getServerHealthStatus);
};
