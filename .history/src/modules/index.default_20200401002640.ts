import { name, about, version, dependencies } from '../../package.json';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express Server',
		version: version,
		name: name,
		about: about,
		expressVersion: dependencies.express,
		pugVersion: dependencies['cookie-parser'],
	});
});

module.exports = router;
