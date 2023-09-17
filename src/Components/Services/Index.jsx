import React, { useState, useEffect } from 'react';
import Card from '../Common/Cards/index';
import './Services.css'

const CardList = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const cardData = [
      {
        image: `${require('../../Asset/mobile.svg').default}`,
        title: 'Mobile App ',
        subtitle: 'We create custom mobile applications using trusted UX for both iOS and Android.',
        color: '#b6d7a8', // Specify the default color for this card
      },
      {
        image: `${require('../../Asset/mobile.svg').default}`,
        title: 'Website Development',
        subtitle: 'We build website applications that deliver speed, efficiency and results.',
        color: '#9fc5e8', // Specify the default color for this card
      },
      {
        image: `${require('../../Asset/mobile.svg').default}`,
        title: 'Product Design',
        subtitle: 'We design robust, fast, scalable and extraordinary interfaces that make a remarkable impact.',
        color: '#fff2cc', // Specify the default color for this card
      },
      {
        image: `${require('../../Asset/mobile.svg').default}`,
        title: 'Tech Consulting',
        subtitle: 'We support you by creating an outstanding product that meets the dynamic market needs.',
        color: '#c7cd00', // Specify the default color for this card
      },
    ];

    setCardData(cardData)
  }, []);

  return (
    <section className="card-list ">
      <div className='container'>
        <p className='uppertext'>SERVICES</p>
        <div className='titleWrapper'>
          <h2>The <s>Unique</s> Unico Approach</h2>
        </div>
        <div className='cardContainer'>
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;