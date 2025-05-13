// src/components/Elements/MovieCard/MovieHoverCard.jsx
import React from 'react';

// --- Helper functions (pastikan ada di sini atau diimpor) ---
const parseDurationToSeconds = (durationStr) => {
  if (!durationStr || typeof durationStr !== 'string') return 0;
  let totalSeconds = 0;
  const hoursMatch = durationStr.match(/(\d+)j/);
  const minutesMatch = durationStr.match(/(\d+)m/);
  if (hoursMatch) totalSeconds += parseInt(hoursMatch[1], 10) * 3600;
  if (minutesMatch) totalSeconds += parseInt(minutesMatch[1], 10) * 60;
  return totalSeconds;
};

const formatSecondsToDurationString = (totalSeconds) => {
  if (isNaN(totalSeconds) || totalSeconds < 0) return ""; // Kembalikan string kosong jika tidak valid atau negatif
  if (totalSeconds === 0 && type === "Film") return "Selesai"; // Menangani kasus film selesai
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  let result = '';
  if (h > 0) result += `${h}j `;
  if (m > 0) result += `${m}m`;
  if (result === '') {
      if (totalSeconds > 0) return "<1m";
      return ""; // Kosong jika 0 detik dan bukan film selesai
  }
  return result.trim();
};
// --- Akhir Helper Functions ---

// Komponen Ikon (sama seperti sebelumnya)
const PlayIcon = () => ( <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg> ); // Mengubah ikon play agar sesuai gambar
const CheckIcon = () => ( <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> ); // Ikon centang lebih tebal
const ChevronDownIcon = () => ( <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg> );

// Variabel global 'type' untuk formatSecondsToDurationString
let type = "Film"; 

const MovieHoverCard = ({ movie }) => {
  const {
    title = "Judul Tidak Tersedia",
    image,
    // rating, // Rating tidak terlihat di gambar target hover card, jadi kita bisa abaikan di sini
    genre = ["N/A"],
    // age_rating, // Tidak terlihat di gambar target hover card
    watch_history,
  } = movie;
  type = movie?.type || "Film"; // Update 'type' global untuk formatSecondsToDurationString

  const poster = image || "https://placehold.co/300x180/1f2937/FFFFFF?text=No+Image"; // Background gelap untuk placeholder

  let progressPercent = 0;
  let episodeInfo = ""; 
  let durationInfo = "";  

  if (type === "Serial TV" && watch_history && typeof watch_history.last_watched_episode === 'number') {
    const totalEpisodes = movie.episodes || watch_history.total_episodes || 0; // Ambil total_episodes dari root atau watch_history
    if (totalEpisodes > 0) {
        progressPercent = (watch_history.last_watched_episode / totalEpisodes) * 100;
    }
    episodeInfo = `Episode ${watch_history.last_watched_episode === totalEpisodes && totalEpisodes > 0 ? watch_history.last_watched_episode : watch_history.last_watched_episode + 1}`; // Tampilkan episode saat ini jika selesai, atau berikutnya
    const remainingEpisodes = totalEpisodes > 0 ? totalEpisodes - watch_history.last_watched_episode : 0;
    durationInfo = totalEpisodes > 0 ? (remainingEpisodes > 0 ? `${remainingEpisodes} ep tersisa` : "Selesai") : "";
     if (watch_history.last_watched_episode === totalEpisodes && totalEpisodes > 0) {
        episodeInfo = `Terakhir ditonton: Ep ${totalEpisodes}`;
    }

  } else if (type === "Film" && watch_history && watch_history.last_watched_duration && watch_history.total_duration) {
    const watchedSeconds = parseDurationToSeconds(watch_history.last_watched_duration);
    const totalFilmSeconds = parseDurationToSeconds(watch_history.total_duration || movie.duration); // Ambil dari watch_history atau root movie.duration
    if (totalFilmSeconds > 0) {
      progressPercent = (watchedSeconds / totalFilmSeconds) * 100;
    }
    const remainingSeconds = totalFilmSeconds - watchedSeconds;
    episodeInfo = title; // Untuk film, kita bisa tampilkan judul lagi atau kosongkan
    durationInfo = formatSecondsToDurationString(remainingSeconds);
    if (durationInfo && remainingSeconds > 0) durationInfo += " tersisa";

  } else {
    episodeInfo = title;
    durationInfo = "Info progres tidak ada";
  }
  
  // Sesuai gambar: Lebar kartu sekitar 260px-280px jika poster sekitar 240-260px
  // Tinggi poster ~140px, area info ~120px. Total ~260px.
  return (
    <div className="w-[270px] rounded-xl shadow-2xl bg-[#141414] text-gray-300 overflow-hidden"> {/* Warna background lebih gelap, rounded lebih kecil */}
      <div className="relative">
        <img src={poster} alt={`Poster ${title}`} className="w-full h-[152px] object-cover" /> {/* Sesuaikan tinggi poster */}
      </div>

      <div className="p-4 space-y-3"> {/* Padding konsisten */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button title="Play" className="bg-white text-black hover:bg-gray-200 w-9 h-9 flex items-center justify-center rounded-full"> <PlayIcon /> </button>
            <button title="Watched/Add to List" className="bg-white/20 border border-white/30 text-white hover:bg-white/30 w-9 h-9 flex items-center justify-center rounded-full"> <CheckIcon /> </button>
          </div>
          <button title="More Info" className="bg-white/20 border border-white/30 text-white hover:bg-white/30 w-9 h-9 flex items-center justify-center rounded-full"> <ChevronDownIcon /> </button>
        </div>

        <div className="space-y-1.5"> {/* Sedikit lebih banyak spasi */}
          <div className="flex justify-between items-center text-sm"> {/* Font lebih besar untuk info ini */}
            <span className="font-semibold text-white truncate max-w-[60%]">{episodeInfo}</span>
            <span className="text-xs text-gray-400 flex-shrink-0">{durationInfo}</span>
          </div>
          <div className="bg-gray-700 rounded-full h-1 w-full overflow-hidden"> {/* Progress bar lebih tipis dan rounded */}
            <div className="bg-sky-500 h-full rounded-full" style={{ width: `${progressPercent}%` }} ></div> {/* Warna progress bar biru muda/cyan */}
          </div>
        </div>

        <div className="flex flex-wrap items-center text-xs text-gray-400">
          {genre.slice(0, 3).map((g, index, arr) => ( // Batasi genre jadi 3
            <React.Fragment key={g}>
              <span>{g}</span>
              {index < arr.length - 1 && <span className="mx-1.5 text-gray-600">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieHoverCard;