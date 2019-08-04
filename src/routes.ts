import { applyRoutes } from './utils';
import { applyServerHealthRoutes } from './server-heath';

export const applyV1Routes = applyRoutes(applyServerHealthRoutes);
