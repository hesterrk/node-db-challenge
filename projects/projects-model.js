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


function addProject(project) {
    return db("projects").insert(project);
  }


  function updateProject(id, changes) {
    return db("projects")
      .where({ id })
      .update(changes);
  }
  
  function removeProject(id) {
    return db("projects")
      .where('id', id)
      .del();
  }