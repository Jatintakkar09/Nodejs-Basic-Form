

import { Router } from 'express';
import { registerUser } from '../controllers/registerUser.controller.js';
import { upload } from '../db/middlewares/multer.middleware.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
// routes.get('/', SessionController.store);
routes.post('/user',upload.fields([{ name: 'avatar', maxCount: 1 }]),registerUser);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default routes
