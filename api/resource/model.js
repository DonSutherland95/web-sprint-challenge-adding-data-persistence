// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
   findResources,
   addResource
}

function findResources(){
    return db('resources')
}
function addResource(resource){
    return db('resources')
        .insert(resource)
}