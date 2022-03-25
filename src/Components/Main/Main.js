import React, { useEffect, useState } from 'react'
import './main.css';
import Product from '../Product/Product';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [addCart, setAddCart] = useState([]);

    const addedCard = ( product ) => {
        let newAddedCard = [...addCart, product]
        setAddCart(newAddedCard);
    }

    useEffect(() => {
        fetch('data.json') 
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
  return (
    <div className='main'>
        <h1 className='logo'>Food Store</h1>

        <div className="inner-main">
            <div className="container">
                <div className="products-section">
                    {

                        products.map(product => <Product key={product.id} product={product} addedCard={addedCard}></Product>)

                    }
                </div>
            </div>
            <div className="SideBar">

                { 
                    
                    addCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <img src={cart.img} alt="" className='cart-img'/>
                            <h2>{cart.name}</h2>
                        </div>
                    )) 

                }
            </div>
        </div>

    </div>
  )
}

export default Main