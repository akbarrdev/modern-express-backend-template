import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { appConfig } from "./config/app.config";
import indexRouter from "./routes";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandling();
  }

  private config(): void {
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'pug');

    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  private routes(): void {
    this.app.use('/', indexRouter);
    this.app.use('/users', userRoutes);
  }

  private errorHandling(): void {
    this.app.use(errorHandler);
  }
}

const app = new App().app;
app.listen(appConfig.port, () => {
  console.log(`Server running on port ${appConfig.port}`);
});

export default app;