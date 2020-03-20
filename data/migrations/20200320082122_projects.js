exports.up = async function(knex) {
  //Projects Table
  await knex.schema.createTable("projects", table => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table
      .boolean("completed")
      .notNull()
      .defaultTo(false);
  })

  //Tasks Table 

await knex.schema.createTable("tasks", (table) => {
    table.increments("id")
    table.text("description").notNull()
    table.text("notes")
    table.integer("project_id")
    .unsigned()
    .notNull()
    .references("id")
    .inTable("projects")
    .onUpdate("CASCADE")
    .onDelete("CASCADE")
    table.boolean("completed").notNull().defaultTo(false)
})







};

exports.down = async function(knex) {};
