const express = require("express");

//Routers here
const projectRouter = require("./projects/projects-router");
const resourcesRouter = require("./resources/resources-router");
const tasksRouter = require("./tasks/tasks-router");

const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.send(" working as should");
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong"
  });
});

server.use((req, res) => {
  res.status(404).json({
    message: "Your request is not found"
  });
});

module.exports = server;
