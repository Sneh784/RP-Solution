import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import SolutionPage from './components/pages/SolutionPage'
import Navbar from './components/navbar/Navbar'
import ServicesPage from './components/pages/ServicesPage'
import AboutUSPage from './components/pages/AboutUSPage'
import CareerPage from './components/pages/CareerPage'
import AdminLoginPage from './components/pages/AdminLoginPage'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>

    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/solution"  element={<SolutionPage/>}/>
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/about us" element={<AboutUSPage/>}/> 
    <Route path="/career" element={<CareerPage/>}/>
    <Route path="/admin login" element={<AdminLoginPage/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
