import React, {Component} from 'react';
import items from './data';

const ProductContext = React.createContext();
class ProductProvider extends Component {
    state ={
        products: [],
        featuredProducts: [],
        sortedProducts : [],
        loading: true
    };
    componentDidMount() {
        let products = this.formatData(items)
        let featuredProducts = products.filter(product => product.feature === true);
        this.setState({
            products,
            featuredProducts,
            sortedProducts: products,
            loading: false
        })
    }
    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image =>image.fields.file.url)
            let product = {...item.fields,images,id}
            return product;
            }

        );
        return tempItems;
    }
    render() {

        return (
            <ProductContext.Provider value={"hello world"}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductContext, ProductConsumer, ProductProvider}