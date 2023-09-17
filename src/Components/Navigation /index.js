import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../Asset/logo.svg";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    {
      label: "Services",
      link: "#",
      subItems: [
        { label: "Mobile App Development", link: "#" },
        { label: "Web Development", link: "#" },
        { label: "UI/UX Design", link: "#" },
        { label: "Tech Consulting", link: "#" },
      ],
    },
    {
      label: "Hire Developers",
      link: "#",
      subItems: [
        { label: "Mobile App Development", link: "#" },
        { label: "Node Developer", link: "#" },
        { label: "React js", link: "#" },
        { label: "Flutter", link: "#" },
      ],
    },
    {
      label: "Case Study",
      link: "#",
      subItems: [
        { label: "Action", link: "#" },
        { label: "Another action", link: "#" },
        { label: "Separated link", link: "#" },
      ],
    },
    { label: "Pricing Plan", link: "#" },
    { label: "No Code Tools", link: "#" },
    { label: "About Us", link: "#" },
  ];

  return (
    <header className="navigation">
      <div className="navigationWrapper">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {menuItems?.length &&
              menuItems?.map((menu, i) => {
                return (
                  <li className="dropdown">
                    <a className={` ${menu?.subItems?.length>0?'leftarrow':''} menuItem`} href={menu?.href}>{menu?.label}</a>
                   {menu?.subItems&&<ul>
                      {menu?.subItems?.map((subMenu, idx) => {
                        return (
                          <li>
                            <a href={subMenu.link}>{subMenu.label}</a>
                          </li>
                        );
                      })}
                    </ul>}
                  </li>
                );
              })}
          </ul>
          <button className="get-in-touch">Get in Touch</button>
        </nav>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
