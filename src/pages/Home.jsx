import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

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

      <section className="relative min-h-[90vh] overflow-hidden">

        {images.map((image, index) => (

          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>

        ))}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 min-h-[90vh] flex flex-col justify-center items-center text-center px-6 text-white">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-5xl leading-tight text-[#e6c89c]">
            Trusted Workforce & Real Estate Solutions
          </h1>

          <div className="h-[60px] mb-8 flex items-center justify-center">

            <p className="text-2xl md:text-3xl text-white font-semibold tracking-wide">

              {text}

              <span className="animate-pulse text-[#FFC26F]">
                |
              </span>

            </p>

          </div>

          <div className="flex gap-6 flex-wrap justify-center">

            <button
              onClick={() => navigate("/services")}
              className="bg-[#C38154] hover:bg-[#884A39] transition px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Our Services
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Contact Us
            </button>

          </div>

        </div>

      </section>

      {/* SERVICES PREVIEW */}

      <section className="py-20 px-6 bg-[#f5f5f5]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#2C3639] mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Workforce */}

            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold text-[#2C3639] mb-4">
                Workforce Services
              </h3>

              <p className="text-gray-600 mb-6">
                Reliable manpower and workforce solutions tailored to your requirements.
              </p>

              <button
                onClick={() => navigate("/services")}
                className="bg-[#C38154] hover:bg-[#884A39] text-white px-6 py-3 rounded-lg transition"
              >
                Explore Services
              </button>

            </div>

            {/* Real Estate */}

            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold text-[#2C3639] mb-4">
                Real Estate Services
              </h3>

              <p className="text-gray-600 mb-6">
                Professional real estate assistance and property consultation services.
              </p>

              <button
                onClick={() => navigate("/services")}
                className="bg-[#C38154] hover:bg-[#884A39] text-white px-6 py-3 rounded-lg transition"
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