import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo2.png";

export default function Navbar() {

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {

  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (

    <nav
  className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-all duration-500 group
  ${
    scrolled
      ? "bg-[#111315]/55 border-white/5"
      : "bg-[#111315]/95 border-[#FFC26F]/10"
  }
  hover:bg-[#111315]/95
  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
  `}
>

      {/* GOLD GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,194,111,0.08),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-4 group"
        >

          <img
            src={logo}
            alt="Samarth Vision India Logo"
            className="h-14 md:h-16 w-auto object-contain transition duration-500 group-hover:scale-105"
          />

        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              className={`relative text-[17px] font-medium transition duration-300 hover:text-[#FFC26F]
              ${location.pathname === link.path
                ? "text-[#FFC26F]"
                : "text-white"
              }`}
            >

              {link.name}

              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-[#FFC26F] transition-all duration-300
                ${location.pathname === link.path
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                }`}
              ></span>

            </Link>

          ))}

          {/* CTA BUTTON */}

          <Link
            to="/contact"
            className="bg-[#C38154] hover:bg-[#d19167] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(195,129,84,0.35)]"
          >
            Contact
          </Link>

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >

          {menuOpen ? <X size={30} /> : <Menu size={30} />}

        </button>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#222831]/95 backdrop-blur-xl border-t border-white/10
        ${menuOpen ? "max-h-[400px] py-6" : "max-h-0"}
        `}
      >

        <div className="flex flex-col px-6 gap-6">

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition duration-300
              ${location.pathname === link.path
                ? "text-[#FFC26F]"
                : "text-white"
              }`}
            >
              {link.name}
            </Link>

          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#C38154] hover:bg-[#d19167] text-center text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}