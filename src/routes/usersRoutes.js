import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router
  .get('/api/v1/user', UserController.listUsers)
  .post('/api/v1/user', UserController.createUser);

export default router;