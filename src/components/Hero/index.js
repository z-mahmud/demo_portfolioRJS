import React from "react";
import NavBar from "../NavBar";
import Logo from "../Logo";
import Card from "../UI/Card";
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div>
      <Card>
        <div style={{ padding: "60px 0px" }}>
          <Logo></Logo>
        </div>
        <NavBar></NavBar>
      </Card>
    </div>
  );
};

export default Hero;
