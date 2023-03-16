require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000
const app = express();
app.use(cors());
const morgan = require('morgan')


//routes
 app.use(require('./routes/index'));

 //middleware
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
 app.listen(PORT);

const swaggerUiExpress = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "CoffeeBahia",
        version: "1.0.0",
        description:
          "Documentacion CoffeeBahia",
        contact: {
          name: "Gino Giordano",
        },
      },
      servers: [
        {
          url: "https://node-js-ginogiordano.vercel.app/",
        },
      ],
    },
    apis: ["./routes/index.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(specs)
  );