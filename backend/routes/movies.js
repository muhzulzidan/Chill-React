const express = require("express");
const api = require("../api"); // Import the Axios instance

const router = express.Router();
router.get("/details", async (req, res) => {
    const { id } = req.query;
    try {
        const response = await api.get("/", { params: { i: id } });
        res.json(response.data || {});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch movie details" });
    }
});
// Routes
router.get("/now-playing", async (req, res) => {
  const movies = await api.get("movie/now_playing");
  res.json(movies.data.results);
});

router.get("/popular", async (req, res) => {
  const movies = await api.get("movie/popular");
  res.json(movies.data.results);
});

router.get("/trending", async (req, res) => {
  const movies = await api.get("movie/top_rated");
  res.json(movies.data.results);
});

router.get("/new-release", async (req, res) => {
  const movies = await api.get("movie/upcoming");
  res.json(movies.data.results);
});

router.get("/watching-series", async (req, res) => {
  const movies = await api.get("tv/airing_today");
  res.json(movies.data.results);
});

router.get("/offering", async (req, res) => {
  const movies = await api.get("tv/popular");
  res.json(movies.data.results);
});

router.get("/search", async (req, res) => {
  const { title } = req.query;
  try {
    const response = await api.get("/", { params: { s: title } });
    res.json(response.data.Search || []);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

module.exports = router;
