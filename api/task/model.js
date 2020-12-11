// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
  findTasks,
  addTask
}

function findTasks(){
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('p.name as product_name', 'p.description','t.notes', 't.description ','t.completed')
}

function addTask(task){
    return db('tasks')
        .insert(task)
}