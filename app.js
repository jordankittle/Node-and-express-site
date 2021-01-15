const express = require('express');
var app = express();
var path = require('path');

//Set static routes, views, and view engine
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

//Require main and project routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/project', projectRoutes);


//404 Error handler
app.use((req, res, next) => {
	const err = new Error(`Page at ${req.originalUrl} Not Found`);
	err.status = 404;
	next(err);
});

//Global error handlers

app.use((err, req, res, next) => {
	err.status = err.status || 500;
	err.message = err.message || 'An unknown error has occured';
	console.log('Error:', err.status);
	console.log(err.message);
	res.locals.error = err;
	res.status(err.status);
	if (err.status === 404){
		return res.render('page-not-found');
	}
	res.render('error');
});

app.listen(3000, () => {
	console.log('Listening on localhost:3000');
});