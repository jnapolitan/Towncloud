import React from 'react';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';

const App = () => (
  <div className="container">
    <ProtectedRoute exact path='/' component={NavbarContainer} />
    <AuthRoute path='/splash' component={Splash} />
    <AuthRoute path="/splash/login" component={LoginFormContainer} />
    <AuthRoute path="/splash/signup" component={SignupFormContainer} />
  </div>
);

export default App;