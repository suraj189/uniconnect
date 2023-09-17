
import { useState } from 'react';
import Button from '../Button/index'
import './Card.css'
const Card = ({ data }) => {
  const { image, title, subtitle, color } = data;
  const [ctaColor, setctaColor] = useState('#000')
  const cardStyle = {
    backgroundColor: color,
  };

  const handleMouseEnter = () => {//function for changing color
    setctaColor('#1a8ef7')
  }

  const handleMouseOut = () => {
    setctaColor('#000')
  }

  return (
    <div className="card" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
      <div className='imageWrapper'>
        <img src={image} alt={title} />
      </div>
      <div className='servicesContent'>
        <h3 className="title">{title}</h3>
        <p className="CardsubTitle">{subtitle}</p>
        <div >
          <Button backgroundColor={ctaColor} children='KNOW MORE' fontColor='#fff' />
        </div>
      </div>

    </div>
  );
};
export default Card