import React from 'react';
import {useStateValue} from "../../../../../Provider/Context";

const CartItem = ({id, image, title, price, rating}) => {
    const [{}, dispatch] = useStateValue()
    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className={'checkoutProduct'}>
            <img src={image} alt={''} className={'checkoutProduct__image'}/>

            <div className={'checkoutProduct__info'}>
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className={'checkoutProduct__rating'}>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => <p>⭐</p>)
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
};

export default CartItem;