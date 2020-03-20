const express = require("express");

const projresourceRouter = require("../project_resources/project_resources-router");

const projects = require("./projects-model");
const router = express.Router();

router.use("/:id/projectresources", projresourceRouter);

//GET ALL PROJECTS

router.get("/", async (req, res, next) => {
  try {
    res.json(await projects.getProjects());
  } catch (error) {
    next(error);
  }
});

//GET PROJECT BY ID

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await projects.getProjectById(id);
    if (project) {
      res.json(project);
    } else {
      res
        .status(404)
        .json({ message: "Could not find project with given id." });
    }
  } catch (error) {
    next(error);
  }
});

// --> POST PROJECT HERE

router.post("/", async (req, res, next) => {
  try {
    const project = await projects.addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const project = await projects.updateProject(req.params.id, req.body);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await projects.removeProject(req.params.id);
    if (deleted > 0) {
      res.status(200).json({ message: "The project has been deleted" });
    } else {
      res.status(404).json({ message: "The project could not be found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
