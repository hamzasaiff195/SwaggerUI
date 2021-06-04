const express = require('express');
const app = express();
const morgan = require('morgan');
const swaggerJsdocs = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

app.use(morgan('dev'));

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger UI Library',
      version: '1.0.1',
      description: 'A simple express Library API ✈  ',
      contact: {
        name: 'Backend Developer',
      },
      servers: [
        {
          url: 'http://localhost:5000',
        },
      ],
    },
  },
  // [./routes/*.js]
  apis: ['app.js'],
};

const swaggerDocs = swaggerJsdocs(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes

/**
 * @swagger
 * tags:
 *  name: Customer
 *  description: REST API's for Customers
 */

//? Get all customer
app.get('/customers', (req, res) => {
  res.status(200).send('This is Used to get all customers');
});

/**
 * @swagger
 * /customers:
 *  get:
 *   summary: Return the list of all customers
 *   tags: [Customers]
 *   responses:
 *    200:
 *     description: A successufll response
 */

//? update a customer
app.patch('/customers/:id', (req, res) => {
  res.status(200).send('Successfully Updated Customer');
});

/**
 * @swagger
 * /customers/:id:
 *  patch:
 *   summary: Use to update a customer with ID
 *   tags: [Customers]
 *   responses:
 *    '201':
 *     description: A successufll response
 */

//? Get One customer With ID

app.get('/customers/:id', (req, res) => {
  res.status(200).send('This is the required Customer');
});

/**
 * @swagger
 * /customers/:id:
 *  get:
 *   summary: Use to get Single Customer with ID
 *   tags: [Customers]
 *   responses:
 *    '200':
 *     description: A successufll response
 */

//? Delete One Customer With ID
app.delete('/customers/:id', (req, res) => {
  res.status(200).send('Customer Deleted Successfully');
});

/**
 * @swagger
 * /customer/:id:
 *  delete:
 *   summary: Use to Delete Customer with ID
 *   tags: [Customers]
 *   responses:
 *    '200':
 *      description: A successfull response
 */

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
