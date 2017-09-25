const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  cvs = require('./api/models/cvModel'), //created model loading here
  bodyParser = require('body-parser');
  cv = require('./cv')
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cvdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/cvRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.dir(cv, {depth: null, colors: true})
console.log('The RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
