import React, { useEffect, useState } from 'react';
import fetchProducts from '../../api/fetchProduct';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    return (
        (loading && <Loading />) ||  <section className="products container">
            {products.map((product) => <ProductCard key={product.id} data={product} />)}<ProductCard data={{}} />
        </section>  
    );
}

export default Products;
