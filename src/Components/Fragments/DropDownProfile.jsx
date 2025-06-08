
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { Link } from "react-router-dom";
import { PersonCircle, StarFill, BoxArrowRight } from 'react-bootstrap-icons';




function DropdownWithArrow() {
  const [isOpen, setIsOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md bg-[#23272b] hover:bg-[#23272b]/80 transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* <img
          className="w-5 sm:w-8 h-5 sm:h-8 rounded-full border border-gray-700"
          src="/avatar.png"
          alt="Profile"
        /> */}
        <PersonCircle className="w-6 h-6 text-white" />
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute min-w-[180px] max-w-xs w-44 right-0 top-12 bg-[#23272b] rounded-xl shadow-lg border border-[#23272b]/40 text-white z-20 animate-fadeIn">
          <ul className="py-2 text-sm font-medium">
            <li
              className="px-4 py-2 hover:bg-blue-600/20 hover:text-blue-500 cursor-pointer flex items-center gap-3 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <PersonCircle className="w-5 h-5" />
              <Link to="/userprofile" className="w-full">Profile Saya</Link>
            </li>
            <li
              className="px-4 py-2 hover:bg-blue-600/20 hover:text-blue-500 cursor-pointer flex items-center gap-3 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <StarFill className="w-5 h-5" />
              <span className="w-full">Ubah Premium</span>
            </li>
            <li
              className="px-4 py-2 hover:bg-red-600/20 hover:text-red-500 cursor-pointer flex items-center gap-3 rounded-md transition-colors"
              onClick={handleLogout}
            >
              <BoxArrowRight className="w-5 h-5" />
              <span className="w-full">Keluar</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownWithArrow;
