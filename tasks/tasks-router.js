const express = require("express");

const tasks = require("./tasks-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await tasks.getTasks());
  } catch (error) {
    next(error);
  }
});

//GET TASK BY ID

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await tasks.getTaskById(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Could not find task with given id." });
    }
  } catch (error) {
    next(error);
  }
});

//ADD TASK HERE

router.post("/", async (req, res, next) => {
  try {
    const task = await tasks.addTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
