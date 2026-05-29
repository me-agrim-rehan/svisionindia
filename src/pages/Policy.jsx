import { motion } from "framer-motion";

export default function PrivacyPolicy() {

  return (

    <div className="bg-[#f8f4ee] min-h-screen text-[#222831] relative overflow-hidden">

      {/* NOISE */}

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* HERO */}

      <section className="relative bg-[#222831] text-white py-24 px-6 overflow-hidden">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FFC26F]/10 blur-[90px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#C38154]/10 blur-[90px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative z-10 text-center"
        >

          <p className="uppercase tracking-[5px] text-[#FFC26F] text-sm mb-4">
            Legal
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#F9E0BB] mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Your privacy and information security are important to us.
          </p>

        </motion.div>

      </section>

      {/* CONTENT */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-[32px] p-8 md:p-14 shadow-xl border border-[#eadbc8] space-y-10">

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Information We Collect
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We may collect personal information such as your name,
              phone number, email address, and business inquiries when
              you contact us through our website forms or communication channels.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">
              How We Use Information
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Information submitted through our website is used solely
              for communication, service inquiries, client support,
              and improving our business operations.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Information Security
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect submitted information
              and maintain the confidentiality of client communications.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Third-Party Services
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Certain third-party services such as email communication
              or analytics providers may process limited information
              required for website functionality and communication.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Contact Us
            </h2>

            <p className="text-gray-700 leading-relaxed">
              For questions regarding this Privacy Policy, you may contact
              Samarth Vision India through our official contact channels or on our information email :- info@svisionindia.com.
            </p>

          </div>

        </div>

      </section>

    </div>

  );
}