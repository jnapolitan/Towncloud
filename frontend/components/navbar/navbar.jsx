import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return <div className="navbar">
        <div className="navbar-content">
          <ul className="navbar-left">
            <a href="/#/songs"><li className="navbar-logo" /></a>
            <a href="/#/songs" className="text"><li>Home</li></a>
            <a href="/#/songs" className="text"><li>Stream</li></a>
            <a href="/#/songs" className="text"><li>Collection</li></a>
          </ul>
          <div className="navbar-search">
            <input type="text" placeholder="Search" />
          </div>
          <ul className="navbar-right">
            <li><Link to="/upload"><button>Upload</button></Link></li>
            <li><button onClick={props.logout}>Logout</button></li>
            <li><button className="user">{props.currentUser.username}</button></li>
          </ul>
        </div>
      </div>
  }

export default Navbar;