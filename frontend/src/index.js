import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/Login';
import AboutPage from './landing_page/about/aboutPage';
import ProductPage from './landing_page/products/Universe';
import PricingPage from './landing_page/pricing/PricePage';
import SupportPage from './landing_page/supports/SupportPage';
import Navbar from './landing_page/NavBar';
import Footer from './landing_page/Footer';
import NotFoundPage from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<AboutPage/>}/>
       <Route path='/product' element={<ProductPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
         <Route path='/support' element={<SupportPage/>}/>
         <Route path='*' element={<NotFoundPage/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
);

