// build your `Task` model here
const db = require('../../data/dbConfig')

// module.exports = {
//   findTasks,
//   addTask
// }

// function findTasks(){
//     return db('tasks as t')
//         .join('projects as p', 't.project_id', 'p.id')
//         .select('p.name as product_name', 'p.description','t.notes', 't.description ','t.completed')
// }

// function addTask(task){
//     return db('tasks')
//         .insert(task)
// }

module.exports = {
  getAll() {
    return db("tasks as t")
      .join("projects as p", "p.id", "t.project_id")
      .select(
        "t.*",
        "p.name as project_name",
        "p.description as project_description"
      );
  },
  getById(id) {
    return db("tasks").where("id", id).first();
  },
  create(data) {
    return db("tasks").insert(data);
  },
};
