import React, { useEffect, useState } from 'react'
import './main.css';
import { Modal, Button } from 'react-bootstrap';
import Product from '../Product/Product';

const Main = () => {
    // product state
    const [products, setProducts] = useState([]);

    // cart state
    const [addCart, setAddCart] = useState([]);

    // Modal Cart state
    const [addCartModal, setModalCart] = useState([]);

    // ReactBootstrap state for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SideBar added cart function
    const addedCard = ( product ) => {
        let newAddedCard = [...addCart, product]
        setAddCart(newAddedCard);
    }
    
    
    // Auto Selected function
    const autoSelect = (  ) => {
        let newNumOfCart = addCart[Math.floor(Math.random() * addCart.length)];
        setModalCart(newNumOfCart);
    }
    
    // Reset function
    const resetCarts = () => {
        setAddCart([]);
    }

    // Loaded Data
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

                <Button className='auto-choose-btn' onClick={() => {autoSelect(); handleShow();}} variant="outline-success">Auto Choose</Button>
                <br></br>
                <br></br>
                <Button className='reset-btn' onClick={resetCarts} variant="outline-danger">Reset</Button>
            </div>
        </div>

        <div>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            
            </Modal.Header>
            <Modal.Body>
            <img src={addCartModal.img} alt="" className='modal-img'/> 
            <h3>Name: {addCartModal.name}</h3>
            <h4>Value: {addCartModal.value}</h4>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    
        </div>
        
    </div>
  )
}

export default Main;