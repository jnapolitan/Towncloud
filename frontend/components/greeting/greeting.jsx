import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  if (!props.currentUser) {
    return (
      <ul>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Log In</Link></li>
      </ul>
    )
  } else {
    return (
      <div>
        <h3>Welcome, {props.currentUser.username}!</h3>
        <button onClick={props.logout}>Logout</button>
      </div >
    )
  }

}

export default Greeting;