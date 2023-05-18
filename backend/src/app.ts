import { ErrorHandler, HealthRouter } from './helpers';
//import { ErrorHandler, HealthRouter } from '@todolist/helpers';
import Express, { Application } from 'express';


export class App {
  readonly app: Application;

  constructor() {
    this.app = Express();
    this.includeMiddlewares();
    this.includeRoutes();
    this.includeErrors();
  }

  includeMiddlewares() {
    this.app.use(Express.json());
    this.app.use(Express.urlencoded({ extended: true }));
  }

  includeRoutes() {
    this.app.use('/', HealthRouter);
  }

  includeErrors() {
    this.app.use(ErrorHandler.notFound);
  }
}

export default new App().app;