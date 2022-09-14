import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();


  const removeFromCart = () => {
    // removing the item(s) from Cart
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: props.id,
    })
  }
  return (
    <div className='checkout-product'>
      <img
        className='checkoutProduct__image'
        src={props.image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__tittle">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct