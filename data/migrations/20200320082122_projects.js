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
};

exports.down = async function(knex) {};
