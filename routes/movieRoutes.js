const express = require('express');
const movieController = require('./../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getAllMovies);

router.get('/:id', movieController.getMovie);

module.exports = router;