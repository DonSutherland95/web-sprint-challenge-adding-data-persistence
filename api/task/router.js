
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

router.post("/", (req, res) => {
  Model.create(req.body)
    .then((data) => {
      return Model.getById(data);
    })
    .then((data) => {
      Model.getById(data);
      if (data.completed === 1) {
        res.status(200).json({
          id: data.id,
          project_id: data.project_id,
          description: data.description,
          notes: data.notes,
          completed: true,
          project_name: data.project_name,
          project_description: data.project_description,
        });
      } else {
        res.status(200).json({
          id: data.id,
          project_id: data.project_id,
          description: data.description,
          notes: data.notes,
          completed: false,
          project_name: data.project_name,
          project_description: data.project_description,
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

// router.post("/", (req, res) => {
//   Model.create(req.body)
//              .then((data) => {
//                         return Model.getById(data);
//                     })
//               .then((data) => {
//                     if (data["completed"] === 0) 
//                     {
//                         res.status(201).json({
//                         id: data.id,
//                         name: data.name,
//                         description: data.description,
//                         completed: false,
//                         });
//                     } else {
//                         res.status(200).json({
//                         id: data.id,
//                         name: data.name,
//                         description: data.description,
//                         completed: true,
//                         });
//                     }
//                  })     
//             .catch(error=>{
//                 res.status(500).json({errorMessage: error.message})
//             })
// });

module.exports = router;