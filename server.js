const express = require('express');

const dishesRouter = require('./dishes/dishes-router');
const recipesRouter = require('./recipes/recipes-router');

const server = express();

//Global middleware
server.use(express.json())

// Routes
server.use("/api/dishes", dishesRouter)
server.use("/api/recipes", recipesRouter)

server.get('/', (req, res) => {
  res.send("Welcome To Recipe Book API")
})

module.exports = server;