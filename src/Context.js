import React, { Component } from "react";
import Client from "./Contentful";

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

  //getdata
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "msukosisal",
        order: "fields.price"
      });
      let products = this.formatData(response.items);
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
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
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
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterProducts
    );
  };

  filterProducts = () => {
    let { products, type, price } = this.state;

    //filter products
    let tempProducts = [...products];

    //transform value
    price = parseInt(price);

    //filter by price
    tempProducts = tempProducts.filter(product => product.price <= price);

    //change state
    this.setState({
      sortedProducts: tempProducts
    });

    if (type !== "all") {
      tempProducts = tempProducts.filter(product => product.type === type);
      this.setState({
        sortedProducts: tempProducts
      });
    }
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
