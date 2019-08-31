import React from "react";
import Title from "./Title";
import AboutImg from "../images/IMG_9754.JPG";
import AboutImg2 from "../images/product-9.jpeg";
import AboutImg3 from "../images/IMG_9755.JPG";
import AboutImg4 from "../images/IMG_9758.jpg";

export default function About() {
  return (
    <>
      <div className="about-div">
        <Title title="Msuko Sisal" />
        <p className="about">
          In a nutshell, Msuko Sisal is a Women Organisation based in the village
          of Kimamba, Morogoro Tanzania. Artisans hand making interior decor
          items from Sisal Fibre.
        </p>
      </div>
      <div className="about-img">
        <img src={AboutImg} alt="" />
        <img src={AboutImg3} alt="" />
      </div>
      <div className="about-div">
        <p className="about">
          All the products are best made and sort to give you the best look on
          natural sisal fibre products that your beauty and house deserve. With
          all these we aim at preserving the environment by using environmental
          friendly products.
        </p>
      </div>
      <div className="about-img">
        <img src={AboutImg4} alt="" />
        <img src={AboutImg2} alt="" />
      </div>
    </>
  );
}
