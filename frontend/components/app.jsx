import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div className="container">
    <ProtectedRoute exact path='/' component={NavbarContainer} />
    <AuthRoute path='/splash' component={SplashContainer} />
  </div>
);

export default App;