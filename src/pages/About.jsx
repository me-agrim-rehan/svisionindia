import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import Reveal from "../components/Reveal";
import { Helmet } from "react-helmet-async";

import owner from "../assets/owner.jpg";
import ceo from "../assets/ceo.jpg";
import cto from "../assets/cto.jpg";
import cfo from "../assets/cfo.jpg";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";


export default function About() {
  return (
    <>
  <Helmet>
    <title>
  About Us | Samarth Vision India
</title>

    <meta
      name="description"
      content="Samarth Vision India provides workforce solutions, warehouse leasing, agricultural land leasing, facility management, and infrastructure support services."
    />

    <meta
      name="keywords"
      content="manpower services, warehouse leasing, agricultural land leasing, facility management, Gurgaon"
    />
  </Helmet>

  <div></div>
    <div className="bg-[#f5efe6] text-[#222831] min-h-[85vh] md:min-h-screen">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* HERO */}

      <section className="relative py-20 md:py-20 md:py-32 px-6 text-center overflow-hidden bg-gradient-to-b from-[#f8f5f0] to-[#efe4d7]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFC26F]/10 blur-[120px] rounded-full"></div>

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C38154]/10 blur-[120px] rounded-full"></div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-5xl mx-auto relative z-10"
>

          <h1 className="text-4xl sm:text-4xl sm:text-5xl lg:text-7xl font-bold text-[#222831] mb-8 leading-tight">
            About Us
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Delivering trusted manpower, facility management, and infrastructure
            solutions with professionalism, reliability, and excellence.
          </p>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}

      <Reveal>
