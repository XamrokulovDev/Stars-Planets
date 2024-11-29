const { Router } = require("express");
const router = Router();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger/swagger');

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  docExpansion: 'list',
  deepLinking: true,
  displayRequestDuration: true,
}));

module.exports = router;