
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const categoriaRoute = require('./routes/categoriaRoute');
const produtoRoute = require('./routes/produtoRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRoute);
app.use('/categorias', categoriaRoute);
app.use('/produtos', produtoRoute);

module.exports = app;
