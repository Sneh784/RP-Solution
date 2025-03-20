import React from 'react'
import Home from '../home/Home'
import Solution from '../home/solution/Solution'
import Server from '../home/service/Service'
import About from '../home/about/About'
import Career from '../home/career/Career'

function HomePage() {
  return (
    <div>
      <Home/>
      <Solution/>
      <Server/>
      <About/>
      <Career/>
    </div>
  )
}

export default HomePage
