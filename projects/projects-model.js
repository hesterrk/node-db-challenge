const db = require("../db-config");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  getProjectAll,
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

//Getting project by id  and listing its tasks and resources

function getProjectAll(projectId) {
  return db("projects as p")
    .join("tasks as ta", "ta.project_id", "p.id")
    .join("project_resources as pr", "pr.project_id", "p.id")
    .join("resources as r", "r.id", "pr.resource_id")
    .where("p.id", projectId)
    .select(
      "p.id as project_id",
      "p.name as project_name",
      "p.description as project_description",
      "p.completed as project_completed",
      "ta.description as task_description",
      "ta.notes as task_notes",
      "ta.completed as task_completed",
      "r.name as resource_name"
    );
}

function updateProject(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function removeProject(id) {
  return db("projects")
    .where("id", id)
    .del();
}
