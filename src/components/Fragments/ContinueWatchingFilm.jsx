// File: src/components/Fragments/ContinueWatchingFilm.jsx
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Elements/Arrow/Arrow"; // Pastikan path ini benar
import MovieDetailModal from "../Elements/Container/MovieDetailModal"; // Pastikan path ini benar
import ContinueWatching from "../Elements/ContinueWatch/ContinueWatching"; // Path ke komponen yang sudah ada
import useFetchMovies from "../../hooks/useFetchMovies";
import useMovieStore from '../../store/useMovieStore';

const ContinueWatchingFilm = () => {
  const { movies, loading, error } = useFetchMovies("/Melanjutkan");
  const { selectedMovie, setSelectedMovie, clearSelectedMovie } = useMovieStore();
  const sliderRef = useRef(null);

  // Tinggi item slider kembali ke 162px
  const sliderItemHeight = "h-[162px]";

  if (loading) return <div className={`${sliderItemHeight} flex justify-center items-center w-full`}><p>Loading movies...</p></div>;
  if (error) return <div className={`${sliderItemHeight} flex justify-center items-center w-full`}><p>Error: {error.message}</p></div>;
  if (!movies || movies.length === 0) return <div className={`${sliderItemHeight} flex justify-center items-center w-full`}><p>No movies to display.</p></div>;

  const slidesToShowCount = 4; // Default slidesToShow untuk desktop

  const settings = {
    dots: false,
    infinite: movies.length > slidesToShowCount, // Sesuaikan dengan slidesToShowCount
    speed: 700,
    slidesToShow: slidesToShowCount,
    slidesToScroll: slidesToShowCount,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // Cocok dengan max-width layout
        settings: {
          slidesToShow: slidesToShowCount, // 4 item pada 1280px
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

  // Padding untuk gap 24px antar item
  const itemPadding = "px-[12px]";

  return (
    <div className={`relative w-full ${sliderItemHeight} group`}> {/* Tinggi slider utama */}
      <Arrow
        onScrollLeft={() => sliderRef.current?.slickPrev()}
        onScrollRight={() => sliderRef.current?.slickNext()}
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-auto"
      />
      <Slider
        ref={sliderRef}
        {...settings}
        className="h-full" // Slider mengisi tinggi kontainer
      >
        {movies.map((movie) => (
          // Wrapper item, menerapkan tinggi dan padding untuk gap
          <div key={movie.id} className={`${sliderItemHeight} ${itemPadding}`}>
            <ContinueWatching
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              className="w-full h-full" // ContinueWatching akan mengisi wrapper ini
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