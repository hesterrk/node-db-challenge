const db = require("../db-config");

module.exports = {
     getResources,
     getResourceById,
    addResource
}


function getResources() {
    return db("resources");
  }
  
  function getResourceById(id) {
    return db("resources")
      .where({ id })
      .first();
  }

  function addResource(resource) {
    return db("resources").insert(resource)
    
  }