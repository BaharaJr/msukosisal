import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import ProductContainer from '../components/ProductContainer'

function Gallery() {
    return (
<>
	    <Hero hero="galleryHero" >

	    <Banner title="msuko products">

	    <Link to="/" className="btn-primary">
	    return home
	    </Link>
	    </Banner>
	    </Hero>
	    <ProductContainer />
    </>
    );
    }

export default Gallery;
