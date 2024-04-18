import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Router components
import { NotFound } from './components/pages/NotFound/NotFound';
import { Navbar } from './components/navbar/navbar';

// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';

// pages
import AboutUs from './components/pages/AboutUs/AboutUs';
import Home from './components/pages/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      {/* Basic Routing */}
      <Routes>
        <Route path='/' index element={<Home />}></Route>
        <Route path='catalog'></Route>
        <Route path='about-us' element={<AboutUs />}>
          <Route path='specials'></Route>
          <Route path='offers'></Route>
          <Route path='delivery'></Route>
          <Route path='warranty'></Route>
        </Route>
        <Route path='contacts'></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

