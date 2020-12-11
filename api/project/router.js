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
    if(!req.body.name || !req.body.completed){
        res.status(400).json({message: `Please fill out name and completed fields`})
    } else {
        Project.addProject(req.body)
            .then(project=>{
                res.status(201).json(project)
            })
            .catch(error=>{
                res.status(500).json({errorMessage: error.message})
            })
    }
    
})

module.exports = router;