const express = require("express");

const projresourceRouter = require("../project_resources/project_resources-router")

const projects = require("./projects-model")
const router = express.Router();

router.use('/:id/projectresources', projresourceRouter)




  module.exports = router;
