import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Warehouse,
  Wheat,
  Building2,
  MapPinned
} from "lucide-react";

import Reveal from "../components/Reveal";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function RealEstate() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="bg-[#f8f4ee] text-[#222831] overflow-hidden relative">

      {/* NOISE TEXTURE */}

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#222831] text-white">

        {/* BACKGROUND GLOW */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.12),transparent_40%)]"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FFC26F]/10 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-32 relative z-10"
        >

          <div className="max-w-4xl">

            <p className="uppercase tracking-[6px] text-[#FFC26F] text-sm mb-5">
              Real Estate & Leasing
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#F9E0BB] mb-8">

              Warehouse & Agricultural Land Leasing Solutions

            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-10">

              Professional leasing solutions for warehouses,
              industrial spaces, and agricultural land tailored
              for logistics, operational infrastructure, and long-term business growth.

            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="bg-[#C38154] hover:bg-[#d19167] px-8 py-4 rounded-xl text-white font-semibold transition-all duration-500 shadow-lg hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(195,129,84,0.35)]"
              >
                Contact Us
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white hover:text-[#222831] px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:-translate-y-2"
              >
                Get Consultation
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}

      <Reveal>
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-28 px-6"
        >

          <div className="max-w-6xl mx-auto">

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-xl border border-[#eadbc8] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#222831] leading-tight">

                Reliable Property Solutions Built For Business Growth

              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

                <p>
                  At Samarth Vision India, we provide dependable warehouse,
                  industrial, and agricultural land leasing solutions
                  designed to support modern businesses and infrastructure operations.
                </p>

                <p>
                  Our services focus on connecting clients with reliable
                  leasing opportunities that match logistics, storage,
                  operational, and land utilization requirements.
                </p>

                <p>
                  With a commitment to transparency, professionalism,
                  and long-term value, we simplify the leasing process
                  while ensuring dependable support and communication throughout.
                </p>

              </div>

            </div>

          </div>

        </motion.section>
      </Reveal>

      {/* SERVICES */}

      <Reveal>
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative pb-32 px-6 overflow-hidden"
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(195,129,84,0.08),transparent_55%)]"></div>

          <div className="max-w-6xl mx-auto relative z-10">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[5px] text-[#C38154] text-sm mb-4">
                Real Estate Solutions
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#222831]">

                Our Real Estate Services

              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-10">

              {/* WAREHOUSE */}

              <motion.div
                variants={fadeUp}
                className="group bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-[#eadbc8] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#fff2df] flex items-center justify-center mb-6 transition duration-500 group-hover:scale-110 group-hover:rotate-3">

                  <Warehouse className="text-[#C38154]" size={30} />

                </div>

                <h3 className="text-3xl font-bold mb-5">
                  Warehouse Leasing
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">

                  Leasing solutions for warehouses, industrial
                  storage facilities, logistics hubs, and operational spaces
                  designed for efficient infrastructure management.

                </p>

                <Link
                  to="/contact"
                  className="inline-block bg-[#C38154] hover:bg-[#d19167] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold hover:-translate-y-1"
                >
                  Contact Us
                </Link>

              </motion.div>

              {/* AGRICULTURAL */}

              <motion.div
                variants={fadeUp}
                className="group bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-[#eadbc8] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#fff2df] flex items-center justify-center mb-6 transition duration-500 group-hover:scale-110 group-hover:rotate-3">

                  <Wheat className="text-[#C38154]" size={30} />

                </div>

                <h3 className="text-3xl font-bold mb-5">
                  Agricultural Land Leasing
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">

                  Professional assistance for agricultural land leasing
                  suitable for farming operations, infrastructure development,
                  storage facilities, and commercial utilization.

                </p>

                <Link
                  to="/contact"
                  className="inline-block bg-[#C38154] hover:bg-[#d19167] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold hover:-translate-y-1"
                >
                  Contact Us
                </Link>

              </motion.div>

            </div>

          </div>

        </motion.section>
      </Reveal>

      {/* CONTACT CTA */}

      <Reveal>
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="pb-32 px-6"
        >

          <div className="max-w-6xl mx-auto">

            <div className="bg-[#222831] rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.12),transparent_35%)]"></div>

              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FFC26F]/10 blur-[120px] rounded-full"></div>

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
                    className="inline-block bg-[#C38154] hover:bg-[#d19167] px-7 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-1"
                  >
                    Contact Our Team
                  </Link>

                </div>

                {/* RIGHT */}

                <div className="space-y-5">

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition duration-500 hover:bg-white/10"
                  >

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

                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition duration-500 hover:bg-white/10"
                  >

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

                  </motion.div>

                </div>

              </div>

            </div>

          </div>

        </motion.section>
      </Reveal>

    </div>
  );
}