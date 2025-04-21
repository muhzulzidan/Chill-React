import { useState } from "react";
import NewEpisode from "../TagFilm/NewEpisode";

const ContainerNewEpisode = ({ movie, image, onClick }) => {
  const [isDragging, setIsDragging] = useState(false);
  const posterPath = movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : image;
  const title = movie?.title || "Unknown Title";

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
      <img src={posterPath} alt={title} className="rounded-lg" />
      <NewEpisode />
    </div>
  );
};

export default ContainerNewEpisode;
