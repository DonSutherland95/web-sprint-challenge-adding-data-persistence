// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
   findResources,
   addResource,
   getById
}

function findResources(){
    return db('resources')
}
function addResource(resource){
    return db('resources')
        .insert(resource)
}
function getById(data){
    return db("resources")
        .where('id', id).first()
}