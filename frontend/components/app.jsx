import React from 'react';
import { Route } from 'react-router-dom'; 
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div className="container">
    <Route path='/' component={SplashContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;