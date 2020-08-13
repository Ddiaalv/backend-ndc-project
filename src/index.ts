import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';
import monsterRoutes from './routes/monsters';
import armorRoutes from './routes/armors';
import weaponRoutes from './routes/weapons';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  info: {
    title: 'REST API for NODECA',
    version: '1.0.0',
    description: 'This is the REST API for NODECA',
  },
  host: 'localhost:3010',
  basePath: '/',
};
export const options = {
  swaggerDefinition,
  apis: ['./docs/**/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);
const nodeca = express();
const PORT = process.env.PORT || 3010;

nodeca.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
nodeca.use(bodyParser.json());
nodeca.use(bodyParser.urlencoded({ extended: true }));
nodeca.use(express.static(path.join(__dirname, 'public')));
nodeca.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

nodeca.use(monsterRoutes);
nodeca.use(armorRoutes);
nodeca.use(weaponRoutes);

nodeca.listen(PORT, () => {
  console.log(`El server iniciado en el puerto: ${PORT}`);
  console.log('NODE_ENV: ', process.env.NODE_ENV);
});

export default nodeca;
