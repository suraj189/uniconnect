import React from 'react'
import Navigation from '../../Components/Navigation '
import Banner from '../../Components/Banner'
import Services from '../../Components/Services/Index'
import Technology from '../../Components/Technology/Index'
import './homePage.css'
const Index = () => {
  return (
    <div className='homePage'>
        <Navigation/>
        <Banner/>
        <Services/>
        <Technology/>
    </div>
  )
}

export default Index
