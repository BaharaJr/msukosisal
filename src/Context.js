import React, { Component } from "react";
import items from "./data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    featuredProducts: [],
    sortedProducts: [],
    loading: true,
    type: "all",
    price: 0,
    maxPrice: 0,
    minPrice: 0
  };
  componentDidMount() {
    let products = this.formatData(items);
    let featuredProducts = products.filter(
      product => product.featured === true
    );

    let maxPrice = Math.max(...products.map(item => item.price));
    this.setState({
      products,
      featuredProducts,
      sortedProducts: products,
      loading: false,
      price: maxPrice,
      maxPrice
    });
  }
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let product = { ...item.fields, images, id };
      return product;
    });
    return tempItems;
  }
  getProduct = slug => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.slug === slug);
    return product;
  };

  handleChange = event => {
    const type = event.target.type;
    const value = event.target.value;
    const name = event.target.name;
    console.log(type, name, value);
  };

  filterProducts = () => {
    console.log("yooh");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export function WithProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {value => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}

export { ProductContext, ProductConsumer, ProductProvider };
