import { Router } from 'express';

import UserCotroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserCotroller.store);
routes.post('/sessions', SessionController.store);

export default routes;
