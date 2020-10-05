import React from 'react';
import './Product.css'
import {useStateValue} from '../../../../../Provider/Context'

const Product = ({id, title, image, price, rating}) => {
    const [{}, dispatch] = useStateValue()

    const addToCart = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id, title, image, price, rating
            }
        })
    }
    return (
        <div className={'product'}>
            <img src={image} alt={''} className={'image'}/>
            <div className="bottom-part">
                <h3 className="title">{title}</h3>
                <p className="rating">{
                    Array(rating)
                        .fill()
                        .map((_) => <p key={Math.random()}>⭐</p>)
                }</p>
                <p className={'price'}>{price}</p>
                <button onClick={addToCart} className={'addToCart'}>Buy now!</button>
            </div>
        </div>
    );
};

export default Product;