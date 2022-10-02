import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
   <header>
    <nav>
        {/* <img src='./assets/logo.jpg'></img> */}
        <h1>FLAMINGO</h1>
            <ul className="nav-list">
                <li className="nav-list-item">
                <NavLink to='/'
                className="nav-item">
                    Home
                </NavLink>
                </li>
                <li className="nav-list-item">
            <NavLink
              onClick={() => {
                
              }}
              to="/products"
              className="nav-item"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/cart" className="nav-item">
              Cart
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/signIn" className="nav-item">
            Sign In
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/signUp" className="nav-item">
            Sign Up
            </NavLink>
          </li>
            </ul>
        
    </nav>
   </header>


  )
}

export default Navbar