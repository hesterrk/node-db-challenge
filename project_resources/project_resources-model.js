const db = require("../db-config")

module.exports = {
    getProjResources
  };

  //GETS a list of all resources for specific project 

  function getProjResources(projectId) {
    return db("project_resources as pr")
    .join("resources as r", "r.id", "pr.resource_id")
    .where("pr.project_id", projectId)
    .select("r.name as resource_name", "r.description as resource_description")
  }