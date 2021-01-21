"use strict"; //  criterioso js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// carregar as rotas
const indexRoute = require("./routes/index");
const productRoute = require("./routes/product");

// adicionando CORS - outros enderecos podem acessar a aplicacao
// npm install cors

// Habilita o CORS
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });

app.use(bodyParser.json()); // todo conteudo vai ser convertido para json
app.use(bodyParser.urlencoded({ extended: false })); // codificar as url's

app.use("/", indexRoute); // '/' prefixo
app.use("/products", productRoute); // '/products para post

module.exports = app;
