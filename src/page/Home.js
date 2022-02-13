import React from "react";
import sun from "../assets/sun.svg";
import earth from "../assets/planet-earth.svg";
import jupiter from "../assets/planet-jupiter.svg";
import mercury from "../assets/planet-mercury.svg";
import neptune from "../assets/planet-neptune.svg";
import saturn from "../assets/planet-saturn.svg";
import uranus from "../assets/planet-uranus.svg";
import venus from "../assets/planet-venus.svg";
import mars from "../assets/planet-mars.svg";
import {Link} from "react-router-dom";
const Home = () => {
  return(
      <>
      <h1 className="home-title">CHOOSE ONE</h1>
  <div className="solar-system">
    <img src={sun} alt="sun" className="sun" />
    <Link to="/mercury" className="circle-container1 circle">
        <img src={mercury} alt="mercury" className="mercury"/>
    </Link>
    <Link to="/venus" className="circle-container2 circle">
        <img src={venus} alt="venus" className="venus"/>
    </Link>
    <Link to="/earth" className="circle-container3 circle">
        <img src={earth} alt="earth" className="earth"/>
    </Link>
    <Link to="/mars" className="circle-container4 circle">
        <img src={mars} alt="mars" className="mars"/>
    </Link>
    <Link to="/jupiter" className="circle-container5 circle">
        <img src={jupiter} alt="jupiter" className="jupiter"/>
    </Link>
    <Link to="/saturn" className="circle-container6 circle">
        <img src={saturn} alt="saturn" className="saturn"/>
    </Link>
    <Link to="/uranus"className="circle-container7 circle">
        <img src={uranus} alt="uranus" className="uranus"/>
    </Link>
    <Link to="/neptune" className="circle-container8 circle">
        <img src={neptune} alt="neptune" className="neptune"/>
    </Link>
  </div>
  </>
  );
};

export default Home;
