import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container">
        <TextForm heading="Enter the text" title="Text Area" />
      </div>
    </>
  );
}



export default App;
