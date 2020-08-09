// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'REST API for NODECA',
    version: '1.0.0',
    description: 'This is the REST API for NODECA',
  },
  host: 'localhost:3010',
  basePath: '/',
};
// options for the swagger docs
export const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  apis: ['./docs/**/*.yaml'],
};
