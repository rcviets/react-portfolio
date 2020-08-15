import React from "react";
import avatar from "../../images/portrait.png";
import "./style.css";

const Hero = () => {
    return (
        <div className="hero-div">
            <img className="hero-img" src={avatar} alt="Avatar" />
        </div>
    );
};

export default Hero;