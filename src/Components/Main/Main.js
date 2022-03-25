import React, { useEffect, useState } from 'react'
import './main.css';
import Product from '../Product/Product';

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json') 
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
  return (
    <div className='main'>
        <h1 className='logo'>Food Store</h1>

        <div className="container">
            <div className="products-section">
                {

                    products.map(product => <Product key={product.id} product={product}></Product>)

                }
            </div>
        </div>

    </div>
  )
}

export default Main