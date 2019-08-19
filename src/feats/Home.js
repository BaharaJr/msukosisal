import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services"
import FeaturedProducts from "../components/FeaturedProducts";


const Home = () => {
  return (
    <>
    <Hero>
      <Banner
        title="Experience"
        subtitle="Scandinavian touch"
      >
        <Link to="/Gallery" className="btn-primary">
          Products
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedProducts />
    </>
  );

};

export default Home;
