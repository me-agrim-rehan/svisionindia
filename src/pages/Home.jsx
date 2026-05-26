import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import brand from "../assets/brand.jpg";

export default function Home() {

  const navigate = useNavigate();

  const images = [hero1, hero4, hero3, hero2];

  const [currentImage, setCurrentImage] = useState(0);

  const taglines = [
    "Your Partner in Security, Staffing & Infrastructure",
    "Delivering Trust Through Professional Services",
    "Committed to Safety, Quality & Excellence"
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

    <div>

      {/* HERO SECTION */}

      <section className="relative min-h-[92vh] overflow-hidden">

        {/* BACKGROUND IMAGES */}

        {images.map((image, index) => (

          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
            } `}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>

        ))}

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#222831]/75 via-[#222831]/60 to-[#1d1f23]/90"></div>

        {/* GOLD GLOW */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,194,111,0.12),transparent_45%)]"></div>

        {/* CONTENT */}

        <div className="relative z-10 min-h-[92vh] flex flex-col justify-center items-center text-center px-6 text-white">

          {/* HEADING */}

          <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-5xl leading-tight text-[#F9E0BB] drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]">

            Trusted Workforce & Real Estate Solutions

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

          <div className="flex gap-6 flex-wrap justify-center">

            <button
              onClick={() => navigate("/services")}
              className="bg-[#C38154] hover:bg-[#d19167] text-white transition-all duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)] hover:-translate-y-1"
            >
              Our Services
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white/70 hover:bg-white hover:text-[#222831] transition-all duration-300 px-8 py-3 rounded-xl text-lg font-semibold backdrop-blur-sm hover:-translate-y-1"
            >
              Contact Us
            </button>

          </div>

        </div>

      </section>

        {/* WHO WE ARE SECTION */}

<section className="py-24 px-6 bg-[#f8f5f0]">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT */}

    <div>

      <span className="text-sm uppercase tracking-[5px] text-[#C38154] font-semibold">

        About Us

      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#222831] mt-4 mb-8 leading-tight">

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
        className="bg-[#C38154] hover:bg-[#d19167] text-white px-7 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)]"
      >
        Explore Us
      </button>

    </div>

    {/* RIGHT */}

    <div className="relative">

      <div className="bg-[#222831] rounded-[32px] h-[420px] overflow-hidden shadow-2xl">

        <img
          src={brand}
          alt="About Samarth Vision India"
          className="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-700"
        />

      </div>

      {/* FLOATING CARD */}

      <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl px-2 py-1 hidden md:block">

        <h3 className="text-1xl font-bold text-[#222831]">
          100%
        </h3>

        <p className="text-gray-600 mt-1">
          Commitment to Service Excellence
        </p>

      </div>

    </div>

  </div>

</section>


      {/* SERVICES SECTION */}

      <section className="pt-24 pb-28 px-6 bg-gradient-to-b from-[#f8f4ee] to-[#efe4d7]">

        <div className="max-w-6xl mx-auto text-center">

          {/* TITLE */}

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#222831] mb-16">

            Our Services

          </h2>

          {/* CARDS */}

          <div className="grid md:grid-cols-2 gap-8">

            {/* WORKFORCE */}

            <div className="bg-white shadow-xl rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 ">

              <h3 className="text-2xl md:text-3xl font-bold text-[#222831] mb-5">
                Workforce Services
              </h3>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Reliable manpower and workforce solutions tailored to corporate organizations, societies, and commercial establishments.
              </p>

              <button
                onClick={() => navigate("/services/workforce")}
                className="bg-[#C38154] hover:bg-[#d19167] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)]"
              >
                Explore Services
              </button>

            </div>

            {/* REAL ESTATE */}

            <div className="bg-white shadow-xl rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 ">

              <h3 className="text-2xl md:text-3xl font-bold text-[#222831] mb-5">
                Real Estate Services
              </h3>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Professional property consultation and infrastructure support services designed to create long-term value.
              </p>

              <button
                onClick={() => navigate("/services/realestate")}
                className="bg-[#C38154] hover:bg-[#d19167] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(195,129,84,0.35)]"
              >
                Explore Services
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}