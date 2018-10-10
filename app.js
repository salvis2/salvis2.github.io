var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

// Routers
var homeRouter = require('./routes/homeRouter');
var dndToolsRouter = require('./routes/dndToolsRouter');
var characterCreatorRouter = require('./routes/characterCreatorRouter');

// Specify paths
app.use('/', homeRouter);
app.use('/dndTools', dndToolsRouter);
app.use('/dndTools/characterCreator', characterCreatorRouter);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Use Routers
app.use('/', homeRouter);

// catch 404 and forward to error handles
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.err = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
