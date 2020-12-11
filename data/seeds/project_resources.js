
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resourcesAndProjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('resourcesAndProjects').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 2, resource_id: 2},
        {project_id: 3, resource_id: 3},
      ]);
    });
};
