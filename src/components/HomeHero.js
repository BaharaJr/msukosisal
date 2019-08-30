import React from "react";
import HeroImg from "../images/hero.jpg";

export default function HomeHero() {
  return (
    <>
      <div className="hero-section">
        <div className="tagline">
          <p>
            Useful sisal products to stimulate <br />
            your home, beauty and <br />
            appearance.
          </p>
          </div>

        <div className="hero-image">
          <img src={HeroImg} alt="" width="400px" />
        </div>
      </div>
    </>
  );
}
