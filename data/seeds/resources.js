
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Resource 1', description:'internet', project_id: 1 },
        {name: 'Resource 2', description:'books', project_id: 3 },
        {name: 'Resource 3', description:'school', project_id: 2 }
      ]);
    });
};
