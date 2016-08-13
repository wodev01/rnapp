var express = require("express");
var app = express(),
    expressValidator = require('express-validator');
var bodyParser = require("body-parser");
var router = express.Router();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));
app.use(expressValidator());
app.use(allowCrossDomain);

require('./routers/user')(app);
require('./config');

app.listen(3000);
console.log("Listening to PORT 3000");