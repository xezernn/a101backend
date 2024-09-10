const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'A101 Backend Docs.',
      version: '3.3.3',
      description: 'A101 backend qısa təsviri:',
    },
    servers: [
      {
        url: 'http://localhost:3219',
        description: 'Local development server'
      },
      {
        url: 'https://a101backend.vercel.app',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};


const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
