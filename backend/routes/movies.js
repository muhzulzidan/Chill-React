/* eslint-disable no-unused-vars */


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Movie schema (should match your importDb.js)
const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  rating: {
    imdb: String,
    rotten_tomatoes: String
  },
  type: String,
  genre: [String],
  age_rating: String,
  episodes: Number,
  duration: String
});
const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

// Helper: get random sample
function getRandomSample(arr, n) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

// Get all movies and series
router.get('/', async (req, res) => {
  try {
    const allMovies = await Movie.find({});
    res.json({ results: allMovies });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


// /movie/now_playing: Return random 10 films
router.get('/movie/now_playing', async (req, res) => {
  const movies = await Movie.find({ type: 'Film' });
  res.json({ results: getRandomSample(movies, 10) });
});

// /movie/popular: Return random 10 films (could be improved with a 'popular' field)
router.get('/movie/popular', async (req, res) => {
  const movies = await Movie.find({ type: 'Film' });
  res.json({ results: getRandomSample(movies, 10) });
});

// /movie/top_rated: Return top 10 by imdb rating
router.get('/movie/top_rated', async (req, res) => {
  const movies = await Movie.find({ type: 'Film' });
  const sorted = movies.sort((a, b) => {
    const aRating = parseFloat((a.rating.imdb || '0').split('/')[0]);
    const bRating = parseFloat((b.rating.imdb || '0').split('/')[0]);
    return bRating - aRating;
  });
  res.json({ results: sorted.slice(0, 10) });
});

// /movie/upcoming: Return random 10 films (could be improved with a 'release_date' field)
router.get('/movie/upcoming', async (req, res) => {
  const movies = await Movie.find({ type: 'Film' });
  res.json({ results: getRandomSample(movies, 10) });
});

// /tv/airing_today: Return random 10 series
router.get('/tv/airing_today', async (req, res) => {
  const series = await Movie.find({ type: 'Serial TV' });
  res.json({ results: getRandomSample(series, 10) });
});

// /tv/popular: Return random 10 series
router.get('/tv/popular', async (req, res) => {
  const series = await Movie.find({ type: 'Serial TV' });
  res.json({ results: getRandomSample(series, 10) });
});

module.exports = router;
