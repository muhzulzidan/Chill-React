import { useState } from "react";
import { Link } from "react-router-dom";

function DropdownWithArrow() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <div
        onClick={toggleDropdown}
        className="w-7 h-7 flex items-center justify-center shadow-sm cursor-pointer focus:ring focus:ring-indigo-500 focus:border-indigo-500"
      >
        <img
          src="/arrow-down.png"
          alt="Arrow Down"
        />
      </div>

      {isOpen && (
        <div className="absolute w-28 sm:w-[156px] h-[88px] sm:h-32 right-0 sm:right-[-40px] top-10 bg-[#181A1C] text-white z-10">
          <ul className="h-full sm:h-full text-xs sm:text-sm font-medium leading-[19.6px] tracking-[0.2px]">
            <li
              className="p-1 sm:p-2 hover:text-blue-600 cursor-pointer flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src="/profile.png" alt="Profile" className="w-3 sm:w-6 h-3 sm:h-6" />
              <Link to="/userprofile">Profile Saya</Link>
            </li>
            <li
              className="p-1 sm:p-2 hover:text-blue-600 cursor-pointer flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src="/star.png" alt="star" className="w-3 sm:w-6 h-3 sm:h-6" />
              <span>Ubah Premium</span>
            </li>
            <li
              className="p-1 sm:p-2 hover:text-blue-600 cursor-pointer flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src="/quit.png" alt="quit" className="w-3 sm:w-6 h-3 sm:h-6" />
              <span>Keluar</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownWithArrow;