<section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white/70 backdrop-blur-md rounded-[32px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#eadbc8] hover:-translate-y-1 transition duration-500">

            <h2 className="text-3xl font-bold text-[#222831] mb-6">
              Who We Are
            </h2>

            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">

              <p>
                At Samarth Vision India, we are committed to delivering
                reliable, professional, and high-quality manpower and facility
                management solutions across multiple sectors. With a strong
                focus on operational excellence and customer satisfaction, we
                provide customized solutions designed to meet the evolving
                requirements of corporate organizations, residential societies,
                commercial establishments, and public institutions.
              </p>

              <p>
                Our expertise spans across security services, housekeeping,
                facility management, IT infrastructure support, real estate
                assistance, and skilled manpower deployment. We believe every
                organization deserves a safe, efficient, and professionally
                managed environment.
              </p>

              <p>
                Backed by trained professionals, disciplined operations, and a
                client-focused approach, we continuously strive to deliver
                dependable services that create value, improve efficiency, and
                build long-term trust.
              </p>

              <p>
                Whether supporting residential welfare associations,
                commercial properties, corporate offices, or industrial sites,
                our mission remains the same — delivering quality services with
                integrity, professionalism, and commitment.
              </p>

            </div>

          </div>

        </div>

      </section>
      </Reveal>

    {/* CERTIFICATIONS */}

<Reveal>

<section className="pb-20 px-6">

  <div className="max-w-6xl mx-auto">

    <div className="bg-[#222831] rounded-[36px] p-10 md:p-14 relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.12),transparent_40%)]"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8">

        {/* RERA */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

          <p className="uppercase tracking-[4px] text-[#FFC26F] text-sm mb-3">
            Approved Authority
          </p>

          <h3 className="text-3xl font-bold text-[#F9E0BB] mb-4">
            RERA Approved
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Samarth Vision India maintains transparency and operational standards aligned with RERA guidelines.
          </p>

        </div>

        {/* PASARA */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

          <p className="uppercase tracking-[4px] text-[#FFC26F] text-sm mb-3">
            Upcoming Compliance
          </p>

          <h3 className="text-3xl font-bold text-[#F9E0BB] mb-4">
            PASARA License
          </h3>

          <p className="text-gray-300 leading-relaxed">
            PASARA certification details and licensing information will be integrated soon.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

</Reveal>

      {/* CLIENTS SECTION */}
    <Reveal>
<section className="py-24 px-6 bg-[#f8f5f0] overflow-hidden">

  <div className="max-w-6xl mx-auto text-center">

    <span className="text-sm uppercase tracking-[5px] text-[#C38154] font-semibold">

      Our Clients

    </span>

    <h2 className="text-3xl sm:text-3xl sm:text-3xl sm:text-4xl md:text-5xl font-bold text-[#222831] mt-4 mb-8">

      Trusted By Growing Organizations

    </h2>

    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-16">

      Client satisfaction and service excellence remain at the core of
      everything we deliver across workforce, infrastructure, and real
      estate solutions.

    </p>

  </div>

  {/* LOGO SLIDER */}

  <div className="relative w-full overflow-hidden">

    {/* LEFT FADE */}

    <div className="absolute left-0 top-0 w-32 h-full z-10 bg-gradient-to-r from-[#f8f5f0] to-transparent"></div>

    {/* RIGHT FADE */}

    <div className="absolute right-0 top-0 w-32 h-full z-10 bg-gradient-to-l from-[#f8f5f0] to-transparent"></div>

    <div className="flex animate-marquee gap-20 w-max items-center">

      {[client1, client2, client3, client4,
        client1, client2, client3, client4 ].map((logo, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl px-10 py-6 shadow-xl hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-500"
        >

          <img
            src={logo}
            alt="Client Logo"
            className="h-24 md:h-40 object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
          />

        </div>

      ))}

    </div>

  </div>

</section>
</Reveal>


      {/* TEAM SECTION */}

      <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }}
  className="py-20 py-20 md:py-32 px-6 md:px-10"
>

        <div className="max-w-14xl mx-auto">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#222831] mb-14">
            Leadership Team
          </h2>

          <div className="space-y-10">

            {/* OWNER */}

            <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#eadbc8] flex flex-col md:flex-row items-center hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition duration-500">

              <img
                src={owner}
                alt="Owner"
                className="w-full md:w-[260px] md:min-w-[260px] h-[260px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
              />

              <div className="p-8 flex-1">

                <h3 className="text-3xl font-bold text-[#222831] mb-3">
                 Mr. Sandeep Singh
                </h3>

                <p className="text-[#C38154] text-xl mb-4 font-semibold">
                  Co-Founder/CEO
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Leading the organization with a vision focused on trust,
                  operational excellence, and long-term client partnerships.
                </p>

              </div>

            </div>

            {/* CTO */}

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#DCD7C9] flex flex-col md:flex-row items-center hover:scale-[1.01] transition duration-300">

              <img
                src={cto}
                alt="CTO"
                className="w-full md:w-[260px] md:min-w-[260px] h-[260px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
              />

              <div className="p-8 flex-1">

                <h3 className="text-3xl font-bold text-[#222831] mb-3">
                  Mr. Mukesh Kumar
                </h3>

                <p className="text-[#C38154] text-xl mb-4 font-semibold">
                  Director / CTO
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Oversees technology infrastructure, facility management solutions, and operational support services with a focus on innovation and reliability. 
                </p>

              </div>

            </div>

        {/* Security Director */}

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#DCD7C9] flex flex-col md:flex-row items-center hover:scale-[1.01] transition duration-300">

              <img
                src={cfo}
                alt="Cso"
                className="w-full md:w-[260px] md:min-w-[260px] h-[260px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
              />

              <div className="p-8 flex-1">

                <h3 className="text-3xl font-bold text-[#222831] mb-3">
                  Mr. Surender Gahlawat
                </h3>

                <p className="text-[#C38154] text-xl mb-4 font-semibold">
                  Chief security Officer
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Handles security operations, workforce management, and client service delivery with a focus on reliability and professionalism.
                </p>

              </div>

            </div>

          {/* Security Director */}

      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#DCD7C9] flex flex-col md:flex-row items-center hover:scale-[1.01] transition duration-300">

        <img
            src={ceo}
            alt="CEO"
            className="w-full md:w-[260px] md:min-w-[260px] h-[260px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
          />

          <div className="p-8 flex-1">

            <h3 className="text-3xl font-bold text-[#222831] mb-3">
              Mr. Sunny Mehlawat
            </h3>

            <p className="text-[#C38154] text-xl mb-4 font-semibold">
              Chief Finance Officer
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Handles financial operations, budgeting, and client service delivery with a focus on reliability and professionalism.
            </p>

          </div>

        </div>

          </div>

        </div>

      </motion.section>

    </div>
    </>
  );
}
