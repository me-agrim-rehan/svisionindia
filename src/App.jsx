import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home"
import Services from "./pages/Services"
import Workforce from "./pages/Workforce"
import RealEstate from "./pages/RealEstate"
import Contact from "./pages/Contact"
import About from "./pages/About";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {

  return (
    <div>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/workforce" element={<Workforce />} />
        <Route path="/services/realestate" element={<RealEstate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </div>
  );
}