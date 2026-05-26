import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Navbar() {

  return (

    <nav className="bg-[#222831] text-white px-8 md:px-14 py-4 flex justify-between items-center shadow-md">

      {/* LOGO */}

      <img
        src={logo}
        alt="Samarth Vision India Logo"
        className="h-16 md:h-20 w-auto object-cover rounded-lg transition duration-300 hover:scale-105"
      />

      {/* NAV LINKS */}

      <div className="flex gap-6 md:gap-10 text-base md:text-lg font-medium">

        <Link
          to="/"
          className="hover:text-[#FFC26F] transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="hover:text-[#FFC26F] transition duration-300"
        >
          About
        </Link>

        <Link
          to="/services"
          className="hover:text-[#FFC26F] transition duration-300"
        >
          Services
        </Link>

        <Link
          to="/contact"
          className="hover:text-[#FFC26F] transition duration-300"
        >
          Contact
        </Link>

      </div>

    </nav>
  );
}