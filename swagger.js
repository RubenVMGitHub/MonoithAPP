// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Mi API',
    description: 'Documentación generada automáticamente con swagger-autogen',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; // o el archivo donde defines tus rutas

swaggerAutogen(outputFile, endpointsFiles, doc);
