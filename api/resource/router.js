// build your `/api/resources` router here
const express = require('express')

const router = express.Router();

const Resource = require("./model");

router.get("/", (req, res) => {
  Resource.getAll().then((data) => {
    res.status(200).json(data);
  });
});

router.post("/", (req, res) => {
  Resource.create(req.body)
    .then((data) => {
      return Resource.getById(data);
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});

module.exports = router;