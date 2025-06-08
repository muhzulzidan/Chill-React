import { useState, useEffect } from "react";
import api from "./../api/axiosConfig";

// endpoint should be like '/movie/now_playing', '/movie/popular', etc.
const useFetchMovies = (endpoint = "/movies", property = "results") => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get(endpoint);
        const data = property ? response.data[property] : response.data;
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint, property]);

  return { movies, loading, error };
};

export default useFetchMovies;