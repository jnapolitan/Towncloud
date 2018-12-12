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
            <Link to="/splash/login">
              <button className="sign-in">Sign in</button>
            </Link>
            <Link to="/splash/signup">
              <button className="create-account">Create account</button>
            </Link>
          </div>
          <div className="hero-text">
            <h1>Discover more local artists with TownCloud</h1>
            <p>TownCloud lets you discover and connect with artists from your local community.</p>
          </div>
        </div>
      </div>;
  }
}