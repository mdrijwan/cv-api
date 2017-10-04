"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
var cvs = require('./api/models/cvModel');
var cv = require('./cv');
require('mongoose').Promise = global.Promise;
mongoose.connect('mongodb://localhost/cvdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/cvRoutes');
routes(app);
app.listen(port);
console.dir(cv, { depth: null, colors: true });
console.log('The CV-API server started on: ' + port);
app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});