import { Request, Response, Router as ExpressRouter } from 'express';

class HealthRouterFactory {
  readonly router: ExpressRouter;

  constructor() {
    this.router = ExpressRouter();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.get('/ping', (_: Request, res: Response) =>
      res.json({
        message: 'pong',
      }),
    );
  }

}

export const HealthRouter = new HealthRouterFactory().router;
