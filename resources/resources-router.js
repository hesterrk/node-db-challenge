const express = require("express");

const resources = require("./resources-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await resources.getResources());
  } catch (error) {
    next(error);
  }
});

//GET RESOURCE BY ID

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const resource = await resources.getResourceById(id);
    if (resource) {
      res.json(resource);
    } else {
      res
        .status(404)
        .json({ message: "Could not find resource with given id." });
    }
  } catch (error) {
    next(error);
  }
});

//ADD RESOURCE HERE

router.post("/", async (req, res, next) => {
  try {
    const resource = await resources.addResource(req.body);
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
