import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImg from '../images/details-112.jpg';

function Product({product}) {
    const{name, slug,images,price} = product;
    return <article className="product"> 
        <div className="img-container">
            <img src={images[0] || defaultImg} alt="product" />
            <div className="price-top">
                <h6>Tshs{price}</h6>
                <p>On Sale</p>
            </div>
            <Link to={`/Gallery/${slug}`} className="btn-primary product-link">
                View
            </Link>
        </div>
        <p className="product-info">{name}</p>
        </article>
    }
    Product.propTypes = {
        product:PropTypes.shape({
            name:PropTypes.string.isRequired, 
            slug:PropTypes.string.isRequired, 
            images:PropTypes.arrayOf(PropTypes.string).isRequired, 
            price:PropTypes.number.isRequired, 
        })
    }

export default Product;