import React, {Component} from 'react';
import {ProductContext} from "../Context";
import Loading from './Loading';
import Product from './Product'

class FeaturedProducts extends Component {
    static contextType = ProductContext;
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>
               <Loading />
            </div>
        );
    }
}

export default FeaturedProducts;