exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Web Apis", completed: true },
    {
      name: "Data Persistence",
      description: "Working with data persistence",
      completed: true
    },
    {
      name: "Javascript Classes",
      description: "We need to learn Javascript classes",
      completed: false
    }
  ]);
};
