// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
  findProjects,
  addProject
}

function findProjects(){
    return db('projects')
}

function addProject(project){
    return db('projects')
    .insert(project)
}