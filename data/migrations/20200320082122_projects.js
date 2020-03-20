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
  });

  //Tasks Table

  await knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table
      .integer("project_id")
      .unsigned()
      .notNull()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .boolean("completed")
      .notNull()
      .defaultTo(false);
  });

  //Resources

  await knex.schema.createTable("resources", table => {
    table.increments("id");
    table
      .text("name")
      .notNull()
      .unique();
    table.text("description");
  });

  //Project_Resources

  await knex.schema.createTable("project_resources", table => {
    table.increments("id");
    table
      .integer("project_id")
      .unsigned()
      .notNull()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("resource_id")
      .unsigned()
      .notNull()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async function(knex) {};
