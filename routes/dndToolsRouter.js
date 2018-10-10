var express = require('express');
var dndToolsRouter = express.Router();

dndToolsRouter.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/views/diceRoller.html'));
});

module.exports = dndToolsRouter;
