import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

  render() {
    return <div className="navbar">
      <div className="navbar-content">
        <ul className="navbar-left">
          <a href="/#/songs"><li className="navbar-logo" /></a>
          <a href="/#/songs" className="text"><li>Home</li></a>
          <a href="/#/songs" className="text"><li>Stream</li></a>
          <a href="/#/users" className="text"><li>Community</li></a>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="navbar-right">
          <li><Link to="/upload"><button>Upload</button></Link></li>
          <li><button onClick={this.props.logout}>Logout</button></li>
          <li><button className="user">{this.props.currentUser.username}</button></li>
        </ul>
      </div>
    </div>
  }  
}