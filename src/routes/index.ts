import express from "express";
import { HomeController } from "../controllers/HomeController";

const router = express.Router();
const homeController = new HomeController();

router.get('/', homeController.index);

export default router;