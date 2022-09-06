import './App.css';
import React, { useState, useEffect } from "react";
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
import GuestProfile from './pages/GuestProfile';
import Footer from './components/Footer';
import GuestEditor from './pages/GuestEditor';
import Login from './pages/Login';
import Logout from './components/Logout';

import userService from './services/UserService';
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  // not sure if this is the best way to do this, but it does work so...
  const getLoggedInStatus = () => {
    userService.loggedIn()
      .then(res => {
        if (res.status === 202) {
          setLoggedIn(true)
        }
        else {
          setLoggedIn(false)
        }
      })
      .catch(err => console.error(err))
  }
  useEffect(() => {
    getLoggedInStatus()
  }, [])
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
              {!loggedIn ? <li>
                <NavLink className={`btn btn-secondary`} to="/login">Login</NavLink>
              </li>: null}
              {loggedIn ? <li>
                <Logout getLoggedInStatus={getLoggedInStatus} />
              </li> : null}

            </ul>
          </nav>

          <Routes>

            <Route path='/login' element={<Login getLoggedInStatus={getLoggedInStatus} />} />

            <Route path="/about" element={<About />} />


            <Route path="/users" element={<Users />} />


            <Route path="/" element={<Home />} />


            <Route exact path="/houseguests" element={<Houseguests />} />


            <Route path="/houseguests/:id" element={<GuestProfile />} />


            <Route path="/houseguest_editor" element={<GuestEditor />} />
            <Route path="/houseguest_editor/:id" element={<GuestEditor />} />

          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  );
}


