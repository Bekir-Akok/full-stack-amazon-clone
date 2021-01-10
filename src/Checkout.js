import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'


const Checkout = () => {

    const [ {basket , user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' className="checkout-ad" />
                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className="checkout-title">Your Shopping Basket</h2>
                    {basket.map(item => ( 
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        rating={item.rating}
                        price={item.price} />
                    ))}
                    
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
