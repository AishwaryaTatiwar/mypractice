import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
  return (
  <div className="App">
  <Router>
  <nav>
  <ul>
  <Link to="/">Home</Link> &nbsp;&nbsp;
  <Link to="/about">About Us</Link> &nbsp;&nbsp;
  <Link to="/contact">Contact Us</Link> &nbsp;&nbsp;
  </ul>
  </nav>
  <Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/about" element={<About/>}></Route>
  <Route exact path="/contact" element={<Contact/>}></Route>
  </Routes>
  </Router>
  </div>
  )
  }
