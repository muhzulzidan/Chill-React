import React, { useState, useRef, useCallback } from "react";
import Slider from "react-slick";
import ReactDOM from "react-dom";
import Arrow from "../Elements/Arrow/Arrow.jsx";
import MovieHoverCardV2 from "../Elements/MovieCard/MovieHoverCardV2.jsx";
import useFetchMovies from "../../hooks/useFetchMovies.js";
import melanjutkanData from "../../../db.json"; // Import data dari db.json

const Trending = () => {
  const { movies, loading, error } = useFetchMovies("/movies");
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [hoverCardStyle, setHoverCardStyle] = useState({
    opacity: 0,
    transform: "scale(1)",
    visibility: "hidden",
    transition: "transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 200ms ease-out",
    pointerEvents: "none",
  });
  const itemInteractionTimer = useRef(null);
  const currentHoveredItemRef = useRef(null);
  const sliderRef = useRef(null);

  const portalRoot = document.getElementById("movie-hover-card-portal-root");

  // Filter hanya film
  const trendingMovies = movies?.filter((movie) => movie.type === "Film") || [];

  // Fungsi untuk mencocokkan data dari "Melanjutkan"
  const getMovieDataFromMelanjutkan = useCallback((originalTitleFromMovies) => {
    const normalizedTitle = originalTitleFromMovies.replace(/^card\s+/i, "").trim().toLowerCase();
    return melanjutkanData.Melanjutkan.find(
      (item) => item.title.trim().toLowerCase() === normalizedTitle
    );
  }, []);

  const calculateExactPosition = useCallback((targetElement) => {
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const offsetX = rect.width / 5;
      const offsetY = rect.height / -10;
      return {
        position: "absolute",
        top: `${rect.top + window.scrollY - offsetY}px`,
        left: `${rect.left + window.scrollX - offsetX}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        zIndex: 1000,
        transformOrigin: "center center",
        pointerEvents: "auto",
      };
    }
    return {};
  }, []);

  const handleMouseEnterItemOrCard = useCallback((movie, targetElement) => {
    clearTimeout(itemInteractionTimer.current);
    const currentTarget = targetElement || currentHoveredItemRef.current;
    if (targetElement) {
      currentHoveredItemRef.current = targetElement;
    }

    itemInteractionTimer.current = setTimeout(() => {
      if (currentTarget || movie) {
        const melanjutkanMatch = getMovieDataFromMelanjutkan(movie.title);
        const movieForHoverCard = melanjutkanMatch
          ? { ...movie, ...melanjutkanMatch, image: melanjutkanMatch.image || movie.image }
          : movie;
        setHoverCardStyle({
          ...calculateExactPosition(currentTarget),
          opacity: 1,
          visibility: "visible",
          transform: "scale(1.2)", // Pop-out scale
          transition: "transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 200ms ease-out",
          pointerEvents: "auto",
        });
        setHoveredMovie(movieForHoverCard);
      }
    }, 200);
  }, [calculateExactPosition, getMovieDataFromMelanjutkan]);

  const handleMouseLeaveItemOrCard = useCallback(() => {
    clearTimeout(itemInteractionTimer.current);
    itemInteractionTimer.current = setTimeout(() => {
      setHoverCardStyle((prevStyle) => ({
        ...prevStyle,
        opacity: 0,
        transform: "scale(1)",
        transition: "transform 200ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 150ms ease-in",
        pointerEvents: "none",
      }));
      setTimeout(() => {
        setHoveredMovie(null);
        setHoverCardStyle((s) => ({ ...s, visibility: "hidden", pointerEvents: "none" }));
      }, 200);
    }, 100);
  }, []);

  const settings = {
    dots: false,
    infinite: trendingMovies.length >= 5,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5, slidesToScroll: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "40px" },
      },
    ],
  };

  if (loading) return <div className="h-[200px] flex justify-center items-center"><p>Loading Trending Movies...</p></div>;
  if (error) return <div className="h-[200px] flex justify-center items-center"><p>Error: {error.message}</p></div>;
  if (!trendingMovies || trendingMovies.length === 0) return <div className="h-[200px] flex justify-center items-center"><p>No Trending Movies.</p></div>;

  return (
    <div className="relative w-full group">
      <Arrow
        onScrollLeft={() => sliderRef.current?.slickPrev()}
        onScrollRight={() => sliderRef.current?.slickNext()}
        className="absolute top-1/2 -translate-y-1/2 -left-1 -right-1 sm:-left-2 sm:-right-2 z-20 pointer-events-auto"
      />

      <div className="mx-auto w-[calc(100%-30px)] sm:w-[calc(100%-50px)]">
        <Slider ref={sliderRef} {...settings} className="py-2">
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              onMouseEnter={(e) => handleMouseEnterItemOrCard(movie, e.currentTarget)}
              onMouseLeave={handleMouseLeaveItemOrCard}
              className="px-3 outline-none focus:outline-none h-auto"
            >
              <div
                className="w-full aspect-[3/5] rounded-lg overflow-hidden cursor-pointer group/item relative transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src={movie.image || "https://placehold.co/200x300/1f2937/FFFFFF?text=No+Image"}
                  alt={movie.title || "Movie Poster"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {portalRoot && ReactDOM.createPortal(
        <div
          style={hoverCardStyle}
          onMouseEnter={() => clearTimeout(itemInteractionTimer.current)}
          onMouseLeave={handleMouseLeaveItemOrCard}
        >
          {hoveredMovie && <MovieHoverCardV2 movie={hoveredMovie} />}
        </div>,
        portalRoot
      )}
    </div>
  );
};

export default Trending;