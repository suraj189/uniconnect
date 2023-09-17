import React,{useState} from "react";
import Button from "../Common/Button";
import IconText from "../Common/IconText";
import "./Banner.css";

const Index = () => {
  const [ctaColor, setctaColor] = useState('#fff')

  const handleMouseEnter = () => {//function for changing color
    console.log('ente')
    setctaColor('#1a8ef7')
  }

  const handleMouseOut = () => {
    setctaColor('#fff')
  }
  return (
    <section className="banner">
      <main className="bannerWrapper">
        <h1>
          <span className="subtext">Transform your Ideas into Stunning </span>
          Products with Unico's Expert Team
        </h1>
        <p className="subTitle">
          Build, Launch, and Scale your Products with Unmatched Efficiency
        </p>
        <div className="ctaWrapper" onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseOut} >
          <Button
            
           
            backgroundColor={ctaColor}
            fontColor="#1f1f1f"
            children="GET STARTED"
          />
        </div>
        <IconText />
      </main>
    </section>
  );
};

export default Index;
