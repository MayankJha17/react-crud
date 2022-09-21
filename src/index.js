import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

const anotherRoot = ReactDOM.createRoot(document.getElementById('anotherRoot'));
anotherRoot.render(
  <h3><Hello /></h3>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Hello(){

  return (
    <h3> Hello World</h3>
  )

}

function Welcome() {
  return (
    <h3>Welcome</h3>
  )
}



