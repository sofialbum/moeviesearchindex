const Movie = require("./../models/movieModel");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      status: 'success',
      results: movies.length,
      data: {
        movies
      }
    });
  }catch (err) {
    res.status(400).json({
      status:'fail',
      message: err
    });
  }
}

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        movie
      }
    });
  } catch(err) {
    res.status(400).json({
      status:'fail',
      message: err
    });
  }
}