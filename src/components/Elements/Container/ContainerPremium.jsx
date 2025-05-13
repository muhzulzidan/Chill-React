import { useState } from "react";
import Premium from "./../TagFilm/Premium.jsx";

const ContainerPremium = ({ movie, onClick }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      onMouseDown={() => setIsDragging(false)}
      onMouseMove={() => setIsDragging(true)}
      onClickCapture={() => {
        if (!isDragging) {
          onClick();
        }
      }}
      className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <Premium />
    </div>
  );
};

export default ContainerPremium;
