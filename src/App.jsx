import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Navbar from './components/navbar/Navbar'
import ServicesPage from './components/pages/ServicesPage'
import AboutUSPage from './components/pages/AboutUSPage'
import CareerPage from './components/pages/CareerPage'
import Footer from './components/footer/Footer'
import UsHealthCare from './components/pages/UsHealthCarePage'

function App() {
  return (
    <div>
      <Navbar/>

    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about-us" element={<AboutUSPage/>}/> 
    {/* <Route path="/solution"  element={<SolutionPage/>}/> */}
    <Route path="/service" element={<ServicesPage/>}/>
    <Route path="/career" element={<CareerPage/>}/>
    <Route path="/us-health-care" element={<UsHealthCare/>}/>
    {/* <Route path="/admin login" element={<AdminLoginPage/>}/> */}
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
