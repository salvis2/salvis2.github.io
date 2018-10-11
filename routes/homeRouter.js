var express = require('express');
var homeRouter = express.Router();
var path = require('path');

// Get static homepage
homeRouter.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../views/homepage.html'));
});

module.exports = homeRouter;
