exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "Training Kit", description: "online resource" },

    {
      name: "React Docs",
      description: "all react concepts and syntax available here"
    },

    {
      name: "Slack"
    }
  ]);
};
