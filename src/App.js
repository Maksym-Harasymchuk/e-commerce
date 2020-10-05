import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Products from "./Components/Pages/HomePage/Products/Products";
import Cartpage from "./Components/Pages/Cartpage";
import Filter from "./Filter/Filter";

const App = () => {
    const sortByPrice = (value) =>{
        console.log(value);
    }

    const sortByRating = (value) =>{
        console.log(value);
    }

    return (
        <Router>
            <Switch>
                <Route path={'/'} exact>
                    <NavBar/>
                    <HomePage/>
                    <Filter
                        quantity={1}
                        sortByPrice={sortByPrice}
                        sortByRating={sortByRating}
                    />
                    <Products/>
                </Route>
                <Route path={'/basket'}>
                    <NavBar/>
                    <Cartpage/>
                </Route>
                <Route path={'/about-us'}>
                    <NavBar/>
                    About us
                </Route>
            </Switch>
        </Router>
    );
};

export default App;