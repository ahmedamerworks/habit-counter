import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-title">
          <h1 className="">Good Habit Helper</h1>
        </div>
        <div className="header-icons">Icons</div>
        <div className="header-links_container">
          <ul className="header-links_list ">
            <li className="list-item">
              <a href="https://www.linkedin.com/in/ahmed-amer-8b7524262/">
                Author Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
