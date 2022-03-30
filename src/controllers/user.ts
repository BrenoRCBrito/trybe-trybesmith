import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user';

const { CREATED } = StatusCodes;

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const token = await this.userService.create({
      username,
      classe,
      level,
      password,
    });
    return res.status(CREATED).json({ token });
  };
}
