import owner from "../assets/owner.jpg";
import ceo from "../assets/ceo.jpg";
import cto from "../assets/cto.jpg";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

export default function About() {
  return (
    <div className="bg-[#f5efe6] text-[#222831] min-h-screen">

      {/* HERO */}

      <section className="relative py-28 px-6 text-center overflow-hidden">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold text-[#222831] mb-8">
            About Us
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Delivering trusted manpower, facility management, and infrastructure
            solutions with professionalism, reliability, and excellence.
          </p>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="py-14 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-[#DCD7C9] rounded-2xl p-8 md:p-12 shadow-2xl border border-[#C38154]">

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

      {/* CLIENTS SECTION */}

<section className="py-24 px-6 bg-[#f8f5f0] overflow-hidden">

  <div className="max-w-6xl mx-auto text-center">

    <span className="text-sm uppercase tracking-[5px] text-[#C38154] font-semibold">

      Our Clients

    </span>

    <h2 className="text-4xl md:text-5xl font-bold text-[#222831] mt-4 mb-8">

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

      {[client1, client2, client3, client4, client5, client6,
        client1, client2, client3, client4, client5, client6].map((logo, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl px-10 py-6 shadow-lg hover:scale-105 transition duration-300"
        >

          <img
            src={logo}
            alt="Client Logo"
            className="h-40 object-contain grayscale hover:grayscale-0 transition duration-500"
          />

        </div>

      ))}

    </div>

  </div>

</section>


      {/* TEAM SECTION */}

      <section className="py-32 px-10">

        <div className="max-w-14xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#222831] mb-14">
            Leadership Team
          </h2>

          <div className="space-y-10">

            {/* OWNER */}

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#DCD7C9] flex flex-col md:flex-row items-center hover:scale-[1.01] transition duration-300">

              <img
                src={owner}
                alt="Owner"
                className="w-full md:w-[260px] h-[260px] object-cover grayscale hover:grayscale-0 transition duration-500"
              />

              <div className="p-8 flex-1">

                <h3 className="text-3xl font-bold text-[#222831] mb-3">
                  XYZ
                </h3>

                <p className="text-[#C38154] text-xl mb-4 font-semibold">
                  Owner
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Leading the organization with a vision focused on trust,
                  operational excellence, and long-term client partnerships.
                </p>

              </div>

            </div>

            {/* CEO */}

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#DCD7C9] flex flex-col md:flex-row items-center hover:scale-[1.01] transition duration-300">

              <img
                src={ceo}
                alt="CEO"
                className="w-full md:w-[260px] h-[260px] object-cover grayscale hover:grayscale-0 transition duration-500"
              />

              <div className="p-8 flex-1">

                <h3 className="text-3xl font-bold text-[#222831] mb-3">
                  PQR
                </h3>

                <p className="text-[#C38154] text-xl mb-4 font-semibold">
                  Chief Executive Officer
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Overseeing strategic operations, client relations, and
                  organizational growth with a commitment to service quality.
                </p>

              </div>

            </div>

            {/* CTO */}

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#DCD7C9] flex flex-col md:flex-row items-center hover:scale-[1.01] transition duration-300">

              <img
                src={cto}
                alt="CTO"
                className="w-full md:w-[260px] h-[260px] object-cover grayscale hover:grayscale-0 transition duration-500"
              />

              <div className="p-8 flex-1">

                <h3 className="text-3xl font-bold text-[#222831] mb-3">
                  Mukesh Kumar
                </h3>

                <p className="text-[#C38154] text-xl mb-4 font-semibold">
                  Director / CTO
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Managing technology operations, infrastructure systems, and
                  modern operational practices that strengthen service delivery.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
