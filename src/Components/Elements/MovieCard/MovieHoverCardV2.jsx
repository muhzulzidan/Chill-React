import { PlayIcon, CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

const MovieHoverCardV2 = ({ movie }) => {
  const {
    title = "Judul Tidak Tersedia",
    image,
    type = "Info", 
    duration,
    episodes,
    genre = [],  
    age_rating,
  } = movie || {}; 
  let displayInfo = "";
  if (type === "Film") {
    displayInfo = duration || "Durasi N/A";
  } else if (type === "Serial TV") {
    displayInfo = episodes ? `${episodes} Episode` : "Episode N/A";
  } else {
    displayInfo = type;  
  }

  const posterImage = image || "https://placehold.co/300x180/141414/FFFFFF?text=No+Image";

  return (
    <div className="w-[330px] h-[330px] rounded-xl shadow-2xl bg-[#141414] text-gray-300 overflow-hidden flex flex-col">
      <div className="relative">
        <img 
          src={posterImage} 
          alt={`Poster ${title}`} 
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/300x180/141414/FFFFFF?text=Error";
            e.target.alt = "Gagal memuat gambar";
          }}
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button 
              title="Play"
              className="bg-white text-black hover:bg-gray-200 w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150"
              onClick={() => console.log("Play V2:", title)}  
            >
              <PlayIcon className="h-5 w-5" />  
            </button>
            <button 
              title="Tambahkan ke Daftar"
              className="bg-white/20 border border-white/30 text-white hover:bg-white/30 w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150"
              onClick={() => console.log("Check V2:", title)}  
            >
              <CheckIcon className="h-5 w-5" />
            </button>
          </div>
          <button 
            title="Info Lebih Lanjut"
            className="bg-white/20 border border-white/30 text-white hover:bg-white/30 w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150"
            onClick={() => console.log("More Info V2:", title)}  
          >
            <ChevronDownIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          {age_rating && (
            <span className="border border-gray-500 px-1.5 py-0.5 rounded text-xs text-gray-300">
              {age_rating}
            </span>
          )}
          <span className="font-medium text-white truncate flex-1 min-w-0">{displayInfo}</span>
        </div>

        <div className="flex flex-wrap items-center text-xs text-gray-400">
          {genre.slice(0, 3).map((g, i, arr) => (
            <React.Fragment key={`${g}-${i}`}> 
              <span>{g}</span>
              {i < arr.length - 1 && <span className="mx-1.5 text-gray-600">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieHoverCardV2;