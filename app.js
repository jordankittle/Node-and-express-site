const express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.use((req, res, next) => {
	const err = new Error('Page Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	err.status = err.status || 500;
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