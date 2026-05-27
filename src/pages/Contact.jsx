import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

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
    "service_ft6vs1w",
    "template_8xqwj1y",
    form,
    "UJRFJxvMHugdZBjiU"
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
        <div className="bg-[#f8f4ee] text-[#222831]">

            {/* HERO */}
            <section className="relative bg-[#222831] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,194,111,0.15),transparent_45%)]"></div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <p className="uppercase tracking-[6px] text-[#FFC26F] text-sm mb-4">
                        Contact Us
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#F9E0BB] mb-6">
                        Let’s Build With Confidence
                    </h1>

                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Reach out for manpower solutions or real estate leasing.
                        We respond quickly and professionally.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white shadow-xl rounded-3xl p-10 border border-[#eadbc8]">

                        <h2 className="text-3xl font-bold mb-8">
                            Send Your Inquiry
                        </h2>

                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

                            <input
                                name="name"
                                placeholder="Full Name"
                                onChange={handleChange}
                                required
                                className="p-4 border rounded-xl"
                            />

                            <input
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                required
                                className="p-4 border rounded-xl"
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                                required
                                className="p-4 border rounded-xl md:col-span-2"
                            />

                            {/* DROPDOWN */}
                            <select
                                name="service"
                                onChange={handleChange}
                                required
                                className="p-4 border rounded-xl md:col-span-2"
                            >
                                <option value="">Select Service</option>
                                <option value="Manpower Services">Manpower Services</option>
                                <option value="Real Estate Leasing">Real Estate Leasing</option>
                            </select>

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                onChange={handleChange}
                                className="p-4 border rounded-xl md:col-span-2"
                            />

                            <button
                                type="submit"
                                className="md:col-span-2 flex items-center justify-center gap-2 bg-[#C38154] text-white py-4 rounded-xl font-semibold hover:bg-[#d19167] transition"
                            >
                                Send Inquiry
                            </button>

                        </form>
                    </div>

                </div>
            </section>

            {/* INFO CARDS */}
            <section className="pb-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

                    {[
                        { icon: Phone, title: "Phone", text: "Available on request" },
                        { icon: Mail, title: "Email", text: "Business inquiries only" },
                        { icon: MapPin, title: "Location", text: "India" },
                        { icon: Clock, title: "Hours", text: "Mon - Sat" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow border">
                            <item.icon className="text-[#C38154] mb-3" />
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.text}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* WHATSAPP STRIP */}
            <section className="bg-[#222831] text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#F9E0BB] mb-4">
                        Need Immediate Assistance?
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Connect with our team for faster responses.
                    </p>

                    <button className="bg-[#25D366] text-black font-semibold px-8 py-3 rounded-xl">
                        WhatsApp Us
                    </button>
                </div>
            </section>

            {/* MAP */}
            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-xl border">
                        <iframe
                            className="w-full h-[350px]"
                            src="https://www.google.com/maps/embed?pb="
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
}