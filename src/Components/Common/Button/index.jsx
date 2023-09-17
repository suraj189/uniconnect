import React from 'react';
import './Cta.css'

const CustomButton = ({ backgroundColor, fontColor, children }) => {
  // Define default values for props
  const defaultBackgroundColor = backgroundColor || 'blue';
  const defaultFontColor = fontColor || 'white';

  // Style object to apply to the button element
  const buttonStyle = {
    backgroundColor: defaultBackgroundColor,
    color: defaultFontColor,
    transition: 'background-color 0.3s ease, red 0.3s ease',
  };

  return (
    <button style={buttonStyle} className='cta'>
      {children}
    </button>
  );
};

export default CustomButton;