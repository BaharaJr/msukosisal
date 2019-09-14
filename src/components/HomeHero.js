import React from "react";
import HeroImg from "../images/hero.jpg";

export default function HomeHero() {
  return (
    <>
      <div className="hero-section">
        <p className="tagline">
          Handmade Sisal decor for any space around. 
        </p>
        <img src={HeroImg} alt="" className="hero-image" />
      </div>
    </>
  );
}
