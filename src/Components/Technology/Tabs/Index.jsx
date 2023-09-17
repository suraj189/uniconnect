import React, { Fragment, useEffect, useState, useRef } from "react";
import "intersection-observer";
import "./Tabs.css";

const platform = [
  {
    className: "build_faster",
    title:
      "Developing with no code platforms enables us to deliver outstanding results on time.",
    list: [
      "Swift Development",
      "Well-Organized",
      "Cost-Effective",
      "Finest Outcome",
    ],
    cards: [
      {
        image: `${require("../../../Asset/xano.png")}`,
        title: "",
        thumbnails: [],
        text: "Xano builder provides us with a scalable server flexible database, and a no-code API that transforms, filters and integrates with data anywhere.",
      },
      {
        title: "",
        thumbnails: [],
        image: `${require("../../../Asset/webflow.png")}`,
        text: "Webflow is a no-code web design tool with excellent support features that helps us design, build and launch websites at lightning-fast speed and uncompromised quality.",
      },
      {
        title: "",
        thumbnails: [],
        image: `${require("../../../Asset/wordpress.png")}`,
        text: "WordPress is a go-to platform for designing simple, modern and flexible websites that make the development process a smooth and adaptable experience for us.",
      },
    ],
  },
  {
    className: "achieve_scale",
    title:
      "Code platforms help achieve scale easily. Code platforms increase the speed of development and manage developments more efficiently.",
    list: [
      "Scalable Server",
      "Well-Organized",
      "Easy to Transform",
      "Finest Outcome",
    ],
    cards: [
      {
        image: ``,
        title: "Front-end",
        text: "Dealing with parts of a user interface, the front-end development needs efficient systems to build them up slowly. What your users see, access and interact with is built by us keeping in mind a combination of resources.",
        thumbnails: [
          {
            image: `${require("../../../Asset/Node.svg").default}`,
            title: "Node Js",
          },
          {
            image: `${require("../../../Asset/Angular.svg").default}`,
            title: "Angular",
          },
          {
            image: `${require("../../../Asset/React.svg").default}`,
            title: "React",
          },
        ],
      },
      {
        image: ``,
        title: "Back-end",
        text: "Delving deep into the machinery of each click, the back-end systems make sure any website or software program accessed by your users works smoothly. Offering the latest software, we make sure to avoid all glitches.",
        thumbnails: [
          {
            image: `${require("../../../Asset/Node.svg").default}`,
            title: "Node Js",
          },
          {
            image: `${require("../../../Asset/larvel.svg").default}`,
            title: "Laravel",
          },
          {
            image: `${require("../../../Asset/coding.svg").default}`,
            title: "Hasura",
          },
        ],
      },
    ],
  },
];

const ScrollableTabs = () => {
  const [sections, setSection] = useState([]);
  const [isbuild_fasterinView, setisbuild_fasterinView] = useState(false);
  const [isachieve_scaleinView, setisachieve_scaleinView] = useState(false);
  const buildref = useRef();
  const achieveref = useRef();

  useEffect(() => {
    setSection(platform);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {//logic to get the current elem which is into the view
      const entry = entries[0];
      if(entry.target.classList.contains('build_faster')&&entry?.isIntersecting){
        setisbuild_fasterinView(true);
      }else{
        setisbuild_fasterinView(false)
      }
     
    });
    const observer_2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.target.classList.contains('achieve_scale')&&entry?.isIntersecting){
        setisachieve_scaleinView(true);
      }else{
        setisachieve_scaleinView(false)
      }
     
    });

    if (buildref?.current !== undefined) {
      observer.observe(buildref.current);
      
    }

    if (achieveref?.current !== undefined) {
      observer_2.observe(achieveref.current);
    }
  }, [sections]);


  const handlegetElement = (e) => {
    let view = e.target.getAttribute("data-id");
    let scrollinto = document.getElementsByClassName(view)[0];
    scrollinto.scrollIntoView({ behavior: "smooth" });
  };

  

  return (
    <div className="scrollable-tabs-container">
      <div className="stickyPlatform">
        <div className={` ${isbuild_fasterinView?'active':''} code`} data-id="build_faster" onClick={handlegetElement}>
          <p className="heroPara child-element" data-id="build_faster">
            Build Faster
          </p>
          <h2 className="no_code child-element" data-id="build_faster">
            No CODE PLATFORMS
          </h2>
        </div>
        <div
          className={` ${isachieve_scaleinView?'active':''} code` }
          data-id="achieve_scale"
          onClick={handlegetElement}
        >
          <p className="heroPara" data-id="achieve_scale">
            Achieve Scale
          </p>
          <h2 className="no_code" data-id="achieve_scale">
            Code Platforms
          </h2>
        </div>
      </div>
      <div className="noCode">
        {sections &&
          sections?.map((section, i) => {
            return (
              <Fragment key={i} >
                <div className={`noCode_wrapper` } >
                  <p className="heroPara">{section?.title}</p>
                  <ul className="techlist">
                    {section?.list?.map((list, idx) => {
                      return (
                        <li key={idx} className="white">
                          {list}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  className={` ${section.className} noCode_wrapperRight`}
                  ref={
                    section.className === "build_faster" ? buildref : achieveref
                  }
                >
                  {section?.cards?.map((img) => {
                    return (
                      <div className="outLine">
                        {img?.title === "" ? (
                          <img src={img?.image} alt="card" width={168} />
                        ) : (
                          <h2 className="front-end">{img?.title}</h2>
                        )}
                        <p className="no-code-para">{img?.text}</p>
                        <div className="thumbnails">
                          {img?.thumbnails &&
                            img?.thumbnails?.map((thumbnail, ide) => {
                              return (
                                <div className="tech-wrapper">
                                  <div className="logo-circle">
                                    <img
                                      src={thumbnail?.image}
                                      alt="thumbnail"
                                    />
                                  </div>
                                  <p className="tech-name">
                                    {thumbnail?.title}
                                  </p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default ScrollableTabs;
