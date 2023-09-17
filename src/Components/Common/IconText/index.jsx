import React, { useEffect, useState } from "react";
import "./IconText.css";

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //setting dummy api data into state
    const icondata = [
      {
        image: `${require("../../../Asset/mobile.svg").default}`,
        text: "Top Mobile App Developers",
      },
      {
        image: `${require("../../../Asset/coding.svg").default}`,
        text: "Expert in No code Web Development",
      },
      {
        image: `${require("../../../Asset/star.svg").default}`,
        text: "Top Design Agency",
      },
    ];
    setData(icondata);
  }, []);

  return (
    <div className="iconText">
      {data &&
        data?.map((icon, i) => {
          return (
            <div key={i}>
              <img src={icon?.image} alt="icon" />
              <div className="textWrapper">
                <p className="texts">{icon?.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
