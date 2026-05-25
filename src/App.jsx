import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Workforce from "./pages/Workforce"
import RealEstate from "./pages/RealEstate"
import Contact from "./pages/Contact"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App(){

  return(
    <div>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services/workforce" element={<Workforce/>}/>
        <Route path="/services/real-estate" element={<RealEstate/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer/>

    </div>
  )
}