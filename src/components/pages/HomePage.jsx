import React from 'react'
import Home from '../home/Home'
import Solution from '../home/solution/Solution'
import Sol from '../home/sol/Sol'
import About from '../home/about/About'
import Career from '../home/career/Career'
// import Admin from '../home/admin/Admin'
import Health from '../home/health/Health'

function HomePage() {
  return (
    <div>
      <Home/>
      <Solution/>
      <Sol/>
      <About/>
      <Career/>
      <Health/>
      {/* <Admin/> */}
    </div>
  )
}

export default HomePage
