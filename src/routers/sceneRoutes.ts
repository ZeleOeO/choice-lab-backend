import { Router } from "express";
import * as sceneController from "../controllers/sceneController.ts"

const router = Router()

router.get("/load-scene/:id", sceneController.loadScene)

export default router

