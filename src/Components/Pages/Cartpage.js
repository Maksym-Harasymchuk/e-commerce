import React from 'react';
import {useStateValue} from "../../Provider/Context";
import CartItem from "./HomePage/Products/CartItem/CartItem";

const Cartpage = () => {
    const [{basket}] = useStateValue()
    console.log(basket);
    return (
        <div>
            {basket?.map(item => (
                    <CartItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
                )
            )}
        </div>
    );
};

export default Cartpage;