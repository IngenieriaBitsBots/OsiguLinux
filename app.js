const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const citasRouter = require('./src/routes/citas');
const path=require("path")

app.use(express.json());
app.use('/scheduling/v1/appointments', citasRouter);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de API',
      version: '1.0.0',
      description: 'Documentación de API para confirmar y cancelar citas',
    },
    servers:[
      {
        url:"http://localhost:3000"
      }
    ]
  },
  apis: ['./routes/*.js'], // Rutas a los archivos que contienen comentarios Swagger
  //apis: [`'${path.join(__dirname,"./routes/*.js")}`],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
//app.use('/api', citasRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});