import { Router, Request, Response, NextFunction } from "express";

const apiRouter: Router = Router();

apiRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: "Hello world" });
});

export default apiRouter;
