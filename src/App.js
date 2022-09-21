import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <Navbar title="Employee Management" about="About Employee Management"/>
  );
}



export default App;
