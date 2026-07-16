import { NextFunction, Request, Response } from "express"
import * as userService from "../services/sceneService.ts"

export const loadScene = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(userService.loadScene(Number(req.params.id)))
  } catch (error) {
    next(error)
  }

}

