import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';

const Product = ({ product }) => {
    const {name, value, img} = product;
  return (
    <div className='card'>
        <div className="img-container">
            <img src={img} alt="" />
        </div>

        <div className="card-body">
            <h3>Name: {name}</h3>
            <h6>Value: {value}</h6>
        </div>

        <button className='add-btn'>
            Add Card <FaCartArrowDown />
        </button>
    </div>
  )
}

export default Product