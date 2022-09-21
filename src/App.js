import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container">
             <TextForm heading="Enter the text"  title= "Text Area"/>
      </div>
    </>
  );
}



export default App;
