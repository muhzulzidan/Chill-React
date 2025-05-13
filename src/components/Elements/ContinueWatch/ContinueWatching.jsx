// src/components/Elements/ContinueWatch/ContinueWatching.jsx
import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import MovieHoverCard from '../MovieCard/MovieHoverCard'; // Pastikan path ini benar

const ContinueWatching = ({ movie, className }) => {
  const [isHoverCardVisible, setIsHoverCardVisible] = useState(false);
  const [cardPositionStyle, setCardPositionStyle] = useState({});
  const itemRef = useRef(null);
  const interactionTimer = useRef(null);

  const originalTitle = movie?.title || "Tanpa Judul";
  let displayRatingTextOriginal = "";
  if (movie?.rating?.imdb && movie.rating.imdb !== "N/A") {
    displayRatingTextOriginal = movie.rating.imdb.split('/')[0];
  } else if (movie?.rating?.my_anime_list && movie.rating.my_anime_list !== "N/A") {
    displayRatingTextOriginal = movie.rating.my_anime_list.split('/')[0];
  }

  const calculatePosition = useCallback(() => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const hoverCardWidth = 300;
      const hoverCardHeight = 260;
      let top = rect.bottom + window.scrollY + 10;
      let left = rect.left + window.scrollX;

      if (left + hoverCardWidth > window.innerWidth) {
        left = window.innerWidth - hoverCardWidth - 10;
      }
      return {
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        zIndex: 1000
      };
    }
    return {};
  }, []);

  const showHoverCard = useCallback(() => {
    clearTimeout(interactionTimer.current);
    interactionTimer.current = setTimeout(() => {
      setCardPositionStyle(calculatePosition());
      setIsHoverCardVisible(true);
    }, 200);
  }, [calculatePosition]);

  const hideHoverCard = useCallback(() => {
    clearTimeout(interactionTimer.current);
    interactionTimer.current = setTimeout(() => {
      setIsHoverCardVisible(false);
    }, 150);
  }, []);

  const portalRoot = document.getElementById('movie-hover-card-portal-root');

  return (
    <div
      ref={itemRef}
      onMouseEnter={showHoverCard}
      onMouseLeave={hideHoverCard}
      onClick={(e) => {
        e.stopPropagation(); 
      }}
      className={`relative aspect-[2/3] w-full cursor-pointer rounded-lg overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${className || ""}`}
    >
      <img 
        src={movie?.image || "https://placehold.co/200x300/222/fff?text=No+Image"} 
        alt={originalTitle} 
        className="w-full object-cover" 
      />

      {/* Overlay Judul + Rating */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 px-3 py-2 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
      >
        <h6 className="text-white font-semibold text-sm leading-tight truncate">
          {originalTitle}
        </h6>
        {displayRatingTextOriginal && (
          <span className="text-white text-xs font-semibold">★ {displayRatingTextOriginal}</span>
        )}
      </div>

      {/* Hover Card yang muncul di tengah posisi card (membesar) */}
      {isHoverCardVisible && portalRoot && ReactDOM.createPortal(
        <div
          style={{
            position: 'absolute',
            top: `${itemRef.current?.getBoundingClientRect().top + window.scrollY}px`,
            left: `${itemRef.current?.getBoundingClientRect().left + window.scrollX}px`,
            width: `${itemRef.current?.offsetWidth}px`,
            height: `${itemRef.current?.offsetHeight}px`,
            zIndex: 9999,
            transformOrigin: 'center center',
            transition: 'transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 300ms ease'
          }}
          onMouseEnter={showHoverCard}
          onMouseLeave={hideHoverCard}
          className="hover-card-container scale-125 opacity-100"
        >
          <MovieHoverCard movie={movie} />
        </div>,
        portalRoot
      )}
    </div>
  );
};

export default ContinueWatching;
