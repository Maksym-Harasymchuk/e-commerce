import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./Provider/Context";
import reducer, {initialState} from "./Provider/Reducer";

ReactDOM.render(
    // <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
        <App/>
    </StateProvider>
    // </React.StrictMode>
    ,
    document.getElementById('root')
);
