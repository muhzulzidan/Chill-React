import { useState, useEffect } from "react";
import { FaPlay, FaRegBookmark, FaBookmark } from "react-icons/fa";
import useMyListStore from "./../../../store/useMyListStore";
import useAuthStore from "./../../../store/useAuthStore";

const MovieDetailModal = ({ movie, onClose }) => {
  const { myList, addToMyList, removeFromMyList } = useMyListStore();
  const { user } = useAuthStore();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (movie && myList.length > 0) {
      setIsSaved(myList.some((m) => m.movie_id === movie.id));
    }
  }, [myList, movie]);

  const handleBookmarkClick = async () => {
    if (!user) {
      alert("Silakan login terlebih dahulu untuk menyimpan film.");
      return;
    }

    if (isSaved) {
      await removeFromMyList(user.id, movie.id);
    } else {
      await addToMyList(user.id, movie);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white dark:bg-gray-900 rounded-lg max-w-lg w-full overflow-hidden">
        <div className="relative h-48 sm:h-60">
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.title || "Movie Image"}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl"
          >
            ✖
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">{movie.title}</h2>
          <p className="text-sm text-gray-300">{movie.overview}</p>

          <div className="flex items-center gap-4 mt-4">
            <button className="flex items-center justify-center bg-white text-black rounded-full w-10 h-10">
              <FaPlay />
            </button>

            <button
              onClick={handleBookmarkClick}
              className={`flex items-center justify-center ${
                isSaved ? "bg-green-500" : "bg-gray-800"
              } text-white rounded-full w-10 h-10`}
            >
              {isSaved ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
