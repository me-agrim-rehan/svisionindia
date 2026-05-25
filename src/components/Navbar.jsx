import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#2C3639] text-white px-8 py-4 flex justify-between items-center shadow-md">

      <h1 className="text-2xl font-bold tracking-wide">
        Samarth Vision India
      </h1>

      <div className="flex gap-8 text-lg">

        <Link
          to="/"
          className="hover:text-[#FFC26F] transition"
        >
          Home
        </Link>

        <Link
          to="/services"
          className="hover:text-[#FFC26F] transition"
        >
          Services
        </Link>

        <Link
          to="/contact"
          className="hover:text-[#FFC26F] transition"
        >
          Contact
        </Link>

      </div>
    </nav>
  );
}