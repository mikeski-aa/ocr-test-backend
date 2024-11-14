import express, { Application } from "express";
import { createServer, Server } from "node:http";
import apiRouter from "./routes/apiRoute";

const app: Application = express();
const server: Server = createServer(app);

app.use("/api", apiRouter);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
