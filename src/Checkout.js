import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'


const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/global/Amerigo_Banner_Storefront_may142018._CB495691552_.png" className="checkout-ad" />
                <div>
                    <h2 className="checkout-title">Your Shopping Basket</h2>
                    {/* <BasketItem/>
                    <BasketItem/> */}
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
