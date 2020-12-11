// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router();

router.get('/', (req, res)=>{
    Task.findTasks()
        .then(tasks=>{
            tasks.map(task=>{
                task.completed === 0 ? task.completed = false : task.completed = true 
            })
            res.status(200).json(tasks)
        })
        .catch(err=>{
            res.status(500).json(err.message)
        })
})
router.post('/',(req, res)=>{
    if(!req.body.description || !req.body.completed){
        res.status(400).json({message: `Please fill out description and completed fields`})
    } else {
        Task.addTask(req.body)
            .then(task=>{
                res.status(201).json(task)
            })
            .catch(error=>{
                res.status(500).json({errorMessage: error.message})
            })
    }
    
})

module.exports = router;