import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';

function Checkout() {
    const [ { cart, user }, dispach] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg' alt=''/>
                <div>
                    {/* <h3>Hello, {user?.email? user.email : 'Guest'}</h3> */}
                    <h2 className='checkout_title'>Shopping Cart</h2>
                    {cart.length == 0 ? 
                    
                       <h2 className='checkout_empty'>Your Shopping Cart is empty. </h2> : 
                       <FlipMove easing="ease-out"> 
                           {cart.map((item, i) => (
                            <div key={i}>
                                    <CheckoutProduct 
                                    id={item.id}
                                    title={item.title}
                                    price={item.price} 
                                    rating={item.rating} 
                                    image={item.image}/> 
                                </div>
                            ))}
                        </FlipMove>
                        }
                    
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
