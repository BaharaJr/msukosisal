import React, { Component } from "react";
import defaultBcg from "../images/product-9.jpeg";
// eslint-disable-next-line
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
import StyledHero from "../components/StyledHero";

class Single extends Component {
 constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = ProductContext;

  // componentDidMount(){}
  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.slug);
    if (!product) {
      return (
        <div className="error">
          <h3>No product found...</h3>
          <Link to="/Gallery" className="btn-primary">
            view other products
          </Link>
        </div>
      );
    }

    const { name, description, price, images } = product;
	  // eslint-disable-next-line
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/Gallery" className="btn-primary">
              back to products
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-product">
          <div className="single-product-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-product-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h3>price : tshs {price}</h3>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default Single;
