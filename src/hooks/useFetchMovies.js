import { useState, useEffect } from "react";
import api from "./../api/axiosConfig";

const useFetchMovies = (endpoint = "/movies", property = null) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get(endpoint); // Ambil data dari endpoint
        const data = property ? response.data[property] : response.data; // Ambil properti tertentu jika diberikan
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