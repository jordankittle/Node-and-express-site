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

module.exports = router;