import * as express from "express"
import * as mongoose from "mongoose"

var app = express()
var port = process.env.PORT || 3000

var cvs = require('./api/models/cvModel')
var cv = require('./cv')
  
require ('mongoose').Promise = global.Promise;
mongoose.connect('mongodb://localhost/cvdb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require('./api/routes/cvRoutes');
routes(app);

app.listen(port);

console.dir(cv, {depth: null, colors: true})
console.log('The CV-API server started on: ' + port);

app.use((req: any, res: any) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
