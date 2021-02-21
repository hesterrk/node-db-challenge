exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      description: "Install from npm",
      notes: "additional npm notes",
      project_id: 1,
      completed: true
    },

    {
      description: "Get familiar with SQL and Knex",
      notes: "dowload some commands",
      project_id: 2,
      completed: true
    },
    {
      description: "Master Javascript fundamentals",
      notes: "Read Training kit",
      project_id: 3,
      completed: false
    },

    {
      description: "Install web api docs",
      notes: "web api notes",
      project_id: 1,
      completed: false
    },

    {
      description: "Write up some seed files",
      notes: "spent two hours on this",
      project_id: 2,
      completed: true
    },
    {
      description: "Learn some for loops",
      notes: "codesandbox is good place",
      project_id: 3,
      completed: true
    }
  ]);
};
