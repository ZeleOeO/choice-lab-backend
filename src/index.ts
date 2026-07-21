import express, { type Express, type Request, type Response } from 'express';
import sceneRouter from "./routers/sceneRoutes.ts"

const app: Express = express();
app.use(express.json())
app.use("/scenes", sceneRouter)

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
