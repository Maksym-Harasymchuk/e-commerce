import React from 'react';
import {NavLink} from 'react-router-dom'

import './navBar.css'

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <NavLink to={'/'} className={'navLink'} exact>Home</NavLink>
            <div className="left_side">
                <NavLink to={'/basket'} className={'navLink'} exact>Basket</NavLink>
                <NavLink to={'/about-us'} className={'navLink'} exact>About us</NavLink>
            </div>

        </div>
    );
};

export default Navbar;