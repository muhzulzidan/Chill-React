import { useRef, useMemo, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Elements/Arrow/Arrow.jsx"; // Pastikan path ini benar
import MovieDetailModal from "../Elements/Container/MovieDetailModal.jsx"; // Pastikan path ini benar
import ContinueWatching from "../Elements/ContinueWatch/ContinueWatching.jsx"; // Path ke komponen yang sudah ada
import useMovieStore from '../../store/useMovieStore.js';

const ContinueWatchingFilm = () => {
  const { movies, fetchMovies, selectedMovie, setSelectedMovie, clearSelectedMovie } = useMovieStore();
  // Fetch movies on mount (best practice for Zustand async data)
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);
  const sliderRef = useRef(null);
  const sliderItemHeight = "h-[162px]";
  console.log(movies, "movies ContinueWatchingFilm")
  // Filter only movies (type: 'Film')
  const nowPlayingMovies = useMemo(() =>
    movies.filter((movie) => movie.type === 'Film'),
    [movies]
  );

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) return <div className={`${sliderItemHeight} flex justify-center items-center w-full`}><p>No movies to display.</p></div>;

  const slidesToShowCount = 4;

  const settings = {
    dots: false,
    infinite: nowPlayingMovies.length > slidesToShowCount,
    speed: 700,
    slidesToShow: slidesToShowCount,
    slidesToScroll: slidesToShowCount,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: slidesToShowCount,
          slidesToScroll: slidesToShowCount,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const itemPadding = "px-[12px]";

  return (
    <div className={`relative w-full ${sliderItemHeight} group`}>
      <Arrow
        onScrollLeft={() => sliderRef.current?.slickPrev()}
        onScrollRight={() => sliderRef.current?.slickNext()}
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-auto"
      />
      <Slider
        ref={sliderRef}
        {...settings}
        className="h-full"
      >
        {nowPlayingMovies.map((movie) => (
          <div key={movie.id || movie._id} className={`${sliderItemHeight} ${itemPadding}`}>
            <ContinueWatching
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>

      {selectedMovie && (
        <MovieDetailModal movie={selectedMovie} onClose={clearSelectedMovie} />
      )}
    </div>
  );
};

export default ContinueWatchingFilm;