import React from 'react'
import './Product.css'

function Product({id, title, price, rating, image}) {
    const stars = []
    for (let i = 0; i < rating; i++) {
        stars.push(<p>⭐️</p>)
      }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {stars}
                </div>
            </div>
            <img src={image}/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
