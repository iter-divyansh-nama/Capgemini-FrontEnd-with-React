import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Service from '../pages/Service';
import Header from '../component/Header';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Kitchen from '../RoutingInnerChildren/Kitchen';
import HeroComponent from '../component/HeroComponent';

const RoutingComponent = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <NavBar   />  
      <Routes>
        <Route path="/" element={<HomePage />} >
        <Route index element ={<HeroComponent />} />
        <Route path="kitchen" element={<Kitchen />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default RoutingComponent;