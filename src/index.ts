import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import * as path from "path";
import monsterRoutes from "./routes/monsters";

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const swaggerDefinition = {
  info: {
    title: "REST API for NODECA",
    version: "1.0.0",
    description: "This is the REST API for NODECA",
  },
  host: "localhost:3010",
  basePath: "/",
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Create Express server
const nodeca = express();

// Settings
const PORT = process.env.PORT || 3010;

//Middlewares
nodeca.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
nodeca.use(bodyParser.json());
nodeca.use(bodyParser.urlencoded({ extended: true }));
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
  console.log(`El server iniciado en el puerto: ${PORT}`);
  console.log("NODE_ENV: ", process.env.NODE_ENV);
});
