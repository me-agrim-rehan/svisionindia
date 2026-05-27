import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import Reveal from "../components/Reveal";

export default function Services() {

  const navigate = useNavigate();

  return (

    <div className="bg-[#f5f5f5] min-h-screen relative overflow-hidden">

      {/* NOISE TEXTURE */}

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#222831] text-white py-32 px-6 text-center">

        {/* GLOW EFFECTS */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFC26F]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C38154]/10 blur-[120px] rounded-full"></div>

        {/* HERO CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative z-10"
        >

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#F9E0BB] leading-tight">

            Our Services

          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">

            Delivering professional workforce, facility management, and real estate
            solutions designed to support organizations, residential societies,
            commercial establishments, and infrastructure operations with reliability,
            efficiency, and trust.

          </p>

        </motion.div>

      </section>

      {/* SERVICES SECTION */}

      <Reveal>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-28 px-6 relative"
        >

          {/* BACKGROUND GLOW */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(195,129,84,0.08),transparent_60%)] pointer-events-none"></div>

          {/* SECTION HEADER */}

          <div className="text-center mb-16 relative z-10">

            <p className="uppercase tracking-[5px] text-[#C38154] text-sm mb-4">
              Professional Solutions
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#222831] mb-6">
              Services Designed For Modern Operations
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reliable workforce deployment and property leasing services
              tailored for organizations, industries, residential societies,
              and infrastructure projects.
            </p>

          </div>

          {/* SERVICE CARDS */}

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

            {/* WORKFORCE CARD */}

            <motion.div
              variants={fadeUp}
              className="bg-white/80 backdrop-blur-md rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#eadbc8] hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition-all duration-500"
            >

              <div className="mb-8">

                <span className="text-sm uppercase tracking-[4px] text-[#C38154] font-semibold">
                  Workforce Division
                </span>

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-6 leading-tight">

                Workforce & Facility Services

              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-10">

                Professional manpower deployment and facility management services
                including security personnel, housekeeping staff, maintenance support,
                operational workforce solutions, and infrastructure assistance tailored
                for modern organizations and communities.

              </p>

              <button
                onClick={() => navigate("/services/workforce")}
                className="bg-[#C38154] hover:bg-[#d19167] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_12px_35px_rgba(195,129,84,0.35)] hover:-translate-y-1"
              >
                Explore Workforce Services
              </button>

            </motion.div>

            {/* REAL ESTATE CARD */}

            <motion.div
              variants={fadeUp}
              className="bg-white/80 backdrop-blur-md rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#eadbc8] hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition-all duration-500"
            >

              <div className="mb-8">

                <span className="text-sm uppercase tracking-[4px] text-[#C38154] font-semibold">
                  Real Estate Division
                </span>

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-6 leading-tight">

                Real Estate Services

              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-10">

                Reliable property support and real estate solutions including
                consultation, operational assistance, infrastructure coordination,
                property-related services, and long-term support for residential
                and commercial projects.

              </p>

              <button
                onClick={() => navigate("/services/realestate")}
                className="bg-[#C38154] hover:bg-[#d19167] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_12px_35px_rgba(195,129,84,0.35)] hover:-translate-y-1"
              >
                Explore Real Estate
              </button>

            </motion.div>

          </div>

        </motion.section>

      </Reveal>

    </div>
  );
}