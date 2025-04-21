import { useState, useEffect } from "react";
import {
  getMoviesPopular,
  getMoviesTrending,
  getMoviesNewRelease,
  getMoviesWatchingFilm,
  getMoviesWatchingSeries,
  getMoviesOffering,
} from "../api/moviesApi";

const useFetchMovies = (category) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let data = [];
        if (category === "watchingFilm") {
          data = await getMoviesWatchingFilm();
        } else if (category === "popular") {
          data = await getMoviesPopular();
        } else if (category === "trending") {
          data = await getMoviesTrending();
        } else if (category === "new") {
          data = await getMoviesNewRelease();
        } else if (category === "watchingSeries") {
          data = await getMoviesWatchingSeries();
        } else if (category === "offering") {
          data = await getMoviesOffering();
        }

        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  return { movies, loading, error };
};

export default useFetchMovies;
