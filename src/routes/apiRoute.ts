import { Router } from "express";

const apiRouter: Router = Router();

apiRouter.get("/", (req, res, next) => {
  res.json({ msg: "Hello world" });
});

export default apiRouter;
