import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Elements/Arrow/Arrow";
import MovieDetailModal from "../Elements/Container/MovieDetailModal";
import ContainerPremium from "../Elements/Container/ContainerPremium";
import useFetchMovies from "../../hooks/useFetchMovies";
import useMovieStore from "../../store/useMovieStore";

const SeriesOffering = () => {
  const { movies, loading, error } = useFetchMovies("watchingFilm");
  const { selectedMovie, setSelectedMovie, clearSelectedMovie } =
    useMovieStore();
  const sliderRef = useRef(null);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <div className="relative w-full min-h-[145px] sm:h-[365px] group">
      <Arrow
        onScrollLeft={() => sliderRef.current?.slickPrev()}
        onScrollRight={() => sliderRef.current?.slickNext()}
        className="absolute top-1/2 -translate-y-1/2 left-2 right-2 z-10 pointer-events-auto"
      />

      <Slider
        ref={sliderRef}
        {...settings}
        className="relative z-0 group-hover:z-20"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="px-1 max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-full"
          >
            <ContainerPremium
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
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

export default SeriesOffering;
