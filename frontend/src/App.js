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
import Catalog from './components/pages/Catalog/Catalog';
import UserProfile from './components/UserProfile/UserProfile';
import Login from './components/modals/Login/Login';

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Navbar />
        {/* Basic Routing */}
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='profile' index element={<UserProfile />}></Route>
          <Route path='login' index element={<Login />}></Route>
          <Route path='catalog' element={<Catalog />}></Route>
          <Route path='about-us' element={<AboutUs />}>
            <Route path='specials'></Route>
            <Route path='offers'></Route>
            <Route path='delivery'></Route>
            <Route path='warranty'></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

