import React from 'react'
import './Technology.css'
import Image from '../../Asset/card.png'
import Tabs from '../Technology/Tabs/Index'

const Index = () => {

  return (
    <section className='tech'>
      <div>
        <div className='container techWrapper'>
          <div className='techTitle'>
            <h2>Create Future-Ready Platforms!</h2>
          </div>
          <div className='imageText'>
            <img src={Image} alt='card'/>
            <p >We have partnered with Xano to give you the ultimate experience. Xano builder provides us with a scalable server, flexible database,
               and a no-code API that transforms, filters and integrates with data anywhere</p>
          </div>
          <div class="break-line"></div>
          <Tabs />
        </div>
        </div>
    </section>
  )
}

export default Index
