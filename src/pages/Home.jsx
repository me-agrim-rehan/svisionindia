import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import Reveal from "../components/Reveal";
import { Helmet } from "react-helmet-async";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import brand from "../assets/brand.webp";

export default function Home() {

  const navigate = useNavigate();

  const images = [hero1, hero4, hero3, hero2];

  useEffect(() => {

    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });

  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  const taglines = [
    "Your Partner in Security, Staffing & Infrastructure",
    "Verified Workforce for Societies & Businesses",
    "Warehouse & Agricultural Land Leasing Experts"
  ];

  const [text, setText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 7000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    const currentTagline = taglines[taglineIndex];

    const timeout = setTimeout(() => {

      if (!isDeleting) {

        setText(currentTagline.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentTagline.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }

      } else {

        setText(currentTagline.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {

          setIsDeleting(false);

          setTaglineIndex((prev) =>
            prev === taglines.length - 1 ? 0 : prev + 1
          );

        }

      }

    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);

  }, [charIndex, isDeleting, taglineIndex]);

  return (
    <>
      <Helmet>
        <title>
          Samarth Vision India | Workforce & Property Leasing Solutions
        </title>

        <meta
          name="description"
          content="Samarth Vision India provides workforce solutions, warehouse leasing, agricultural land leasing, facility management, and infrastructure support services."
        />

        <meta
          name="keywords"
          content="Workforce services, warehouse leasing, agricultural land leasing, facility management, Gurgaon"
        />
      </Helmet>

      <div></div>

      <div className="bg-[#f8f4ee] relative overflow-hidden">

        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

        {/* HERO SECTION */}

        <section className="relative min-h-[92vh] pb-16 md:pb-0 overflow-hidden">

          {/* BACKGROUND IMAGES */}

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: index === currentImage ? 1 : 0,
                scale: index === currentImage ? 1.05 : 1,
              }}
              transition={{
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 7, ease: "linear" },
              }}
              
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />

          ))}

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-b from-[#222831]/75 via-[#222831]/60 to-[#1d1f23]/90"></div>

          {/* GOLD GLOW */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,194,111,0.12),transparent_45%)]"></div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 min-h-[92vh] flex flex-col justify-center items-center text-center px-6 text-white"
          >

            {/* HEADING */}

            <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-5xl leading-tight text-[#F9E0BB]">

              Reliable Manpower & Property Leasing Solutions for Growing Businesses

            </h1>

            {/* TYPING TEXT */}

            <div className="min-h-[80px] mb-10 flex items-center justify-center">

              <p className="text-2xl md:text-3xl text-white font-semibold tracking-wide">

                {text}

                <span className="animate-pulse text-[#FFC26F] ml-1">
                  |
                </span>

              </p>

            </div>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-6 flex-wrap justify-center"
            >

              <button
                onClick={() => navigate("/services/workforce")}
                className="bg-[#C38154] hover:bg-[#d19167] active:scale-[0.98] transition-all duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-[0_12px_40px_rgba(195,129,84,0.35)] hover:-translate-y-1"
              >
                Get Workforce Solutions
              </button>

              <button
                onClick={() => navigate("/services/realestate")}
                className="border border-white/70 hover:bg-white hover:text-[#222831] active:scale-[0.98] transition-all duration-300 px-8 py-3 rounded-xl text-lg font-semibold backdrop-blur-sm hover:-translate-y-1"
              >
                Explore Properties
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="hidden md:block border border-white/70 hover:bg-white hover:text-[#222831] active:scale-[0.98] transition-all duration-300 px-8 py-3 rounded-xl text-lg font-semibold backdrop-blur-sm hover:-translate-y-1"
              >
                Contact Us
              </button>

            </motion.div>

          </motion.div>

        </section>

        {/* TRUST STRIP */}

        <Reveal>

          <section className="bg-[#f8f4ee] py-10 px-6 border-b border-[#eadbc8]">

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-6">

              <div>
                <h3 className="text-2xl font-bold text-[#222831]">Verified</h3>
                <p className="text-gray-600">Workforce Network</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#222831]">Fast</h3>
                <p className="text-gray-600">Response Time</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#222831]">Trusted</h3>
                <p className="text-gray-600">By Local Clients</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#222831]">Pan-India</h3>
                <p className="text-gray-600">Service Reach</p>
              </div>

            </div>

          </section>

        </Reveal>

        {/* CERTIFICATIONS */}

        <Reveal>

          <section className="py-14 px-6 bg-[#f5efe6] border-y border-[#eadbc8]">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

              {/* RERA */}

              <div className="bg-white rounded-3xl p-8 border border-[#eadbc8] shadow-lg">

                <p className="uppercase tracking-[4px] text-[#C38154] text-sm mb-3">
                  Approved Authority
                </p>

                <h3 className="text-3xl font-bold text-[#222831] mb-4">
                  RERA Approved
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Our leasing and real estate operations follow professional standards aligned with the Real Estate Regulatory Authority.
                </p>

              </div>

              {/* PASARA */}

              <div className="bg-[#222831] rounded-3xl p-8 border border-white/10">

                <p className="uppercase tracking-[4px] text-[#FFC26F] text-sm mb-3">
                  Upcoming Compliance
                </p>

                <h3 className="text-3xl font-bold text-[#F9E0BB] mb-4">
                  PASARA License
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Licensing and certification details will be added here soon.
                </p>

              </div>

            </div>

          </section>

        </Reveal>

        {/* WHO WE ARE SECTION */}

        <Reveal className="py-24 px-6 bg-[#f8f5f0]">

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <div>

              <span className="text-sm uppercase tracking-[5px] text-[#C38154] font-semibold">

                About Us

              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222831] mt-4 mb-8 leading-tight">

                Building Trust Through Professional Services

              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-10">

                Samarth Vision India delivers reliable workforce, facility management,
                and real estate solutions designed for modern organizations,
                residential communities, and commercial establishments. Our focus
                remains on professionalism, operational excellence, and long-term
                client satisfaction.

              </p>

              <button
                onClick={() => navigate("/about")}
                className="bg-[#C38154] hover:bg-[#d19167] active:scale-[0.98] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_12px_40px_rgba(195,129,84,0.35)] hover:-translate-y-1"
              >
                Explore Us
              </button>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="bg-[#222831] rounded-[32px] h-[420px] overflow-hidden shadow-2xl">

                <motion.img
                  initial={{ scale: 1.08, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.85 }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.06 }}
                  viewport={{ once: true }}
                  src={brand}
                  alt="Samarth Vision India"
                  className="w-full h-full object-cover transition duration-700"
                />

              </div>

              {/* FLOATING CARD */}

              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl px-5 py-4 hidden md:block">

                <h3 className="text-2xl font-bold text-[#222831]">
                  100%
                </h3>

                <p className="text-gray-600 mt-1">
                  Commitment to Service Excellence
                </p>

              </div>

            </div>

          </div>

        </Reveal>

        {/* SERVICES SECTION */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(195,129,84,0.08),transparent_60%)] pointer-events-none"></div>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="pt-24 pb-28 px-6 bg-gradient-to-b from-[#f8f4ee] to-[#efe4d7]"
        >

          <div className="max-w-6xl mx-auto text-center">

            <p className="uppercase tracking-[5px] text-[#C38154] text-sm mb-4">
              Our Expertise
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222831] mb-16">

              Our Services

            </h2>

            {/* CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* WORKFORCE */}

              <motion.div
                variants={fadeUp}
                className="group bg-white shadow-xl rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.14)] cursor-pointer border border-transparent hover:border-[#e7c8a6]"
              >

                <h3 className="text-2xl md:text-3xl font-bold text-[#222831] mb-5">
                  Workforce Services
                </h3>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Reliable manpower solutions for security, housekeeping,
                  skilled workforce across residential and commercial needs.
                </p>

                <button
                  onClick={() => navigate("/services/workforce")}
                  className="bg-[#C38154] hover:bg-[#d19167] active:scale-[0.98] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)] hover:-translate-y-1"
                >
                  Explore Services
                </button>

              </motion.div>

              {/* REAL ESTATE */}

              <motion.div
                variants={fadeUp}
                className="group bg-white shadow-xl rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.14)] cursor-pointer border border-transparent hover:border-[#e7c8a6]"
              >

                <h3 className="text-2xl md:text-3xl font-bold text-[#222831] mb-5">
                  Real Estate Services
                </h3>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Specialized leasing solutions for warehouses and agricultural
                  land with verified listings and transparent coordination.
                </p>

                <button
                  onClick={() => navigate("/services/realestate")}
                  className="bg-[#C38154] hover:bg-[#d19167] active:scale-[0.98] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)] hover:-translate-y-1"
                >
                  Explore Services
                </button>

              </motion.div>

            </div>

          </div>

        </motion.section>

      </div>
    </>
  );
}