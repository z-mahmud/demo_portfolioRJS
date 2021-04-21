import React from "react";
import "./style.css";

/**
 * @author
 * @function
 **/

const Header = (props) => {
  return (
    <div>
      <heare className="header">
        <nav className="headerMenu">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <div>Social media links</div>
      </heare>
    </div>
  );
};

export default Header;
