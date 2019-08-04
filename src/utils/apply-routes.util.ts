import { Router } from 'express';

export interface RouteApplier {
  (router: Router): void;
}

/**
 *
 * @param routeAppliers An array of routerAppliers
 *
 * @returns a function that takes in an express router and adds it to all of the given route appliers
 */
export const applyRoutes = (...routeAppliers: RouteApplier[]) => (router: Router) =>
  routeAppliers.forEach(routeApplier => routeApplier(router));
