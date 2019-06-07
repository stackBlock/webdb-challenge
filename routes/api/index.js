const express = require('express');
const router = express.Router();
const projectsRoute = require('./projects.js');
const actionsRoute = require('./actions.js');

router.use('/projects', projectsRoute);
router.use('/actions', actionsRoute);

module.exports = router;