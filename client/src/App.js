import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header></Header>
      <section>
      
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
