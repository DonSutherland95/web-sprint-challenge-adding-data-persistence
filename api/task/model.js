// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
  getAll,
  getById,
  create
};
function getAll() {
    return db("tasks as t")
      .join("projects as p", "p.id", "t.project_id")
      .select(
        "t.*",
        "p.name as project_name",
        "p.description as project_description"
      );
  }
function getById(id) {
    return db("tasks").where("id", id).first();
}
function create(data) {
    return db("tasks")
    .insert(data);
}