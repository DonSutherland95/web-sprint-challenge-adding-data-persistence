
const express = require("express");
const router = express.Router();
const Model = require("./model");


router.get("/", (req, res) => {
  Model.getAll()
        .then(tasks=>{
            
            tasks.map(task=>{
                task.completed === 0 ? task.completed = false : task.completed = true 
            })
            res.status(200).json(tasks)
        })
        .catch(err=>{
            res.status(500).json(err.message)
        })
});

// router.get("/", (req, res) => {
//   const toReturn = [];
//   Model.getAll().then((data) => {
//     for (let i in data) {
//       if (data[i].completed === 1) {
//         toReturn.push({
//           id: data[i].id,
//           project_id: data[i].project_id,
//           description: data[i].description,
//           notes: data[i].notes,
//           completed: true,
//           project_name: data[i].project_name,
//           project_description: data[i].project_description,
//         });
//       } else {
//         toReturn.push({
//           id: data[i].id,
//           project_id: data[i].project_id,
//           description: data[i].description,
//           notes: data[i].notes,
//           completed: false,
//           project_name: data[i].project_name,
//           project_description: data[i].project_description,
//         });
//       }
//     }
//     res.status(200).json(toReturn);
//   });
// });

// router.post("/", (req, res) => {
//   Model.create(req.body)
//     .then((data) => {
//       return Model.getById(data);
//     })
//     .then((data) => {
//       Model.getById(data);
//       if (data.completed === 1) {
//         res.status(200).json({
//           id: data.id,
//           project_id: data.project_id,
//           description: data.description,
//           notes: data.notes,
//           completed: true,
//           project_name: data.project_name,
//           project_description: data.project_description,
//         });
//       } else {
//         res.status(200).json({
//           id: data.id,
//           project_id: data.project_id,
//           description: data.description,
//           notes: data.notes,
//           completed: false,
//           project_name: data.project_name,
//           project_description: data.project_description,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(400).json(err.message);
//     });
// });

module.exports = router;