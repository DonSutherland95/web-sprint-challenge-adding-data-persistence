
// exports.up = function(knex) {
//   return knex.schema 
//     .createTable('projects', table=>{
//         table.increments('id').unique()
//         table.string('name', 128).notNullable()
//         table.string('description',128)
//         table.boolean('completed').defaultTo(false).notNullable()
//     })
//     .createTable('resources', table=>{
//         table.increments('id').unique()
//         table.string('name', 128).notNullable().unique()
//         table.string('description',128)
//         table.integer('project_id')
//             .unsigned().notNullable()
//             .references('id').inTable('projects')
//             .onDelete('RESTRICT').onUpdate('RESTRICT')
//     })
//     .createTable('tasks', table=>{
//         table.increments('id').unique()
//         table.string('description',128).notNullable()
//         table.string('notes', 128)
//         table.boolean('completed').defaultTo(false).notNullable()
//         table.integer('project_id')
//             .unsigned().notNullable()
//             .references('id').inTable('projects')
//             .onDelete('RESTRICT').onUpdate('RESTRICT')        
//     })

// };

// exports.down = function(knex) {
//   return knex.schema
//     .dropTableIfExists('tasks')
//     .dropTableIfExists('resources')
//     .dropTableIfExists('projects')
// };


// exports.up = function(knex) {
//   return knex.schema 
//     .createTable('projects', table=>{
//       table.increments('project_id'); 
//       table.string('name').notNullable();
//       table.string('description'); 
//       table.boolean('completed').notNullable().defaultTo(0);
//     })
//     .createTable('resources', table=>{
//         table.increments('resource_id'); 
//         table.string('name').unique().notNullable(); 
//         table.string('description', 128); 

//     })
//     .createTable('tasks', table=>{
//       table.increments('task_id'); 
//       table.string('description', 128).notNullable();
//       table.string('notes'); 
//       table.boolean('completed').notNullable().defaultTo(0);
//       table.integer('project_id')
//         .unsigned()
//         .notNullable()
//         .references('project_id').inTable('projects')
//         .onDelete('RESTRICT').onUpdate('RESTRICT'); 
//     })
//     .createTable('project_resources', table => {
//       table.increments('id'); 
//       table.integer('project_id')
//         .unsigned()
//         .notNullable()
//         .references('project_id').inTable('projects')
//         .onDelete('RESTRICT').onUpdate('RESTRICT');
//       table.integer('resource_id')
//         .unsigned()
//         .notNullable()
//         .references('resource_id').inTable('resources')
//         .onDelete('RESTRICT').onUpdate('RESTRICT');
//     })

// };

// exports.down = function(knex) {
//   return knex.schema
//     .dropTableIfExists('project_resources')
//     .dropTableIfExists('resources')
//     .dropTableIfExists('tasks')
//     .dropTableIfExists('projects'); 
// };

// exports.up = function (knex) {
//   return knex.schema
//     .createTable("projects", (table) => {
//       table.increments('id');
//       table.text("name").notNullable().unique();
//       table.text("description");
//       table.boolean("completed").defaultTo(false);
//     })
//     .createTable("resources", (table) => {
//       table.increments();
//       table
//         .bigInteger("resource_id")
//         .unsigned()
//         .index()
//         .references("id")
//         .inTable("projects");
//       table.text("name").unique();
//       table.text("description");
//     })
//     .createTable("tasks", (table) => {
//       table.increments();
//       table
//         .bigInteger("project_id")
//         .unsigned()
//         .index()
//         .references("id")
//         .inTable("projects");
//       table.text("description").notNullable();
//       table.text("notes");
//       table.boolean("completed").defaultTo(false);
//     })
//     .createTable("resourcesAndProjects", (table) => {
//       table.increments();
//       table
//         .bigInteger("resourceID")
//         .unsigned()
//         .index()
//         .references("id")
//         .inTable("resources");
//       table
//         .bigInteger("projectID")
//         .unsigned()
//         .index()
//         .references("id")
//         .inTable("projects");
//     });
// };

// exports.down = function (knex) {
//   return knex.schema
//     .dropTableIfExists("projects")
//     .dropTableIfExists("resources")
//     .dropTableIfExists("tasks");
// };


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
      table
        .bigInteger("resourceID")
        .unsigned()
        .index()
        .references("id")
        .inTable("projects");
      table.text("name").unique();
      table.text("description");
    })
    .createTable("tasks", (table) => {
      table.increments();
      table
        .bigInteger("project_id")
        .unsigned()
        .index()
        .references("id")
        .inTable("projects");
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("completed").defaultTo(false);
    })
    .createTable("resourcesAndProjects", (table) => {
      table.increments();
      table
        .bigInteger("resourceID")
        .unsigned()
        .index()
        .references("id")
        .inTable("resources");
      table
        .bigInteger("projectID")
        .unsigned()
        .index()
        .references("id")
        .inTable("projects");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
