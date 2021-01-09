import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'

const Product = ({id, title, img, price , rating}) => {
   
    const [ {basket}, dispatch] = useStateValue();
    
    
    const addToBasket = () => {
         dispatch({
             type:'ADD_TOO_BASKET',
             item: {
                 id:id,
                 title:title,
                 img:img,
                 price: price,
                 rating:rating,
             },
         })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map(( _ , i) => (
                        <p>⭐</p>
                    ) ) }
                </div>
            </div>
            <img src={img} alt="" />
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product
