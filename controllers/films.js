//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require("express");
var router = new express.Router();

// INDEX
router.get("/", function(req, res){
  res.json(films);
})

// SHOW
router.get("/:id", function(req, res){
  var index = req.params.id;
  res.json(films[index]);
})

// CREATE
router.post("/", function(req, res){
  var filmToAdd = req.body;
  films.push(filmToAdd);
  res.json(films);
})

// UPDATE
router.put("/:id", function(req, res){
  var indexToChange = req.params.id;
  var filmToUpdate = req.body;
  films[indexToChange] = filmToUpdate;
  res.json(films);
})

// delete
router.delete("/:id", function(req, res){
  var indexToDelete = req.params.id;
  films.splice(indexToDelete, 1);
  res.json(films);
})

module.exports = router;
