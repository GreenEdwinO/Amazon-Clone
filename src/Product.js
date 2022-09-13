import React from 'react'
import "./Product.css"

export const Product = (props) => {
  return (
    <div
      className='product'>
      <div className="product__info">
        <p>{props.title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>

      <img
        src={props.image} alt=""
      />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product