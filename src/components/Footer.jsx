import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export default function Footer() {

  return (

    <footer className="relative bg-[#1d1f23] text-white overflow-hidden border-t border-white/10">

      {/* GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,194,111,0.08),transparent_45%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">

        <div className="grid md:grid-cols-4 gap-14">

          {/* BRAND */}

          <div>

            <h2 className="text-3xl font-bold text-[#F9E0BB] mb-5">
              Samarth Vision India
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">

              Delivering professional workforce,
              infrastructure, and real estate solutions
              with reliability and operational excellence.

            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-[#FFC26F]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <Link to="/" className="hover:text-[#FFC26F] transition duration-300">
                Home
              </Link>

              <Link to="/about" className="hover:text-[#FFC26F] transition duration-300">
                About
              </Link>

              <Link to="/services" className="hover:text-[#FFC26F] transition duration-300">
                Services
              </Link>

              <Link to="/contact" className="hover:text-[#FFC26F] transition duration-300">
                Contact
              </Link>

            </div>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-[#FFC26F]">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <Link
                to="/services/workforce"
                className="hover:text-[#FFC26F] transition duration-300"
              >
                Workforce Solutions
              </Link>

              <Link
                to="/services/realestate"
                className="hover:text-[#FFC26F] transition duration-300"
              >
                Real Estate Leasing
              </Link>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xl font-semibold mb-6 text-[#FFC26F]">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-start gap-3">

                <Phone size={18} className="mt-1 text-[#FFC26F]" />

                <p>
                  +91 XXXXX XXXXX
                </p>

              </div>

              <div className="flex items-start gap-3">

                <Mail size={18} className="mt-1 text-[#FFC26F]" />

                <p>
                  info@svisionindia.com
                </p>

              </div>

              <div className="flex items-start gap-3">

                <MapPin size={18} className="mt-1 text-[#FFC26F]" />

                <p>
                  CXWG+9XP Gurugram, Haryana
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Samarth Vision India. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed for Professional Business Solutions
          </p>

        </div>

      </div>

    </footer>
  );
}