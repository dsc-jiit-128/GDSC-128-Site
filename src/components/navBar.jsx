import React from 'react'
import {  NavLink } from "react-router-dom";
import '../css/navBar.css'

function NavigationBar() {
  return (
    <>
      <div className=''>
        <div className="navbar-links desktop-navbar">
          <div className="nav-link">
            <NavLink to="/events">
              <li>EVENTS</li>
            </NavLink>
            <NavLink to="/teams">
              <li>TEAMS</li>
            </NavLink>
            <NavLink to="/login">
              <li>LOGIN</li>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar