import { Express } from 'express';
import { userController } from '../controllers/user';
import { userRules } from '../middleware/validations';

export default (app: Express) => {
  app.get('/users', userController.getUsers);
  app.post('/user', userRules, userController.createUser);
}
