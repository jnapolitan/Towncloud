import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from "./splash/splash_container";
import NewSongFormContainer from './songs/new_song_form_container';
import EditSongFormContainer from './songs/edit_song_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, HashRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

const App = ({ store }) => (
  <div className="container">
    <Provider store={store}>
      <HashRouter>
        <div>
          <Switch>
            <AuthRoute exact path="/splash" component={SplashContainer} />
            <ProtectedRoute path="/" component={NavbarContainer} />
            <Redirect to="/" />
          </Switch>
          <ProtectedRoute path="/upload" component={NewSongFormContainer} />
        </div>
      </HashRouter>
    </Provider>
  </div>
);

export default App;