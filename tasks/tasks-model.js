const db = require("../db-config");

module.exports = {
  getTasks,
  getTaskById,
  addTask
};

function getTasks() {
    return db("tasks as t")
      .join("projects as p", "p.id", "t.project_id")
      .select(
        "p.name as projectname",
        "p.description as projectdescription",
        "t.id as task_id",
        "t.description",
        "t.notes",
        "t.project_id",
        "t.completed"
      );
  }
  
  function getTaskById(id) {
    return db("tasks")
      .where({ id })
      .first();
  }
  
  
  //ADD TASK HERE 
  
  function addTask(task) {
    return db("tasks").insert(task)
    
  }