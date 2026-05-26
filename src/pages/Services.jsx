import { useNavigate } from "react-router-dom";

export default function Services() {

  const navigate = useNavigate();

  return (

    <div className="bg-[#f5f5f5] min-h-screen">

      {/* HERO SECTION */}

      <section className="bg-[#222831] text-white py-24 px-6 text-center">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-[#F9E0BB]">

            Our Services

          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">

            Delivering professional workforce, facility management, and real estate
            solutions designed to support organizations, residential societies,
            commercial establishments, and infrastructure operations with reliability,
            efficiency, and trust.

          </p>

        </div>

      </section>

      {/* SERVICES CARDS */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* WORKFORCE CARD */}

          <div className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition-all duration-300">

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
              onClick={() => navigate("../services/workforce")}
              className="bg-[#C38154] hover:bg-[#d19167] text-white px-7 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)]"
            >
              Explore Workforce Services
            </button>

          </div>

          {/* REAL ESTATE CARD */}

          <div className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition-all duration-300">

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
              className="bg-[#C38154] hover:bg-[#d19167] text-white px-7 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)]"
            >
              Explore Real Estate
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}