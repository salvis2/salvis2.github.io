var express = require('express');
var characterCreatorRouter = express.Router();

characterCreatorRouter.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/views/characterCreator.html'));
});

module.exports = characterCreatorRouter;
