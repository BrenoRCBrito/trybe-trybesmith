import Joi from 'joi';

export const product = Joi.object({
  name: Joi.string().min(2).required().messages({
    'any.required': 'Name is required',
    'string.base': 'Name must be a string',
    'string.min': 'Name must be longer than 2 characters',
  }),
  amount: Joi.string().min(2).required().messages({
    'any.required': 'Amount is required',
    'string.base': 'Amount must be a string',
    'string.min': 'Amount must be longer than 2 characters',
  }),
});

export const user = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': 'Username is required',
    'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': 'Classe is required',
    'string.base': 'Classe must be a string',
    'string.min': 'Classe must be longer than 2 characters',
  }),
  level: Joi.number().min(1).required().messages({
    'any.required': 'Level is required',
    'number.base': 'Level must be a number',
    'number.min': 'Level must be greater than 0',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
  }),
});
