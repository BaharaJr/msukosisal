import React from "react";
import HeroImg from "../images/hero.jpg";

export default function HomeHero() {
  return (
    <>
      <div className="hero-section">
        <p className="tagline">
          Useful sisal products to stimulate
          your <br /> home, beauty and appearance.
        </p>
        <img src={HeroImg} alt="" className="hero-image" />
      </div>
    </>
  );
}
