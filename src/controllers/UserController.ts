import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAllUsers(req: Request, res: Response): void {
    const users = this.userService.getAllUsers();
    res.json(users);
  }
}