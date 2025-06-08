const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./auth/server.js'); // Ensure correct import of auth routes
const moviesRoutes = require("./routes/movies");
const app = express();
const PORT = 5001;

console.log('Auth routes:', authRoutes); // Debugging log

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chill-react', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/auth', authRoutes);
app.use("/api/movies", moviesRoutes); // Add movie routes

// Test route to verify server setup
app.get('/test', (req, res) => {
  res.send('Server is working correctly');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
