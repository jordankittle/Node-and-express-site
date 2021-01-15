const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

//Home page GET router
router.get('/', (req, res, next) => {
	res.render('index', {projects});
});

//Handle GET requests for the about page
router.get('/about', (req, res) => {
	res.render('about');
});

//Test error to see what happens when an error other than a 404 is encountered
router.get('/test-error', (req, res, next) => {
	const err = new Error('This is a test error');
	next(err);
});

//Test error without a message to see if the error handler creates one
router.get('/test-error-2', (req, res, next) => {
	const err = new Error();
	next(err);
});

module.exports = router;