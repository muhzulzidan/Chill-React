import axiosInstance from "./axiosInstance";

export const getMoviesWatchingFilm = async () => {
  try {
    const response = await axiosInstance.get("movie/now_playing");
    return response.data.results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMoviesPopular = async () => {
  try {
    const response = await axiosInstance.get("movie/popular");
    return response.data.results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMoviesTrending = async () => {
  try {
    const response = await axiosInstance.get("movie/top_rated");
    return response.data.results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMoviesNewRelease = async () => {
  try {
    const response = await axiosInstance.get("movie/upcoming");
    return response.data.results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMoviesWatchingSeries = async () => {
  try {
    const response = await axiosInstance.get("tv/airing_today");
    return response.data.results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMoviesOffering = async () => {
  try {
    const response = await axiosInstance.get("tv/popular");
    return response.data.results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
