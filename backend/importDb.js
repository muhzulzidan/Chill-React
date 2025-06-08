// importDb.js
// Script to import movies from db.json into MongoDB


const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Use current working directory for db.json path

// Define Movie schema (adjust fields as needed)
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

const Movie = mongoose.model('Movie', movieSchema);

async function importMovies() {
  await mongoose.connect('mongodb://localhost:27017/chill-react', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // eslint-disable-next-line no-undef
  const dbPath = path.resolve(__dirname, '../db.json');
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  // Clean up episodes field: convert 'N/A' or missing to null
  const movies = data.movies.map(movie => ({
    ...movie,
    episodes: movie.episodes === 'N/A' || movie.episodes === undefined ? null : movie.episodes
  }));

  // Remove existing movies to avoid duplicates
  await Movie.deleteMany({});
  await Movie.insertMany(movies);
  console.log('Movies imported successfully!');
  mongoose.disconnect();
}

importMovies().catch(err => {
  console.error('Error importing movies:', err);
  mongoose.disconnect();
});
