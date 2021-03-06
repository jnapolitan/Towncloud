import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from "./splash/splash_container";
import NewSongFormContainer from './songs/new_song_form_container';
import EditSongFormContainer from './songs/edit_song_form_container';
import SongIndexContainer from './songs/song_index_container';
import SongShowContainer from './songs/song_show_container';
import PlaybarContainer from './playbar/playbar_container';
import UserIndexContainer from './users/user_index_container';
import UserShowContainer from './users/user_show_container';
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
          <Redirect to="/splash" />
          </Switch>
          <Switch>
            <ProtectedRoute path="/songs/:songId/edit" component={EditSongFormContainer} />
            <ProtectedRoute path="/songs/:songId" component={SongShowContainer} />
            <ProtectedRoute path="/upload" component={NewSongFormContainer} />
            <ProtectedRoute path="/songs" component={SongIndexContainer} /> 
            <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute path="/users" component={UserIndexContainer} />
          </Switch>
          <ProtectedRoute path="/" component={PlaybarContainer} />
        </div>
      </HashRouter>
    </Provider>
  </div>
);

export default App;