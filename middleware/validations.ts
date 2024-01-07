import { body } from 'express-validator';

export const userRules = [
  body('name').exists().isString(),
  body('email').exists().isEmail(),
  body('age').exists().isNumeric(),
];
