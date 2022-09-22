// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
import About from './components/About';
import {
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <Routes>
        <Route exact path="/" element={<TextFormFunc />} />  
        <Route exact path="/about" element={<AboutFunc />} />
      </Routes>
    </>
  );
}

export default App;

function TextFormFunc() {
  return (
    <div className="container">
      <TextForm heading="Enter the text" title="Text Area" />
    </div>
  );
}

function AboutFunc() {
  return (
    <div className="container">
      <About />
    </div>
  );

}
