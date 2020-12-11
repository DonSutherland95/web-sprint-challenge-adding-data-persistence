// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router();

// router.get('/', (req, res)=>{
//     Project.findProjects()
//         .then(projects=>{
            
//             projects.map(project=>{
//                 project.completed === 0 ? project.completed = false : project.completed = true 
//             })
//             res.status(200).json(projects)
//         })
//         .catch(err=>{
//             res.status(500).json(err.message)
//         })
// })

// router.post('/',(req, res)=>{
//     if(!req.body.name || !req.body.completed){
//         res.status(400).json({message: `Please fill out name and completed fields`})
//     } else {
//         Project.addProject(req.body)
//             .then(project=>{
//                 res.status(201).json(project)
//             })
//             .catch(error=>{
//                 res.status(500).json({errorMessage: error.message})
//             })
//     }
    
// })
router.get('/', (req, res)=>{
    Project.findProjects()
        .then(projects=>{
            
            projects.map(project=>{
                project.completed === 0 ? project.completed = false : project.completed = true 
            })
            res.status(200).json(projects)
        })
        .catch(err=>{
            res.status(500).json(err.message)
        })
})

router.post('/',(req, res)=>{
    if(!req.body.name || !req.body.completed){
        res.status(400).json({message: `Please fill out name and completed fields`})
    } else {
        Project.addProject(req.body)
            .then(projects=>{
                projects.map(project=>{
                    project.completed === 0 ? project.completed = false : project.completed = true 
                })
                res.status(201).json(projects)
            })
            .catch(error=>{
                res.status(500).json({errorMessage: error.message})
            })
    }
    
})

// router.get('/', (req, res)=>{
//     Project.findProjects()
//         .then(projects=>{
//             const list = [];
//             projects.map(project=>{
//                 if(project.completed ===0){
//                     list.push({
//                         id: project.id,
//                         name: project.name,
//                         description: project.description,
//                         completed: false
//                     });
//                 } else{
//                     list.push({
//                         id: project.id,
//                         name: project.name,
//                         description: project.description,
//                         completed: true
//                     });
//                 }
//             })
            
//             res.status(200).json(projects)
//         })
//         .catch(err=>{
//             res.status(500).json(err.message)
//         })
// })

// router.post('/',(req, res)=>{
//     if(!req.body.name || !req.body.completed){
//         res.status(400).json({message: `Please fill out name and completed fields`})
//     } else {
//         Project.addProject(req.body)
//             .then(project=>{
//                 res.status(201).json(project)
//             })
//             .catch(error=>{
//                 res.status(500).json({errorMessage: error.message})
//             })
//     }
    
// })

// const Model = require('./model')

// router.get("/", (req, res) => {
//   Model.getAll().then((data) => {
//     const toSend = [];
//     for (let i in data) {
//       if (data[i]["completed"] === 0) {
//         toSend.push({
//           id: data[i].id,
//           name: data[i].name,
//           description: data[i].description,
//           completed: false,
//         });
//       } else {
//         toSend.push({
//           id: data[i].id,
//           name: data[i].name,
//           description: data[i].description,
//           completed: true,
//         });
//       }
//     }
//     res.status(200).json(toSend);
//   });
// });

// router.post("/", (req, res) => {
//   Model.create(req.body)
    
//     .then((data) => {
//       return Model.getById(data);
//     })
//     .then((data) => {
//       if (data["completed"] === 0) {
//         res.status(200).json({
//           id: data.id,
//           name: data.name,
//           description: data.description,
//           completed: false,
//         });
//       } else {
//         res.status(200).json({
//           id: data.id,
//           name: data.name,
//           description: data.description,
//           completed: true,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(400).json(err.message);
//     });
// });


module.exports = router;