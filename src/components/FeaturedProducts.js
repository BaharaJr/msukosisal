import React, {Component} from 'react';
import {ProductContext} from "../Context";
import Loading from './Loading';
import Product from './Product';
import Title from './Title';

class FeaturedProducts extends Component {
    static contextType = ProductContext;
    render() {
        let {loading, featuredProducts: products} = this.context;
        products = products.map(product => {
            return <Product key={product.id} product={product} />;
        });
        return (
            <section className="featured-products">
                <Title title="hot proucts" />
                <div className="featured-products-center">
                    {loading? <Loading /> : products}
                </div>
            </section>
        );
    }
}

export default FeaturedProducts;