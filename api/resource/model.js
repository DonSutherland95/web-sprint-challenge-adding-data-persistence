// build your `Resource` model here
const db = require('../../data/dbConfig')


module.exports = {
   getAll,
   getById,
   create
};

function getAll() {
    return db("resources");
  }
 function getById(id) {
    return db("resources").where("id", id).first();
  }
  function create(data) {
    return db("resources")
    .insert(data);
  }