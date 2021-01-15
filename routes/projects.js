const express = require('express');
const router = express.Router();
const data = require('../data.json');
const { projects } = data;

//Default /projects router, if no project is specified, return the user to the home page
router.get('/', (req, res) => {
	res.redirect('/');
});

//Project router when the url contains a project. If project ID is invalid, route to error page
router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	if(isNaN(id) || id >= projects.length){
		const err = new Error(`Project ${id} does not exist`);
		err.status = 404;
		err.source = 'projects';
		return next(err);
	}
	const { project_name } = projects[id];
	const { description } = projects[id];
	const { technologies } = projects[id];
	const { live_link } = projects[id];
	const { github_link } = projects[id];
	const { image_urls } = projects[id];
	const templateData = { id, project_name, description, technologies, live_link, github_link, image_urls};
	res.render('project', templateData);
});

module.exports = router;