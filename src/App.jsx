import React from 'react';
import Home from './Home'
import {Routes, Route} from 'react-router-dom'
import CartPage from './components/CartPage'
import Checkout from './components/Checkout'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path="/cartpage" element={<CartPage />} />
         <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;

