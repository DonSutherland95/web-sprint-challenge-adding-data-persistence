exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments();
      table.text("name").notNullable().unique();
      table.text("description");
      table.boolean("completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments();
      table.text("name").unique();
      table.text("description");
    })
    .createTable("tasks", (table) => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("completed").defaultTo(false);
    });
    
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
