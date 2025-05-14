// src/components/Elements/Arrow/Arrow.jsx (atau path Anda)
const Arrow = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="absolute top-1/2 -left-4 -right-4 sm:-left-6 sm:-right-6 -translate-y-1/2 hidden sm:flex justify-between items-center z-20"> {/* Sedikit penyesuaian posisi & z-index lebih tinggi */}
      <button
        onClick={onScrollLeft}
        className="w-10 h-10 sm:w-11 sm:h-11 bg-[#2F3334] border border-solid border-[#E7E3FC3B] rounded-full flex justify-center items-center p-2 transition duration-300 hover:bg-gray-600 active:scale-90 cursor-pointer" // TAMBAHKAN cursor-pointer
      >
        <img className="w-5 h-5 sm:w-6 sm:h-6" src="/arrow-left.png" alt="Arrow Left" />
      </button>
      <button
        onClick={onScrollRight}
        className="w-10 h-10 sm:w-11 sm:h-11 bg-[#2F3334] border border-solid border-[#E7E3FC3B] rounded-full flex justify-center items-center p-2 transition duration-300 hover:bg-gray-600 active:scale-90 cursor-pointer" // TAMBAHKAN cursor-pointer
      >
        <img className="w-5 h-5 sm:w-6 sm:h-6" src="/arrow-right.png" alt="Arrow Right" />
      </button>
    </div>
  );
};

export default Arrow;