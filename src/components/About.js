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
          Msuko Sisal is a Women Organisation in a small village in the outskirts of morogoro, Tanzania. Within the two years since the organisation was founded, six more women had been included in the Msuko sisal family.
        </p>
      </div>
      <div className="about-div">
        <p className="about">
The Purpose of Msuko Sisal is to uplift and provide income for the women in the village, all the same time to create a growing environment that supports and encourages creativity. With the minimum guidelines of the organisation to create a sisal home decor that are importantly eco-friendly.
        </p>
      </div>
    </>
  );
}
