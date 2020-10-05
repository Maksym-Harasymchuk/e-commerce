import React from 'react';
import {products} from '../../../../Services/products'
import Product from './Product/Product'
import './products.css'

const Products = () => {
    console.log(products);
    return (
        <div className={'products'}>
            {
                products.map(({id,title, image, price, rating}) => (
                    <Product
                        image={image}
                        title={title}
                        rating={rating}
                        price={price}
                        key={id}
                        id={id}
                    />
                ))

            }
        </div>
    );
};

export default Products;