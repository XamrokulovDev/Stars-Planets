const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Stars and Planets',
    version: '1.0.0',
    description: 'Node.js bilan yaratilgan yulduzlar va planetalar API',
  },
  servers: [
    {
      url: 'http://localhost:5050',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;