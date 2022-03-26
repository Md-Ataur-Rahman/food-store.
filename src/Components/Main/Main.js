import React, { useEffect, useState } from 'react'
import './main.css';
import '../../style_of_question.css'
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
    const addedCard = (product) => {
        let newAddedCard = [...addCart, product]
        setAddCart(newAddedCard);
    }
    
    
    // Auto Selected function
    const autoSelect = () => {
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
        
        <section id="js-questions-section">
            <div class="question-div">
                    <h3 class="quenstion-name">How React Work ?</h3>
                    <p class="answer-of-question">React works in declarative code. React creates a DOM in memory, React creates a VIRTUAL DOM in memory. যখন React App কোনো পরিবর্তন হয় তখন ওই পরিবর্তন তা VIRTUAL DOM যাই .ওই পরিবর্তন তা Dom এর সাথে Compare করে এবং শুদু ওই জায়গা তাই পরিবর্তন করে কোনো রিলোড ছাড়াই . তারপর ওই Changes তা React App এ execute করে দেওয়া হয়.</p>
                </div>
                <div class="question-div">
                    <h3 class="quenstion-name">Props Vs State</h3>
                    <p class="answer-of-question">
                    Props:- Data one component to another components প্রেরণ করা হয়. It is Immutable.Props এর সাথে ব্যবহার করা যেতে পারে state and functional components. Props are read-only.
                    State:- Data গুলো একমাত্র components মধ্যে passed করা যাই. It is mutable. State গুলো ব্যবহার করা যায় state components and class components. State is both read and write.
                    </p>
                </div>
        </section>
    </div>
  )
}

export default Main;