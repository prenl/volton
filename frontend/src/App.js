import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Router components
import { NotFound } from './components/pages/NotFound/NotFound';
import { Navbar } from './components/navbar/navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Basic Routing */}
      <Routes>
        <Route path='/'></Route>
        <Route path='catalog'></Route>
        <Route path='about-us'>
          <Route path='specials'></Route>
          <Route path='offers'></Route>
          <Route path='delivery'></Route>
          <Route path='warranty'></Route>
        </Route>
        <Route path='contacts'></Route>
        <Route path='register'></Route>
        <Route path='login'></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

