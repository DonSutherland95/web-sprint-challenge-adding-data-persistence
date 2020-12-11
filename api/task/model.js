// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
  findTasks,
  addTask
}

function findTasks(){
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('p.name as product_name', 'p.description as product_description','t.notes', 't.description as task_description','t.completed')
}

function addTask(task){
    return db('tasks')
        .insert(task)
}