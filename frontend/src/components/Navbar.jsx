import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-3">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">

          {/* <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center rounded-full font-bold text-lg">
            D
          </div> */}
          <Link to="/login">
  <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center rounded-full font-bold text-lg">
    D
  </div>
</Link>

          <div className="leading-tight">
            <p className="font-semibold text-gray-800">
              Dolphin
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              Nursery & Middle School
            </p>
          </div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>

        {/* CENTER MENU */}
        <ul className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-1 text-gray-700 font-medium absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto p-6 md:p-0 shadow md:shadow-none transition ${menuOpen ? "block" : "hidden md:flex"}`}>

          <li>
            <Link
              to="/"
              className="hover:bg-blue-900 hover:text-white px-5 py-2 rounded-full transition cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:bg-blue-900 hover:text-white px-5 py-2 rounded-full transition cursor-pointer"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/achievements"
              className="hover:bg-blue-900 hover:text-white px-5 py-2 rounded-full transition cursor-pointer"
            >
              Achievements
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              className="hover:bg-blue-900 hover:text-white px-5 py-2 rounded-full transition cursor-pointer"
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              to="/events"
              className="hover:bg-blue-900 hover:text-white px-5 py-2 rounded-full transition cursor-pointer"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:bg-blue-900 hover:text-white px-5 py-2 rounded-full transition cursor-pointer"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* RIGHT BUTTON */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          <span>📞</span>
          Admission
        </Link>

      </div>

    </div>
  );
}

export default Navbar;