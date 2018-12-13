import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import { Switch, Redirect, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const App = ({ store }) => (
  <div className="container">
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <AuthRoute exact path="/splash" component={SplashContainer} />
          <ProtectedRoute exact path="/" component={NavbarContainer} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </Provider>
  </div>
);

export default App;