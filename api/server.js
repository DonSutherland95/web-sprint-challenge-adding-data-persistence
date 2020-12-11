// build your server here
const express = require('express')
const server = express();

const ProjectRouter = require('./project/router')
const ResourceRouter = require('./resource/router')
const TaskRouter = require('./task/router')

server.use(express.json());
server.use('/api/project', ProjectRouter);
server.use('/api/resource', ResourceRouter);
server.use('/api/task', TaskRouter);

module.exports = server;
