import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { User } from '../models/user';

export const userController = {
  getUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await User.find({}).lean();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },

  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = new User(req.body);
      const result = await user.save();
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },
};
