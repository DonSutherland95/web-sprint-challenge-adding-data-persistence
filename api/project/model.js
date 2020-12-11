// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
  findProjects,
  addProject,
  getById
}

function findProjects(){
    return db('projects')
}

function addProject(project){
    return db('projects')
    .insert(project)
}

function getById(id){
  return db("projects")
  .where("id", id).first();
}

// module.exports = {
//   getAll() {
//     return db("projects");
//   },
//   getById(id) {
//     return db("projects").where("id", id).first();
//   },
//   create(data) {
//     return db("projects").insert(data);
//   },
// };
