import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from "./splash/splash_container";
import NewSongFormContainer from './songs/new_song_form_container';
import EditSongFormContainer from './songs/edit_song_form_container';
import SongIndexContainer from './songs/song_index_container';
import SongShowContainer from './songs/song_show_container';
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
            <ProtectedRoute path="/songs" component={NavbarContainer} />
            <Redirect to="/songs" />
          </Switch>
          <Switch>
            <ProtectedRoute path="/upload" component={NewSongFormContainer} />
            <ProtectedRoute path="/songs/:songId/edit" component={EditSongFormContainer} />
            <ProtectedRoute path="/songs/:songId" component={SongShowContainer} />
            <ProtectedRoute path="/songs" component={SongIndexContainer} /> 
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  </div>
);

export default App;