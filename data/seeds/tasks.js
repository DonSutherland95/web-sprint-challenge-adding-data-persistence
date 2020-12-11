
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Task 1', notes: 'do task 1 tomorrow', completed: false, project_id: 3 },
        {description: 'Task 2', notes: 'do task 2 today', completed: true, project_id: 1 },
        {description: 'Task 3', notes: 'do task 3 never', completed: true, project_id: 2 },
      ]);
    });
};
