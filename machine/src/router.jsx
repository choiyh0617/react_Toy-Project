import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
// import Input from './components/vending machine/Input';
import Item from './components/vending machine/Item';
// import List from './components/vending machine/List'

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Item/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default router;