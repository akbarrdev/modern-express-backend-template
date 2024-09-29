import { User } from "../models/User";

export class UserService {
  private users: User[] = [
    new User(1, "John Doe", "john@example.com"),
    new User(2, "Jane Doe", "jane@example.com"),
  ];

  public getAllUsers(): User[] {
    return this.users;
  }
}
