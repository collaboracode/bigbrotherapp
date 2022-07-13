import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Users from './pages/Users'
import Houseguests from './pages/Houseguests'
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/houseguests">Houseguests</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />}/>
            
          
          <Route path="/users" element={<Users />}/>
            

          <Route path="/" element={<Home />}/>

          
          <Route path="/houseguests" element={<Houseguests />}/>
          
          
          <Route path="/profile" element={<Profile />}/>
           

        </Routes>
      </div>
    </Router>
  );
}


