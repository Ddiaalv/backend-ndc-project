import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import * as path from "path";
import monsterRoutes from "./routes/monsters";

// Create Express server
const nodeca = express();

// Settings
const PORT = process.env.PORT || 3011;
nodeca.use(bodyParser.json());
nodeca.use(bodyParser.urlencoded({ extended: true }));

//Middlewares
nodeca.use(express.static(path.join(__dirname, "public")));
nodeca.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
nodeca.use(monsterRoutes);

// Starting the server
nodeca.listen(PORT, () => {
  console.log(`Server iniciado en el puerto: ${PORT}`);
});
