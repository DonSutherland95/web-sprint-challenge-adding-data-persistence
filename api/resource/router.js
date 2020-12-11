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

router.post('/',(req, res)=>{
    if(!req.body.name){
        res.status(400).json({message: `Please fill out name fields`})
    } else {
        Resource.addResource(req.body)
            .then(resource=>{
                res.status(201).json(resource)
            })
            .catch(error=>{
                res.status(500).json({errorMessage: error.message})
            })
    }
    
})
// router.post('/',(req, res)=>{
    
//         Resource.addResource(req.body)
//             .then(resource=>{
//                 return Resource.getById(resource)
//             })
//             .then(resource=>{
//                 res.status(201).json(resource)
//             })
//             .catch(error=>{
//                 res.status(500).json({errorMessage: error.message})
//             })
    
    
// })
// const Model = require("./model");
// router.post("/", (req, res) => {
//   Model.create(req.body)
//     .then((data) => {
//       return Model.getById(data);
//     })
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(400).json(err.message);
//     });
// });

module.exports = router;