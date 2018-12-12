import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return <div className="navbar">
        <div className="navbar-content">
          <ul className="navbar-left">
            <li className="navbar-logo" />
            <li><a href="/">Home</a></li>
            <li><a href="/">Stream</a></li>
            <li><a href="/">Collection</a></li>
          </ul>
          <div className="navbar-search">
            <input type="text" placeholder="Search" />
          </div>
          <ul className="navbar-right">
            <li><button>Upload</button></li>
            <li><button onClick={props.logout}>Logout</button></li>
            <li><button className="user">{props.currentUser.username}</button></li>
          </ul>
        </div>
      </div>
  }

export default Navbar;