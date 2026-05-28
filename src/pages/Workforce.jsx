import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Reveal from "../components/Reveal";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Workforce() {

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: "instant",
        });

    }, []);

    const navigate = useNavigate();

    return (

        <div className="bg-[#f8f4ee] overflow-hidden relative">

            {/* NOISE TEXTURE */}

            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

            {/* HERO SECTION */}

            <section className="relative min-h-[85vh] md:min-h-screen bg-[#222831] text-white px-6 py-24 flex items-center overflow-hidden">

                {/* GOLD GLOW */}

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFC26F]/10 blur-[120px] rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C38154]/10 blur-[120px] rounded-full"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

                    {/* LEFT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <p className="uppercase tracking-[5px] text-[#FFC26F] text-sm mb-5">
                            Workforce Solutions
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#F9E0BB] mb-8">

                            Professional Workforce &
                            Infrastructure Solutions

                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">

                            Delivering trained manpower, infrastructure support,
                            and facility management services with professionalism,
                            reliability, and operational excellence.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">

                            <button
                                onClick={() => navigate("/contact")}
                                className="bg-[#C38154] hover:bg-[#d19167] text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-[#C38154]/30 hover:-translate-y-1"
                            >
                                Contact Us
                            </button>

                            <button
                                onClick={() => navigate("/services")}
                                className="border border-white/30 hover:bg-white hover:text-[#222831] px-8 py-3 rounded-xl font-semibold transition duration-300 hover:-translate-y-1"
                            >
                                Explore Services
                            </button>

                        </div>

                    </motion.div>

                    {/* RIGHT SIDE */}

                    <div className="relative hidden lg:flex justify-center items-center min-h-[500px]">

                        {/* CARD 1 */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="absolute animate-[float_6s_ease-in-out_infinite] top-10 left-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-[240px] shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:bg-white/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-[#FFC26F]/20 flex items-center justify-center mb-5 text-2xl">
                                🛡️
                            </div>

                            <h3 className="text-xl font-bold text-[#F9E0BB] mb-2">
                                Security Services
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Trained professionals ensuring safety and reliability.
                            </p>

                        </motion.div>

                        {/* CARD 2 */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="absolute animate-[float_6s_ease-in-out_infinite] top-52 right-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-[240px] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-[#FFC26F]/20 flex items-center justify-center mb-5 text-2xl">
                                🏢
                            </div>

                            <h3 className="text-xl font-bold text-[#F9E0BB] mb-2">
                                Infrastructure
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Smart infrastructure and operational support services.
                            </p>

                        </motion.div>

                        {/* CARD 3 */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="absolute animate-[float_6s_ease-in-out_infinite] bottom-8 left-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-[240px] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-[#FFC26F]/20 flex items-center justify-center mb-5 text-2xl">
                                👷
                            </div>

                            <h3 className="text-xl font-bold text-[#F9E0BB] mb-2">
                                Skilled Workforce
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Experienced manpower tailored for every requirement.
                            </p>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* MANPOWER SERVICES */}

            <Reveal>
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="py-28 px-6 bg-[#f8f4ee]"
                >

                    <div className="max-w-7xl mx-auto">

                        <div className="text-center mb-20">

                            <p className="uppercase tracking-[4px] text-[#C38154] text-sm mb-4">
                                Manpower Services
                            </p>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222831] mb-6">
                                Professional Workforce Solutions
                            </h2>

                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Reliable manpower deployment services designed for
                                residential societies, commercial properties,
                                industries, and organizations.
                            </p>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                            {[
                                {
                                    name: "Security Guard",
                                    icon: "🛡️",
                                },
                                {
                                    name: "Housekeeping",
                                    icon: "🧹",
                                },
                                {
                                    name: "Plumber",
                                    icon: "🔧",
                                },
                                {
                                    name: "Electrician",
                                    icon: "⚡",
                                },
                                {
                                    name: "Mason",
                                    icon: "🧱",
                                },
                                {
                                    name: "Carpenter",
                                    icon: "🪚",
                                },
                                {
                                    name: "Pest Control",
                                    icon: "🐜",
                                },
                                {
                                    name: "Painter",
                                    icon: "🎨",
                                },
                                {
                                    name: "And Many More",
                                    icon: "➕",
                                },
                            ].map((service, index) => (

                                <motion.div
                                    variants={fadeUp}
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-[#f0e5d8] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                                >

                                    <div className="w-16 h-16 rounded-2xl bg-[#FFC26F]/20 flex items-center justify-center text-3xl mb-6 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#222831] mb-3">
                                        {service.name}
                                    </h3>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                </motion.section>
            </Reveal>

            {/* INFRASTRUCTURE SECTION */}

            <Reveal>
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative py-28 px-6 bg-[#222831] overflow-hidden"
                >

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,194,111,0.10),transparent_50%)]"></div>

                    <div className="max-w-7xl mx-auto relative z-10">

                        <div className="text-center mb-20">

                            <p className="uppercase tracking-[4px] text-[#FFC26F] text-sm mb-4">
                                Infrastructure Management
                            </p>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9E0BB] mb-6">
                                Smart Infrastructure Services
                            </h2>

                            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Modern infrastructure support and technical management
                                solutions designed for operational efficiency and reliability.
                            </p>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                            {[
                                {
                                    name: "CCTV Surveillance",
                                    icon: "📹",
                                },
                                {
                                    name: "IT Infra Services",
                                    icon: "🖥️",
                                },
                                {
                                    name: "Device Maintenance",
                                    icon: "🛠️",
                                },
                                {
                                    name: "Networking",
                                    icon: "🌐",
                                },
                                {
                                    name: "Repairing Services",
                                    icon: "⚙️",
                                },
                                {
                                    name: "Technical Support",
                                    icon: "🎧",
                                },
                                {
                                    name: "Installation Services",
                                    icon: "📡",
                                },
                                {
                                    name: "Many More Services",
                                    icon: "✨",
                                },
                            ].map((service, index) => (

                                <motion.div
                                    variants={fadeUp}
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
                                >

                                    <div className="w-16 h-16 rounded-2xl bg-[#FFC26F]/15 flex items-center justify-center text-3xl mb-6">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#F9E0BB] mb-3">
                                        {service.name}
                                    </h3>

                                </motion.div>

                            ))}

                        </div>
                    </div>

                </motion.section>
            </Reveal>

            {/* FINAL CTA */}

            <Reveal>
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="py-24 px-6 bg-[#f8f4ee]"
                >

                    <div className="max-w-5xl mx-auto bg-[#222831] rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.12),transparent_45%)]"></div>

                        <div className="relative z-10">

                            <p className="uppercase tracking-[5px] text-[#FFC26F] text-sm mb-4">
                                Workforce Support
                            </p>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9E0BB] leading-tight mb-6">

                                Looking For Reliable Workforce Solutions?

                            </h2>

                            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">

                                Connect with our team for professional manpower,
                                facility management, and infrastructure support services.

                            </p>

                            <button
                                onClick={() => navigate("/contact")}
                                className="bg-[#C38154] hover:bg-[#d19167] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
                            >
                                Contact Our Team
                            </button>

                        </div>

                    </div>

                </motion.section>
            </Reveal>

        </div>
    );
}