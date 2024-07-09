import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Form from './Components/Form';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar title="TextUtil" />
      <div className='container my-2'>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
