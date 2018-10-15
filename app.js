var express = require('express');
var app = express();
var http = require('http');

var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(serveStatic('public/html'));
app.use(serveStatic('public/stylesheets'));
app.use(serveStatic('public/javascripts'));
app.use(serveStatic('public/images'));
app.use(serveStatic('public/other'));

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/public/html/homepage.html');
});


// Use Routers
//app.use('/', homeRouter);

// catch 404 and forward to error handles
/*
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
*/
function normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
                return val;
        }

        if (port >= 0) {
                return port;
        }

        return false;
}

function onError(error) {
        if (error.syscall !== 'listen') {
                throw error;
        }

        var bind = typeof port === 'string'
                ? 'Pipe ' + port
                : 'Port ' + port;

        switch (error.code) {
                case 'EACCES':
                        console.error(bind + ' requires elevated privileges');
                        process.exit(1);
                        break;
                case 'EADDRINUSE':
                        console.error(bind + ' is already in use');
                        process.exit(1);
                        break;
                default:
                        throw error;
        }
}

function onListening() {
        var addr = server.address();
        var bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
        console.log('Listening on ' + bind);
}


var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

var server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);

console.log(`Listening at 208.133.128.253`);
server.listen(port, '208.113.128.253');

