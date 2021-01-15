const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

router.get('/', (req, res, next) => {
	res.render('index', {projects});
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/test-error', (req, res, next) => {
	const err = new Error('This is a test error');
	next(err);
});

module.exports = router;