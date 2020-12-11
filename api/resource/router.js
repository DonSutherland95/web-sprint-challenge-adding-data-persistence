// build your `/api/resources` router here
const express = require('express')

const router = express.Router();

const Model = require("./model");

router.get("/", (req, res) => {
  Model.getAll().then((data) => {
    res.status(200).json(data);
  });
});

router.post("/", (req, res) => {
  Model.create(req.body)
    .then((data) => {
      return Model.getById(data);
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;