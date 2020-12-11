
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project 1', description: 'javascript', completed: true },
        {name: 'Project 2', description: 'css', completed: true },
        {name: 'Project 3', description: 'html', completed: false }
      ]);
    });
};
