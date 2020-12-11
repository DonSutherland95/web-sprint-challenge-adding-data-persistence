// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router();


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
    // if(!req.body.name){
    //     res.status(400).json({message: `Please fill out name and completed fields`})
    // } else {
        Project.addProject(req.body)
             .then((data) => {
                        return Project.getById(data);
                    })
              .then((data) => {
                    if (data["completed"] === 0) 
                    {
                        res.status(201).json({
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        completed: false,
                        });
                    } else {
                        res.status(200).json({
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        completed: true,
                        });
                    }
                 })     
            .catch(error=>{
                res.status(500).json({errorMessage: error.message})
            })
    
    
})



module.exports = router;