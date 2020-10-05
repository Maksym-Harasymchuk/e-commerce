import React from 'react';
import './filter.css'

const Filter = ({quantity,sortByPrice, sortByRating}) => {
    return (
        <div className={'filter'}>
            <div className="filter-result">
                <div className="filter-sort">
                    Found: {quantity}
                    <select onChange={event => sortByPrice(event.target.value)}>
                        <option>Latest</option>
                        <option value={'lowest'}>Lowest</option>
                        <option value={'highest'}>Highest</option>
                    </select>

                    <div className="filter-rating">
                        <select onChange={event => sortByRating(event.target.value)}>
                            <option value="3start">3⭐</option>
                            <option value="4start">4⭐</option>
                            <option value="5start">5⭐</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Filter;