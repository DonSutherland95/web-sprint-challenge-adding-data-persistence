// build your `/api/resources` router here
const express = require('express')

const Resource = require('./model')

const router = express.Router();

router.get('/', (req, res)=>{
    Resource.findResources()
        .then(resources=>{
            res.status(200).json(resources)
        })
        .catch(err=>{
            res.status(500).json(err.message)
        })
})

// router.post('/',(req, res)=>{
//     if(!req.body.name){
//         res.status(400).json({message: `Please fill out name fields`})
//     } else {
//         Resource.addResource(req.body)
//             .then(resource=>{
//                 res.status(201).json(resource)
//             })
//             .catch(error=>{
//                 res.status(500).json({errorMessage: error.message})
//             })
//     }
    
// })
router.post('/',(req, res)=>{
    
        Resource.addResource(req.body)
            .then(resource=>{
                return Resource.getById(resource)
            })
            .then(resource=>{
                res.status(201).json(resource)
            })
            .catch(error=>{
                res.status(500).json({errorMessage: error.message})
            })
    
    
})

module.exports = router;