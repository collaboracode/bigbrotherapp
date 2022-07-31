import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Users from './pages/Users'
import Houseguests from './pages/Houseguests'
import Profile from './pages/Profile';
import Footer from './components/Footer';

export default function App() {

  return (
    <>
      <Router>
        <div id='main'>
          <nav className='m-2'>
            <ul>
              <li>
                <NavLink className={`btn btn-secondary`} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={`btn btn-secondary`} to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className={`btn btn-secondary`} to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink className={`btn btn-secondary`} to="/houseguests">Houseguests</NavLink>
              </li>

            </ul>
          </nav>

          <Routes>

            <Route path="/about" element={<About />} />


            <Route path="/users" element={<Users />} />


            <Route path="/" element={<Home />} />


            <Route path="/houseguests" element={<Houseguests />} />


            <Route path="/profile" element={<Profile />} />


          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  );
}


