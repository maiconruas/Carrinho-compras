import React, { useEffect, useState } from 'react';
import fetchProducts from '../../api/fetchProduct';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <section className="products container">
            {products.map((product) => <ProductCard key={product.id} data={product} />)}<ProductCard data={{}} />
        </section>
    );
}

export default Products;
