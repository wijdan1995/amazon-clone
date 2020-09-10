import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, price, rating, image}) {
    const [ { cart }, dispach] = useStateValue()

    const removeFromCart = () => {
        dispach({
            type: 'REMOVE_FROM_CART',
            id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_img' src={image} alt=''/>
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating).fill().map((_, i) => <span role="img" aria-label='star'>⭐</span>)}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
