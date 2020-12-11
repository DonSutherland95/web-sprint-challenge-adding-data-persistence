
exports.up = function(knex) {
  return knex.schema 
    .createTable('projects', table=>{
        table.increments('id')
        table.string('name', 128).notNullable()
        table.string('description',128)
        table.boolean('completed').defaultTo(false).notNullable()
    })
    .createTable('resources', table=>{
        table.increments()
        table.string('name', 128).notNullable().unique()
        table.string('description',128)
        table.integer('project_id')
            .unsigned().notNullable()
            .references('id').inTable('projects')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('tasks', table=>{
        table.increments()
        table.string('description',128).notNullable()
        table.string('notes', 128)
        table.boolean('completed').defaultTo(false).notNullable()
        table.integer('project_id')
            .unsigned().notNullable()
            .references('id').inTable('projects')
            .onDelete('RESTRICT').onUpdate('RESTRICT')        
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
