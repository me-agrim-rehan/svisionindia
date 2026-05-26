import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Warehouse,
  Wheat,
  Building2,
  MapPinned
} from "lucide-react";

export default function RealEstate() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="bg-[#f8f4ee] text-[#222831]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#222831] text-white">

        {/* GOLD GLOW */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.12),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[6px] text-[#FFC26F] text-sm mb-5">
              Real Estate & Leasing
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#F9E0BB] mb-8">

              Warehouse & Agricultural Land Rental Solutions

            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-10">

              Professional rental and lease solutions for warehouses,
              industrial spaces, and agricultural land tailored for
              businesses, logistics operations, and long-term infrastructure needs.

            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="bg-[#C38154] hover:bg-[#d19167] px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Contact Us
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white hover:text-[#222831] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Get Consultation
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-[#eadbc8]">

            <h2 className="text-4xl font-bold mb-8 text-[#222831]">

              Reliable Property Solutions Built For Growth

            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

              <p>
                At Samarth Vision India, we provide trusted warehouse,
                industrial, and agricultural land rental solutions designed
                to support growing businesses and operational requirements.
              </p>

              <p>
                Our services focus on connecting clients with dependable
                leasing opportunities that match their infrastructure,
                storage, logistics, and land utilization needs.
              </p>

              <p>
                With a commitment to transparency, professionalism,
                and long-term value, we aim to simplify the process
                of property leasing while ensuring smooth communication
                and dependable support throughout.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="pb-28 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">
            Our Real Estate Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* WAREHOUSE */}

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#eadbc8] hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#fff2df] flex items-center justify-center mb-6">

                <Warehouse className="text-[#C38154]" size={30} />

              </div>

              <h3 className="text-3xl font-bold mb-5">
                Warehouse Leasing
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">

                Rental and leasing solutions for warehouses, industrial
                storage spaces, logistics facilities, and operational hubs
                designed for efficient business operations.

              </p>

              <Link
                to="/contact"
                className="inline-block bg-[#C38154] hover:bg-[#d19167] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold"
              >
                Contact Us
              </Link>

            </div>

            {/* AGRICULTURAL */}

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#eadbc8] hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#fff2df] flex items-center justify-center mb-6">

                <Wheat className="text-[#C38154]" size={30} />

              </div>

              <h3 className="text-3xl font-bold mb-5">
                Agricultural Land Leasing
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">

                Professional assistance for agricultural land rental and
                lease opportunities suitable for farming operations,
                storage use, and infrastructure development.

              </p>

              <Link
                to="/contact"
                className="inline-block bg-[#C38154] hover:bg-[#d19167] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="pb-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-[#222831] rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.12),transparent_35%)]"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[5px] text-[#FFC26F] text-sm mb-4">
                  Let’s Connect
                </p>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#F9E0BB] mb-6">

                  Looking For Property Leasing Solutions?

                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">

                  Reach out to our team for warehouse leasing,
                  agricultural land rental solutions, and infrastructure support.

                </p>

                <Link
                  to="/contact"
                  className="inline-block bg-[#C38154] hover:bg-[#d19167] px-7 py-3 rounded-xl text-white font-semibold transition-all duration-300"
                >
                  Contact Our Team
                </Link>

              </div>

              {/* RIGHT */}

              <div className="space-y-5">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

                  <div className="flex items-center gap-4">

                    <Building2 className="text-[#FFC26F]" />

                    <div>

                      <p className="text-sm text-gray-400">
                        Solutions
                      </p>

                      <h3 className="text-xl font-semibold">
                        Warehouse & Industrial Leasing
                      </h3>

                    </div>

                  </div>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

                  <div className="flex items-center gap-4">

                    <MapPinned className="text-[#FFC26F]" />

                    <div>

                      <p className="text-sm text-gray-400">
                        Services
                      </p>

                      <h3 className="text-xl font-semibold">
                        Agricultural Land Rental Solutions
                      </h3>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}