import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return <div className="splash">
        <div className="hero">
          <div className="splash-logo" />
          <div className="splash-actions">
            <Link to="/login">
              <button className="sign-in">Sign in</button>
            </Link>
            <Link to="/signup">
              <button className="create-account">Create account</button>
            </Link>
          </div>
        </div>
      </div>;
  }
}