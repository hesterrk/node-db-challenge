const db = require("../db-config")

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    updateProject,
    removeProject
  };

  function getProjects() {
    return db("projects");
  }
  
  function getProjectById(id) {
    return db("projects")
      .where({ id })
      .first();
  }