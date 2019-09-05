import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserCotroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserCotroller.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserCotroller.update);

export default routes;
