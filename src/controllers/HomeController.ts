import { Request, Response } from "express";

export class HomeController {
  public index(req: Request, res: Response): void {
    res.render("home", { title: "Express" });
  }
}
