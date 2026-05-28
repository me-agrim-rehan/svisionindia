import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

import { fadeUp, staggerContainer } from "../utils/animations";
import Reveal from "../components/Reveal";

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert("Inquiry sent successfully!");
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    service: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong. Try again.");
            });
    };

    return (

        <>
            <Helmet>
                <title>
                    Contact Us | Samarth Vision India
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

            <div>
            </div>

            <div className="bg-[#f8f4ee] text-[#222831] min-h-[85vh] md:min-h-screen relative overflow-hidden">

                {/* NOISE TEXTURE */}

                <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

                {/* HERO */}

                <section className="relative bg-[#222831] text-white py-20 py-20 md:py-32 px-6 overflow-hidden">

                    {/* GOLD GLOWS */}

                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFC26F]/10 blur-[120px] rounded-full"></div>

                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C38154]/10 blur-[120px] rounded-full"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto relative z-10 text-center"
                    >

                        <p className="uppercase tracking-[3px] md:tracking-[6px] text-[#FFC26F] text-sm mb-4">
                            Contact Us
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#F9E0BB] mb-8 leading-tight">
                            Let’s Build With Confidence
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Reach out for manpower solutions, workforce deployment,
                            and warehouse or agricultural leasing services.
                            Our team responds quickly and professionally.
                        </p>

                    </motion.div>

                </section>

                {/* FORM */}

                <Reveal>

                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="py-24 px-6 relative"
                    >

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(195,129,84,0.08),transparent_60%)] pointer-events-none"></div>

                        <div className="max-w-5xl mx-auto relative z-10">

                            <div className="bg-white/80 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-[32px] p-6 md:p-14 border border-[#eadbc8]">

                                <div className="mb-10">

                                    <p className="uppercase tracking-[5px] text-[#C38154] text-sm mb-4">
                                        Inquiry Form
                                    </p>

                                    <h2 className="text-4xl font-bold mb-4 text-[#222831]">
                                        Send Your Inquiry
                                    </h2>

                                    <p className="text-gray-600 text-lg">
                                        Share your requirements and our team will connect with you shortly.
                                    </p>

                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >

                                    <input
                                        name="name"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        required
                                        className="p-4 border border-[#e6d8c7] rounded-2xl bg-white outline-none focus:border-[#C38154] transition-all duration-300"
                                    />

                                    <input
                                        name="phone"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        required
                                        className="p-4 border border-[#e6d8c7] rounded-2xl bg-white outline-none focus:border-[#C38154] transition-all duration-300"
                                    />

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        onChange={handleChange}
                                        required
                                        className="p-4 border border-[#e6d8c7] rounded-2xl bg-white outline-none focus:border-[#C38154] transition-all duration-300 md:col-span-2"
                                    />

                                    <select
                                        name="service"
                                        onChange={handleChange}
                                        required
                                        className="p-4 border border-[#e6d8c7] rounded-2xl bg-white outline-none focus:border-[#C38154] transition-all duration-300 md:col-span-2"
                                    >

                                        <option value="">
                                            Select Service
                                        </option>

                                        <option value="Manpower Services">
                                            Manpower Services
                                        </option>

                                        <option value="Real Estate Leasing">
                                            Real Estate Leasing
                                        </option>

                                    </select>

                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        onChange={handleChange}
                                        className="p-4 border border-[#e6d8c7] rounded-2xl bg-white outline-none focus:border-[#C38154] transition-all duration-300 md:col-span-2 resize-none"
                                    />

                                    <button
                                        type="submit"
                                        className="md:col-span-2 flex items-center justify-center gap-3 bg-[#C38154] hover:bg-[#d19167] text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_10px_35px_rgba(195,129,84,0.35)] hover:-translate-y-1"
                                    >

                                        <Send size={18} />

                                        Send Inquiry

                                    </button>

                                </form>

                            </div>

                        </div>

                    </motion.section>

                </Reveal>

                {/* INFO CARDS */}

                <Reveal>

                    <motion.section
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="pb-24 px-6"
                    >

                        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

                            {[
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    text: "1234567890",
                                },
                                {
                                    icon: Mail,
                                    title: "Email",
                                    text: "wxy@gmail.com",
                                },
                                {
                                    icon: MapPin,
                                    title: "Location",
                                    text: "CXWG+9XP Gurugram, Haryana",
                                },
                                {
                                    icon: Clock,
                                    title: "Working Hours",
                                    text: "Mon - Sat",
                                },
                            ].map((item, i) => (

                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="bg-white/80 backdrop-blur-md p-8 rounded-[28px] shadow-lg border border-[#eadbc8] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-[#fff2df] flex items-center justify-center mb-5">

                                        <item.icon className="text-[#C38154]" />

                                    </div>

                                    <h3 className="font-bold text-xl mb-2 text-[#222831]">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600">
                                        {item.text}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </motion.section>

                </Reveal>

                {/* WHATSAPP STRIP */}

                <section className="relative bg-[#222831] text-white py-20 px-6 overflow-hidden">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.12),transparent_40%)]"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center relative z-10"
                    >

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9E0BB] mb-6 leading-tight">
                            Need Immediate Assistance?
                        </h2>

                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Connect with our team for faster responses regarding
                            manpower deployment and property leasing solutions.
                        </p>

                        <button className="bg-[#25D366] hover:scale-105 transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg">
                            WhatsApp Us
                        </button>

                    </motion.div>

                </section>

                {/* MAP */}

                <Reveal>

                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="px-6 py-24"
                    >

                        <div className="max-w-6xl mx-auto">

                            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-[#eadbc8]">

                                <iframe
                                    className="w-full h-[380px]"
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3508.1141727477852!2d76.97487257549402!3d28.445974475767162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI2JzQ1LjUiTiA3NsKwNTgnMzguOCJF!5e0!3m2!1sen!2sin!4v1779891905701!5m2!1sen!2sin"
                                    loading="lazy"
                                    allowFullScreen=""
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>

                        </div>

                    </motion.section>

                </Reveal>

            </div>
        </>
    );
}
